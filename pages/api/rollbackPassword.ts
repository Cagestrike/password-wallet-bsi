import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'lib/prisma';
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'

export default withIronSessionApiRoute(handler, sessionOptions)

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const user = req.session.user
        if (!user || !user.isLoggedIn) {
            res.status(401).json({message: 'Session expired.'})
            return;
        }

        const {historyId, modifiedRecordId} = await req.body;

        const historyRecord = await prisma.data_Change.findUnique({
            where: {
                id: historyId
            }
        });

        const modifiedRecord = await prisma.password.findUnique({
            where: {
                id: modifiedRecordId
            }
        })

        await prisma.password.update({
            where: {
                id: modifiedRecordId
            },
            data: {
                password: historyRecord.previous_value_of_record
            }
        })

        await prisma.data_Change.create({
            data: {
                id_modified_record: +modifiedRecordId,
                previous_value_of_record: modifiedRecord?.password,
                present_value_of_record: historyRecord?.previous_value_of_record,
                action_type: 'ROLLBACK'
            }
        })

        res.status(200).json({message: 'Rollback successful'});
    } catch (e) {
        res.status(500).json({ message: (e as Error).message })
    }
}
