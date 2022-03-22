import {registerUser, login} from "@/lib/testUtils";
import truncateTables from "../../../scripts/truncateTables";
import { PrismaClient, User } from '@prisma/client'
import {createMocks} from "node-mocks-http";
import {NextApiRequest, NextApiResponse} from "next";
import { handler as changePasswordHandler} from '@/pages/api/changePassword'
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

test('pages/api/changePassword should not change password because they don\'t match', async () => {
    const newPassword = 'some_new_password';
    const newPasswordConfirm = 'some_new_password_no_match';
    const { req, res } = createMocks({
        method: 'POST',
        body: {
            new_password: newPassword,
            new_password_confirm: newPasswordConfirm
        }
    });

    await changePasswordHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res.statusCode).toBe(400);
    expect(res._getJSONData().message).toBe("New passwords don't match.")
});

test('pages/api/changePassword should not change password because user logged out', async () => {
    const newPassword = 'some_new_password';
    const newPasswordConfirm = 'some_new_password';
    const { req, res } = createMocks({
        method: 'POST',
        body: {
            new_password: newPassword,
            new_password_confirm: newPasswordConfirm
        }
    });
    await mockSession.applySession(req);

    await changePasswordHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res.statusCode).toBe(401);
    expect(res._getJSONData().message).toBe('Session expired.')
});

test('pages/api/changePassword should successfully change password', async () => {
    const loggedInUser = await login(VALID_LOGIN, VALID_PASSWORD);
    const newPassword = 'some_new_password';
    const newPasswordConfirm = 'some_new_password';
    const { req, res } = createMocks({
        method: 'POST',
        body: {
            new_password: newPassword,
            new_password_confirm: newPasswordConfirm
        }
    });
    const oldUser = await prisma.user.findUnique({
        where: {
            login: VALID_LOGIN
        }
    }) as User;

    await mockSession.applySession(req);
    req.session.user = loggedInUser;
    await req.session.save();
    await changePasswordHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    const newUser = await prisma.user.findUnique({
        where: {
            login: VALID_LOGIN
        }
    }) as User;

    expect(res.statusCode).toBe(200);
    expect(newUser.password_hash).not.toBe(oldUser.password_hash);
    expect(newUser.salt).not.toBe(oldUser.salt)
});