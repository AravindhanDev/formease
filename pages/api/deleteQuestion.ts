import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "DELETE") {
        try {
            if (typeof req.query.id === 'string') {
                const response = await prisma.questionarries.delete({
                    where: {
                        id: req.query.id
                    }
                })
                res.send({data: response})
            }  
        } catch (err) {
            res.send({error: err})
        } finally {
            await prisma.$disconnect()
        }
    }
}

