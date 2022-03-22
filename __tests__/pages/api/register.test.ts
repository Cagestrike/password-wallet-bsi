import { PrismaClient, User } from '@prisma/client'
import truncateTables from "../../../scripts/truncateTables";
import { createMocks } from 'node-mocks-http';
const prisma = new PrismaClient();
import registerHandler from '../../../pages/api/register'
import {NextApiRequest, NextApiResponse} from "next";

afterEach(async () => {
    await truncateTables(prisma);
})

test('pages/api/register should register new user with salt', async () => {
    const login = 'example_login'
    const password = 'example_password'
    const isPasswordKeptAsHash = true;
    const body = {
        login, password, isPasswordKeptAsHash
    }
    const { req, res } = createMocks({
        method: 'POST',
        body
    });

    await registerHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toBe('OK')
    expect(res._getJSONData().message).toBe('User created successfully. You may now log in.')

    const user = await prisma.user.findUnique({
        where: {
            login
        }
    }) as User;

    expect(user.login).toBe(login);
    expect(user.password_hash).not.toBe(password)
    expect(user.isPasswordKeptAsHash).toBe(isPasswordKeptAsHash);
    expect(user.salt).not.toBeNull();
    expect(user.salt).not.toBeFalsy();
});

test('pages/api/register should register new user without salt', async () => {
    const login = 'example_login'
    const password = 'example_password'
    const isPasswordKeptAsHash = false;
    const body = {
        login, password, isPasswordKeptAsHash
    }
    const { req, res } = createMocks({
        method: 'POST',
        body
    });

    await registerHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toBe('OK')
    expect(res._getJSONData().message).toBe('User created successfully. You may now log in.')

    const user = await prisma.user.findUnique({
        where: {
            login
        }
    }) as User;

    expect(user.login).toBe(login);
    expect(user.password_hash).not.toBe(password)
    expect(user.isPasswordKeptAsHash).toBe(isPasswordKeptAsHash);
    expect(user.salt).toBeFalsy();
})

test('pages/api/register should not register user with the same login', async () => {
    const login = 'example_login'
    const password = 'example_password'
    const isPasswordKeptAsHash = false;
    const body = {
        login, password, isPasswordKeptAsHash
    }
    const { req, res } = createMocks({
        method: 'POST',
        body
    });

    await registerHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res.statusCode).toBe(200);
    expect(res.statusMessage).toBe('OK')

    await registerHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res.statusCode).toBe(400)
})

