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
        const walletEntry = await prisma.password.findUnique({
            where: {
                id: Number(passwordId)
            }
        })

        if (walletEntry) {
            const decryptedPassword = decrypt(walletEntry.password, calculateMD5(user.passwordHash));
            res.status(200).json({decryptedPassword});
            return
        }
        res.status(404).json({message: 'Password not found'});
    } catch (e) {
        res.status(500).json({ message: (e as Error).message })
    }
}
