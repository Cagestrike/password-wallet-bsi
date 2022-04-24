import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'lib/prisma';
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import {calculateMD5, decrypt, encrypt} from "lib/cryptography";

export default withIronSessionApiRoute(handler, sessionOptions)

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const user = req.session.user

        if (!user || !user.isLoggedIn) {
            res.status(401).json({message: 'Session expired.'})
            return
        }

        const {passwordId} = req.query;
        const {new_password} = await req.body;

        const walletEntry = await prisma.password.findUnique({
            where: {
                id: Number(passwordId)
            }
        })

        const encryptedPassword = encrypt(new_password, calculateMD5(user.passwordHash));

        const updatedPassword = await prisma.password.update({
            where: {
                id: +passwordId
            },
            data: {
                password: encryptedPassword
            }
        });

        await prisma.data_Change.create({
            data: {
                id_modified_record: +passwordId,
                previous_value_of_record: walletEntry.password,
                present_value_of_record: updatedPassword.password,
                action_type: 'UPDATE'
            }
        })

        res.status(200).json({updatedPassword, message: 'Password updated successfully'});
    } catch (e) {
        res.status(500).json({ message: (e as Error).message })
    }
}
