import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'lib/prisma';
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import {calculateHMAC, calculateMD5, calculateSha512, decrypt, encrypt, generateSalt} from "lib/cryptography";
import {User} from "./user";

export default withIronSessionApiRoute(handler, sessionOptions)

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {new_password, new_password_confirm} = await req.body;

    try {
        if (new_password !== new_password_confirm) {
            res.status(400).json({message: `New passwords don't match.`});
            return
        }

        const user = req.session.user
        if (!user || !user.isLoggedIn) {
            res.status(401).json({message: 'Session expired.'})
            return;
        }
        const current_users: [] = await prisma.$queryRaw`SELECT password_hash, isPasswordKeptAsHash, salt FROM User WHERE id = ${user.id}`;
        if (!current_users.length) {
            res.status(401).json({message: 'Session expired.'})
            return;
        }
        const current_user: any = current_users.at(0);
        const old_password = current_user.password_hash;
        let new_password_encrypted = '';
        let new_salt = '';
        if (current_user.isPasswordKeptAsHash) {
            new_salt = generateSalt();
            new_password_encrypted = calculateSha512(new_password, new_salt, process.env.PEPPER as string);
        } else {
            new_password_encrypted = calculateHMAC(new_password, process.env.KEY as string)
        }
        await prisma.$queryRaw`
        UPDATE User
        SET password_hash = ${new_password_encrypted},
            salt = ${new_salt}
        WHERE id = ${user.id} 
    `
        // @ts-ignore
        req.session.user?.passwordHash = new_password_encrypted;
        // @ts-ignore
        req.session.user?.salt = new_salt;
        await req.session.save()

        const passwords: any [] = await prisma.$queryRaw`
                SELECT * FROM Password
                WHERE id_user = ${user.id}
            `;
        for (const password of passwords) {
            const decrypted = decrypt(password.password, calculateMD5(old_password));
            const encrypted = encrypt(decrypted, calculateMD5(new_password_encrypted))
            await prisma.$queryRaw`
                UPDATE Password SET password = ${encrypted}
                WHERE id = ${password.id}
            `
        }
        res.status(200).json({message: 'Password changed successfully. Encrypted passwords updated successfully.'});
    } catch (e) {
        res.status(500).json({ message: (e as Error).message })
    }
}
