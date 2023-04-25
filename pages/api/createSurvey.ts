import { PrismaClient } from "@prisma/client"
import { randomUUID } from "crypto"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const {researcherId} = req.body
            const data = {
                id: randomUUID(),   
                title: '',
                description: '',
                researcherId
            }
            const response = await prisma.surveys.create({
                data: data
            })
            res.send({data: response})
        } catch (err) {
            res.send({error: err})
        } finally {
            await prisma.$disconnect()
        }
    }
}