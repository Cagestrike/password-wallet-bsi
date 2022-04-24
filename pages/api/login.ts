import type {User} from './user'

import {withIronSessionApiRoute} from 'iron-session/next'
import {sessionOptions} from 'lib/session'
import {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from "lib/prisma";
import {Function, Prisma} from "@prisma/client";
import {calculateHMAC, calculateSha512} from "lib/cryptography";
import {log} from "util";

export default withIronSessionApiRoute(loginRoute, sessionOptions)

export async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    const {login, password} = await req.body
    try {
        console.log(`
                SELECT id, login, password_hash, salt, isPasswordKeptAsHash
                FROM User 
                WHERE login = ${login}
        `)
        const users: [] = await prisma.$queryRaw`
                SELECT id, login, password_hash, salt, isPasswordKeptAsHash
                FROM User
                WHERE login = ${login}
        `;
        if (!users.length) {
            res.status(400).json({message: 'Wrong username or password.'});
            return
        }
        const user: any = users.at(0)
        let passwordHash = '';

        if (user) {
            if (user.isPasswordKeptAsHash) {
                passwordHash = calculateSha512(password, user.salt, process.env.PEPPER as string);
            } else {
                passwordHash = calculateHMAC(password, process.env.KEY as string)
            }

            if (passwordHash === user.password_hash) {
                const loggedInUser = {
                    id: user.id,
                    isLoggedIn: true,
                    login: user.login,
                    passwordHash: user.password_hash,
                    isPasswordKeptAsHash: user.isPasswordKeptAsHash,
                    salt: user.salt
                } as User
                req.session.user = loggedInUser
                await req.session.save()
                const loginFunctionRecord: Function | null = await prisma.function.findUnique({
                        where: {
                            function_name: 'login'
                        }
                });
                await prisma.function_Run.create({
                    data: {
                        id_function: loginFunctionRecord.id,
                        id_user: loggedInUser.id
                    }
                });
                res.status(200).json(loggedInUser)
            } else {
                res.status(400).json({message: 'Wrong username or password.'});
                return
            }
        }
    } catch (error) {
        res.status(500).json({message: (error as Error).message})
    }
}
