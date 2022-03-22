import { PrismaClient, Password } from '@prisma/client'
import truncateTables from "../../../scripts/truncateTables";
import {registerUser, login as loginUser} from "@/lib/testUtils";
import {handler as addPasswordHandler} from '@/pages/api/addPassword'
import {createMocks} from "node-mocks-http";
import {NextApiRequest, NextApiResponse} from "next";
import {calculateMD5, encrypt} from "@/lib/cryptography";
const mockSession = require('../../../lib/MockIronStore')

const prisma = new PrismaClient();

const VALID_LOGIN = 'valid_login';
const VALID_PASSWORD = 'valid_password';

beforeEach(async () => {
    await registerUser(VALID_LOGIN, VALID_PASSWORD);
})

afterEach(async () => {
    await truncateTables(prisma);
})

test('pages/api/addPassword should not add password because of expired session', async () => {
    const web_address = 'some_web_address';
    const login = 'some_login'
    const description = 'descripcjano';
    const password = 'very strong password';
    const body = {
        web_address, login, description, password
    }
    const { req, res } = createMocks({
        method: 'POST',
        body
    });
    await mockSession.applySession(req);

    await addPasswordHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res.statusCode).toBe(401);
});

test('pages/api/addPassword should add encrypted password', async () => {
    const loggedInUser = await loginUser(VALID_LOGIN, VALID_PASSWORD);
    const web_address = 'some_web_address';
    const login = 'some_login'
    const description = 'descripcjano';
    const password = 'very strong password';
    const body = {
        web_address, login, description, password
    }
    const { req, res } = createMocks({
        method: 'POST',
        body
    });
    await mockSession.applySession(req);
    req.session.user = loggedInUser;
    await req.session.save();

    await addPasswordHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res.statusCode).toBe(200);

    const addedPassword: Password | null = await prisma.password.findFirst({
        where: {
            login
        }
    })

    expect(addedPassword).not.toBeNull();
    if (addedPassword) {
        // @ts-ignore
        expect(addedPassword.password).toBe(encrypt(password, calculateMD5(loggedInUser.passwordHash)));
        expect(addedPassword.login).toBe(login);
        expect(addedPassword.web_address).toBe(web_address)
    }
});

