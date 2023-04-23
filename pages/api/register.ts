import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import bcrypt from 'bcrypt'
import { randomUUID } from "crypto"
import cookie from 'cookie'

const prisma = new PrismaClient()

interface Session {
    sessionId?: string
}

declare module 'next' {
    interface NextApiRequest {
        session: Session
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const {email, password} = req.body
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)
            const response = await prisma.researchers.create({
                data: {
                    id: randomUUID(),
                    email,
                    password: hash
                }
            })
            res.send({data: response, created: true})
        } catch (error) {
            res.send({data: 'user already exits', created: false})
        }
    }
}
