import { PrismaClient, Password } from '@prisma/client'
import truncateTables from "../../../scripts/truncateTables";
import {registerUser, login as loginUser} from "@/lib/testUtils";
import {handler as decryptPasswordHandler} from '@/pages/api/decryptPassword/[passwordId]'
import {createMocks} from "node-mocks-http";
import {NextApiRequest, NextApiResponse} from "next";
import {handler as addPasswordHandler} from "@/pages/api/addPassword";
import {calculateMD5, decrypt} from "@/lib/cryptography";
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

test('pages/api/decryptPassword should not decrypt password because of expired session', async () => {
    const { req, res } = createMocks({
        method: 'GET',
        params: {
            passwordId: 5
        }
    });
    await mockSession.applySession(req);

    await decryptPasswordHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res.statusCode).toBe(401);
});

test('pages/api/decryptPassword not find password to decrypt', async () => {
    const loggedInUser = await loginUser(VALID_LOGIN, VALID_PASSWORD);
    const { req, res } = createMocks({
        method: 'GET',
        query: {
            passwordId: '5'
        }
    });
    await mockSession.applySession(req);
    req.session.user = loggedInUser;
    await req.session.save();

    await decryptPasswordHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res.statusCode).toBe(404);
});

test('pages/api/decryptPassword should decrypt password', async () => {
    const loggedInUser = await loginUser(VALID_LOGIN, VALID_PASSWORD);
    const web_address = 'some_web_address';
    const login = 'some_login'
    const description = 'descripcjano';
    const password = 'very strong password';
    const body = {
        web_address, login, description, password
    }
    let { req, res } = createMocks({
        method: 'POST',
        body
    });
    await mockSession.applySession(req);
    req.session.user = loggedInUser;
    await req.session.save();
    await addPasswordHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);
    const addedPassword: Password | null = await prisma.password.findFirst({
        where: {
            login
        }
    })

    const mocks = createMocks({
        method: 'GET',
        query: {
            // @ts-ignore
            passwordId: addedPassword.id
        }
    });
    await mockSession.applySession(mocks.req);
    mocks.req.session.user = loggedInUser;
    await mocks.req.session.save();

    await decryptPasswordHandler(mocks.req as unknown as NextApiRequest, mocks.res as unknown as NextApiResponse);

    expect(mocks.res.statusCode).toBe(200);
    // @ts-ignore
    expect(mocks.res._getJSONData().decryptedPassword).toBe(decrypt(addedPassword.password, calculateMD5(loggedInUser.passwordHash)))
});

