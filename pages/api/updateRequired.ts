import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "PATCH") {
        try {
            const {id, required} = req.body

            const response = await prisma.questionarries.update({
                where: {id},
                data: {required}
            })
            res.send({data: response})
        } catch (err) {
            res.send({error: err})
        } finally {
            await prisma.$disconnect()
        }
    }
}