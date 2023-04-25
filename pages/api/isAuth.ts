import { PrismaClient, Researchers } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const researcherId = Array.isArray(req.query.researcherId)
        ? req.query.researcherId[0]
        : req.query.researcherId;
        const response = await prisma.researchers.findUnique({
            where: {
                id: researcherId
            }
        })
        if (response) {
            res.send({isAuth: response.auth})
        }
    }
}