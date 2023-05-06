import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            let {surveyId, title, description} = req.body
            const response = await prisma.surveys.update({
                where: { id: surveyId },
                data: { title, description }
            })
            res.send({data: response})
        } catch (err) {
            res.send({error: err})
        } finally {
            await prisma.$disconnect()
        }
    }
}