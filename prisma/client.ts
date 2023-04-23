import cookie from 'cookie';
import { randomUUID } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';

export function withSession(handler: (req: NextApiRequest, res: NextApiResponse) => any) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const cookies = cookie.parse(req.headers.cookie || '')
        if (!cookies.session) {
            const sessionId = randomUUID()
            res.setHeader('Set-Cookie', cookie.serialize('session', sessionId, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: 'strict',
                path: '/'
            }))
            req.session = {sessionId}
        } else {
            req.session = {sessionId: cookies.session}
        }
        return handler(req, res)
    }
}