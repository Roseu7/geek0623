'use client';

import Image from "next/image";
import Google from "@/assets/logos/google.png";
import X from "@/assets/logos/x.png";
import Discord from "@/assets/logos/discord.png";
import Apple from "@/assets/logos/apple.png";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();
const handleSocialLogin = async (prov: any) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: prov,
        options: {
            redirectTo: `${origin}/auth/callback`,
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },
    })

    if (error) {
        console.log(error);
        return
    }
};

export function GoogleLoginButton() {
    return (
        <button className = "p-3" onClick={() => handleSocialLogin('google')}>
            <Image src={Google} alt="Google" width={24} height={24} />
        </button >
    )
}

export function XLoginButton() {
    return (
        <button className="p-3" onClick={() => handleSocialLogin('twitter')}>
            <Image src={X} alt="X" width={22} height={22} />
        </button>
    )
}

export function DiscordLoginButton() {
    return (
        <button className="p-3" onClick={() => handleSocialLogin('discord')}>
            <Image src={Discord} alt="Discord" width={24} height={24} />
        </button>
    )
}