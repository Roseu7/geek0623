"use client";
import { Box, Button, Center, Flex, Link, Text } from "@chakra-ui/react";
import { BackgroundImage } from "@/components/BackgroundImage";
import { genjyuuBold, genjyuuRegular } from "@/assets/fonts/fonts";
import {
  DiscordLoginButton,
  GoogleLoginButton,
  XLoginButton,
} from "@/features/auth/components/SocialButtons";
import { PhoneIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import botomelIcon from "@/assets/icon.png";
import Image from "next/image";

export function AuthPage() {
  const router = useRouter();

  return (
    <Center minH="100vh" maxW="screen-sm" mx="auto" position="relative">
      <BackgroundImage />
      <Box w="full" px={12}>
        <Flex direction="column" align="center">
          <Image
            src={botomelIcon}
            width={256}
            height={256}
            alt="アプリのアイコン"
          />
          {/* タイトル */}
          <Box
            fontSize="3xl"
            textAlign="center"
            color="blackAlpha.800"
            className={genjyuuBold.className}
          >
            ボトメル
          </Box>
          <Text mb={12} fontSize="sm" className={genjyuuRegular.className}>
            日記を瓶に詰め、届けてみましょう
          </Text>
          {/* アカウント登録ボタン */}
          <Flex direction="column">
            <Button
              py={4}
              colorScheme="teal"
              color="whiteAlpha.800"
              rounded="full"
              mb={8}
              w="80"
              h="14"
              gap={2}
              className={genjyuuBold.className}
              onClick={() => router.push("/auth/login")}
            >
              <PhoneIcon />
              電話番号・メールで続ける
            </Button>
            <Flex direction="row" justify="space-between">
              <GoogleLoginButton />
              <XLoginButton />
              <DiscordLoginButton />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}
