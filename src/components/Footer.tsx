"use client";
import { Box, Container, Flex, Link, Icon } from "@chakra-ui/react";
import { MdHome, MdPerson } from "react-icons/md";
import { HiArchive } from "react-icons/hi";
import { GoHome, GoHomeFill } from "react-icons/go";
import React from "react";

// アイコンリンクコンポーネントの定義
const IconLink = ({ href, icon }) => (
  <Link href={href}>
    <Icon as={icon} height={8} width={8} />
  </Link>
);

export default function Footer() {
  return (
    <Box position="sticky" bottom={0} zIndex={10} bg="white" boxShadow="sm">
      <Container maxW="container.lg" px={16} py={3}>
        <Flex justify="space-between">
          {/* アイコンリンクの使用 */}
          <IconLink href="/home" icon={GoHome} />
          <IconLink href="/archive" icon={HiArchive} />
          <IconLink href="/mypage" icon={MdPerson} />
        </Flex>
      </Container>
    </Box>
  );
}
