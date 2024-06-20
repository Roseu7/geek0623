import { AuthPage } from "@/features/auth/components/AuthPage"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Auth() {

    const supabase = createClient()
    const { data } = await supabase.auth.getUser()

    if (data?.user) {
        redirect('/home')
    }
    return (
        <div className="relative antialiased">
            <AuthPage />
        </div>
    );
}