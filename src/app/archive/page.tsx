"use client";
import { Box, Container, Flex } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShowOtherMessages from "@/features/archive/components/ShowOtherMessages";

export default function MyPage() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bg="gray.100">
      <Header />
      <Flex flex="1" overflowY="auto">
        <Container maxW="container.md" py="6">
          {/* ここにページ固有のコンテンツを配置 */}
          <ShowOtherMessages />
        </Container>
      </Flex>
      <Footer />
    </Box>
  );
}
