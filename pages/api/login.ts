import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const {email, password} = req.body                     
        const user = await prisma.researchers.findUnique({
            where: {
                email: email
            }
        })  
        if (user) {
            const isMatch = await bcrypt.compare(password, user?.password)
            if (isMatch) {
                res.send({auth: true, data: "correct credentials"})
            } else {
                res.send({auth: false, data: 'incorrect password'})
            }
        }
        res.send({auth: false, data: "User not found"})
    }
}
