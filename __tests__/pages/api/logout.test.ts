import {registerUser, login} from "@/lib/testUtils";
import truncateTables from "../../../scripts/truncateTables";
import {PrismaClient} from '@prisma/client'
import {createMocks} from "node-mocks-http";
import {NextApiRequest, NextApiResponse} from "next";
import {logoutRoute} from '@/pages/api/logout'
const mockSession = require('../../../lib/MockIronStore')
const VALID_LOGIN = 'some_login';
const VALID_PASSWORD = 'some_password';

const prisma = new PrismaClient();

beforeEach(async () => {
    await registerUser(VALID_LOGIN, VALID_PASSWORD);
})

afterEach(async () => {
    await truncateTables(prisma);
})

test('should destroy session', async () => {
    const loggedInUser = await login(VALID_LOGIN, VALID_PASSWORD);
    const { req, res } = createMocks({
        method: 'POST'
    });
    await mockSession.applySession(req);
    req.session.user = loggedInUser;
    await req.session.save();

    await logoutRoute(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res._getJSONData().isLoggedIn).toBeFalsy()
})