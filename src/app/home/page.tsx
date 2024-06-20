import { Main } from "@/features/main/components/Main"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"


export default async function MainPage() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/auth')
    }

    return (
        <div className="relative antiliased">
            <Main />
        </div>
    )
}