import { PrismaClient } from '@prisma/client'
import truncateTables from "../../../scripts/truncateTables";
import { createMocks } from 'node-mocks-http';
const prisma = new PrismaClient();
import { registerUser } from "@/lib/testUtils";
import {loginRoute} from '@/pages/api/login'
import {NextApiRequest, NextApiResponse} from "next";
const mockSession = require('../../../lib/MockIronStore')
import type {User} from '@/pages/api/user'

const VALID_LOGIN = 'some_login';
const VALID_PASSWORD = 'some_password';

beforeEach(async () => {
    await registerUser(VALID_LOGIN, VALID_PASSWORD);
})

afterEach(async () => {
    await truncateTables(prisma);
})

test('pages/api/login should not login because of invalid login', async () => {
    const login = 'some_invalid_login';
    const password = VALID_PASSWORD
    const { req, res } = createMocks({
        method: 'POST',
        body: {login, password}
    });
    await loginRoute(req as unknown as NextApiRequest, res as unknown as NextApiResponse)

    expect(res.statusCode).toBe(400);
});

test('pages/api/login should not login because of invalid password', async () => {
    const login = VALID_LOGIN;
    const password = 'invalid_passwordoo'
    const { req, res } = createMocks({
        method: 'POST',
        body: {login, password}
    });
    await loginRoute(req as unknown as NextApiRequest, res as unknown as NextApiResponse)

    expect(res.statusCode).toBe(400);
});

test('pages/api/login should successfully log in', async () => {
    const login = VALID_LOGIN;
    const password = VALID_PASSWORD
    const { req, res } = createMocks({
        method: 'POST',
        body: {login, password},
    });
    await mockSession.applySession(req);

    await loginRoute(req as unknown as NextApiRequest, res as unknown as NextApiResponse)

    expect(res.statusCode).toBe(200);
    const user: User = res._getJSONData();
    expect(user.login).toBe(VALID_LOGIN)
    expect(user.isLoggedIn).toBeTruthy();
    expect(user.id).not.toBeNull()
});

