import {createMocks} from "node-mocks-http";
import registerHandler from "@/pages/api/register";
import {NextApiRequest, NextApiResponse} from "next";
const mockSession = require('./MockIronStore')
import {loginRoute} from "@/pages/api/login";

export const registerUser = async (login: string, password: string) => {
    const { req, res } = createMocks({
        method: 'POST',
        body: {
            login: login,
            password: password,
            isPasswordKeptAsHash: true
        }
    });
    await registerHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);
}

export const login = async (login: string, password: string) => {
    const { req, res } = createMocks({
        method: 'POST',
        body: {login, password},
    });
    await mockSession.applySession(req);

    await loginRoute(req as unknown as NextApiRequest, res as unknown as NextApiResponse)

    return req.session.user;
}