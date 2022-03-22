import {execSync} from "child_process";

export default async () => {
    console.log('process.env.DATABASE_URL');
    console.log(process.env.DATABASE_URL);
    execSync(`npx prisma db push`, {
        env: {
            ...process.env,
        },
    });
};