import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import type { User } from 'pages/api/user'
import { prisma } from 'lib/prisma';

export default withIronSessionApiRoute(logoutRoute, sessionOptions)

export async function logoutRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  const user = req.session.user
  const logoutFunctionRecord: Function | null = await prisma.function.findUnique({
    where: {
      function_name: 'logout'
    }
  });
  await prisma.function_Run.create({
    data: {
      id_function: logoutFunctionRecord.id,
      id_user: user.id
    }
  });
  req.session.destroy()
  res.json({id: null, isPasswordKeptAsHash: null, isLoggedIn: false, login: '', passwordHash: '' })
}
