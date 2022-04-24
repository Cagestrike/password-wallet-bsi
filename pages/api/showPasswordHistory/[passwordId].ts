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

        const passwordHistory = await prisma.data_Change.findMany({
            where: {
                id_modified_record: +passwordId
            },
            orderBy: {
                timestamp: 'desc'
            },
        })

        res.status(200).json({passwordHistory});
    } catch (e) {
        res.status(500).json({ message: (e as Error).message })
    }
}
