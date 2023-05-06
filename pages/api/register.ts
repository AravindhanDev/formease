import { PrismaClient, Researchers } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt';
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const {email, password} = req.body;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const data: Researchers = {
                id: randomUUID(),
                email,
                password: hash,
            };
            const response = await prisma.researchers.create({
                data: data
            });
            res.send({data: response, created: true});
        } catch (error: any) {
            console.error(error)
            if (error.code === "P2002") {
                res.send({error: 'User already exists', created: false});
            } else {
                console.error(error);
                res.status(500).send({error: 'Internal server error'});
            }
        } finally {
            await prisma.$disconnect()
        }
    } 
}
