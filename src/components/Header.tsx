"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Box, Container, Flex, Heading, Link } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { genjyuuBold } from "@/assets/fonts/fonts";

export default function Header() {
  const pathname = usePathname() || "/";

  // パスに応じたヘッダータイトルのマッピング
  const titles: { [key: string]: string } = {
    "/home": "ホーム",
    "/archive": "アーカイブ",
    "/mypage": "マイページ",
    "/settings": "設定",
  };

  // 現在のパスに基づいてタイトルを取得
  const title = titles[pathname] || "";

  return (
    <Box bg="white" boxShadow="sm" position="sticky" top={0} zIndex={10}>
      <Container maxW="container.lg" px={6} py={3}>
        <Flex align="center" justify="space-between">
          <Link href={pathname}>
            <Heading as="h1" size="md" fontFamily={genjyuuBold.className}>
              {title}
            </Heading>
          </Link>
          <Link href="/settings">
            <SettingsIcon boxSize={6} />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
