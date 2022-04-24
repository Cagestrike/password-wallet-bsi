import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'lib/prisma';
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import {calculateMD5, encrypt} from "lib/cryptography";

export default withIronSessionApiRoute(handler, sessionOptions)

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {web_address, login, description, password} = await req.body;

    try {
        const user = req.session.user

        if (!user || !user.isLoggedIn) {
            res.status(401).end()
            return
        }

        const encryptedPassword = encrypt(password, calculateMD5(user.passwordHash));

        await prisma.$queryRaw`
            INSERT INTO Password (password, id_user, web_address, description, login)
            VALUES (${encryptedPassword}, ${user.id}, ${web_address}, ${description}, ${login})
        `
        const addPasswordFunctionRecord: Function | null = await prisma.function.findUnique({
            where: {
                function_name: 'addPassword'
            }
        });
        await prisma.function_Run.create({
            data: {
                id_function: addPasswordFunctionRecord.id,
                id_user: user.id
            }
        });
            res.status(200).json({message: 'Credentials added successfully'});
    } catch (e) {
        res.status(500).json({ message: (e as Error).message })
    }
}
