import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import bcrypt from 'bcrypt'
import { randomUUID } from "crypto"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const {email, password} = req.body
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)
            const data = {
                id: randomUUID(),
                email,
                password: hash,
                auth: true
            }
            const response = await prisma.researchers.create({
                data: data
            })
            res.send({data: response, created: true})
        } catch (error) {
            res.send({data: 'user already exits', created: false})
        }
    }
}
