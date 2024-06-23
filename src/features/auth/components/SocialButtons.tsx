"use client";

import Image from "next/image";
import Google from "@/assets/logos/google.png";
import X from "@/assets/logos/x.png";
import Discord from "@/assets/logos/discord.png";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@chakra-ui/react";

const supabase = createClient();
const handleSocialLogin = async (prov: any) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: prov,
    options: {
      redirectTo: `${origin}/auth/callback`,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    console.log(error);
    return;
  }
};

export function GoogleLoginButton() {
  return (
    <Button
      colorScheme="yellow"
      variant="outline"
      paddingX={8}
      onClick={() => handleSocialLogin("google")}
    >
      <Image src={Google} alt="Google" width={24} height={24} />
    </Button>
  );
}

export function XLoginButton() {
  return (
    <Button
      colorScheme="blackAlpha"
      variant="outline"
      paddingX={8}
      onClick={() => handleSocialLogin("twitter")}
    >
      <Image src={X} alt="X" width={22} height={22} />
    </Button>
  );
}

export function DiscordLoginButton() {
  return (
    <Button
      colorScheme="purple"
      variant="outline"
      paddingX={8}
      onClick={() => handleSocialLogin("discord")}
    >
      <Image src={Discord} alt="Discord" width={24} height={24} />
    </Button>
  );
}
