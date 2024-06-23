"use client";
import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";

export default function MyPage() {
  return (
    <Box className="flex flex-col min-h-screen " bg="gray.100">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6"></div>
      </main>
      <Footer />
    </Box>
  );
}
