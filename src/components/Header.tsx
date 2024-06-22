"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Box, Container, Flex, Heading, Link } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { genjyuuBold } from "@/assets/fonts/fonts";

export default function Header() {
  // useLocationから現在のURLのパスを取得
  const pathname = usePathname() || "/";

  // ヘッダータイトルを格納する変数を初期化
  let title: string = "";

  // パスに応じてヘッダータイトルを設定
  switch (pathname) {
    case "/home":
      title = "ホーム";
      break;
    case "/archive":
      title = "アーカイブ";
      break;
    case "/mypage":
      title = "マイページ";
      break;
    case "/settings":
      title = "設定";
      break;
  }

  return (
    // <header className="bg-white shadow-sm sticky top-0 z-10">
    //   <div className="container mx-auto px-6 py-3 flex items-center justify-between">
    //     <a href={pathname}>{title}</a>
    //     <a href="/settings">
    //       <div>設定</div>
    //     </a>
    //   </div>
    // </header>
    <Box bg="white" boxShadow="sm" position="sticky" top={0} zIndex={10}>
      <Container maxW="container.lg" px={6} py={3}>
        <Flex align="center" justify="space-between">
          <Link href={pathname}>
            {/* <Box >{title}</Box> */}
            <Heading as="h1" size="md" fontFamily={genjyuuBold.className}>
              {title}
            </Heading>
          </Link>
          <Link href="/settings">
            {/* <Box>設定</Box> */}
            <SettingsIcon boxSize={6}></SettingsIcon>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
