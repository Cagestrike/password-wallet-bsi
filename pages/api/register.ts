import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'lib/prisma';
import {calculateHMAC, calculateSha512, generateSalt} from "lib/cryptography";
import {Function} from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { login, password, isPasswordKeptAsHash } = await req.body;
    try {
        const usersWithTheSameLogin: [] = await prisma.$queryRaw`SELECT id FROM User WHERE login = ${login}`;
        if (usersWithTheSameLogin.length) {
            res.status(400).json({message: 'This login is taken by another user.'});
            return
        }

        let password_encrypted = '';
        let salt = '';
        if (isPasswordKeptAsHash) {
            salt = generateSalt();
            password_encrypted = calculateSha512(password, salt, process.env.PEPPER as string);
        } else {
            password_encrypted = calculateHMAC(password, process.env.KEY as string)
        }
        await prisma.$queryRaw`
            INSERT INTO User (login, password_hash, salt, isPasswordKeptAsHash) 
            VALUES (${login}, ${password_encrypted}, ${salt}, ${isPasswordKeptAsHash})`

        const user = await prisma.user.findUnique({
            where: {
                login
            }
        })
        const registerFunctionRecord: Function | null = await prisma.function.findUnique({
            where: {
                function_name: 'register'
            }
        });
        await prisma.function_Run.create({
            data: {
                id_function: registerFunctionRecord.id,
                id_user: user.id
            }
        });
        res.status(200).json({message: 'User created successfully. You may now log in.'});
    } catch (e) {
        res.status(500).json({ message: (e as Error).message })
    }
}