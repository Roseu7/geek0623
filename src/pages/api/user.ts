import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@/utils/supabase/server'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getSession()

    if (error || !data.session) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const user = data.session.user
    return res.status(200).json({ user })
}