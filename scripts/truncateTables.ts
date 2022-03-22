import {PrismaClient} from "@prisma/client";

const TABLE_NAMES = ['Password', 'User'];

export default async (prisma: PrismaClient) => {
    for (let table of TABLE_NAMES) {
        // console.log(table)
        // handle async stuff
        // @ts-ignore
        await prisma[table].deleteMany()
    }
}