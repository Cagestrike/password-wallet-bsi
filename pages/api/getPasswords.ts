

import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'lib/prisma';
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import {calculateMD5, encrypt} from "lib/cryptography";

export default withIronSessionApiRoute(handler, sessionOptions)

async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const user = req.session.user

        if (!user || !user.isLoggedIn) {
            res.status(401).json({message: 'Session expired.'})
            return
        }
        res.status(200).json({message: 'Api called !!!'});

    } catch (e) {
        res.status(500).json({ message: (e as Error).message })
    }
}
