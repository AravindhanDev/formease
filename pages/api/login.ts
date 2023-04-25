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
                const data = {
                    auth: true
                }
                await prisma.researchers.update({
                    where: {
                        id: user.id
                    },
                    data: data
                })
                res.send({auth: true, message: "correct credentials", data: {id: user.id}})
            } else {
                res.send({auth: false, message: 'incorrect password'})
            }
        }
        res.send({auth: false, message: "User not found"})
    }
}
