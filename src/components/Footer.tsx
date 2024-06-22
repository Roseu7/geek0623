"use client";
import { Box, Container, Flex, Link, Icon } from "@chakra-ui/react";
import { MdHome, MdPerson } from "react-icons/md";
import { HiArchive } from "react-icons/hi";
import React from "react";

export default function Footer() {
  return (
    // <div className="sticky bottom-0 z-10 bg-white shadow-sm">
    //   <nav className="container mx-auto flex justify-between px-16 py-4">
    //     <a href="/home">
    //       <div>ホーム</div>
    //     </a>
    //     <a href="/archive">
    //       <div>アーカイブ</div>
    //     </a>
    //     <a href="/mypage">
    //       <div>マイページ</div>
    //     </a>
    //   </nav>
    // </div>
    <Box position="sticky" bottom={0} zIndex={10} bg="white" boxShadow="sm">
      <Container maxW="container.lg" px={16} py={3}>
        <Flex justify="space-between">
          <Link href="/home">
            <Icon as={MdHome} height={8} width={8} />
          </Link>
          <Link href="/archive">
            <Icon as={HiArchive} height={8} width={8} />
          </Link>
          <Link href="/mypage">
            <Icon as={MdPerson} height={8} width={8} />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
