import { createClient } from "@/utils/supabase/server";
import { AuthPage } from "@/features/auth/components/AuthPage"

export default function Auth() {
    return (
        <div className="relative antialiased">
            <AuthPage />
        </div>
    );
}