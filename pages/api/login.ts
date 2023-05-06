import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import bcrypt from 'bcrypt';

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const {email, password} = req.body                     
            const user = await prisma.researchers.findUnique({
                where: {
                    email: email
                }
            })  
            if (user) {
                const isMatch = await bcrypt.compare(password, user?.password)
                if (isMatch) {
                    res.send({auth: true, message: "correct credentials", data: {id: user.id}})
                } else {
                    res.send({auth: false, message: 'incorrect password'})
                }
            } else {
                res.send({auth: false, message: "User not found"})
            }
        } catch (error) {
            res.send({auth: false, message: "Internal server error"})
        } finally {
            await prisma.$disconnect()
        }
    }
}
