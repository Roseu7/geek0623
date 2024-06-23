"use client";
import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";

function BackArrow() {
  const navigation = useRouter();

  return (
    <Box position="sticky" top={0} zIndex={10}>
      <Box as="button" onClick={() => navigation.back()}>
        <Icon as={MdArrowBackIos} boxSize={6} marginTop={4} marginLeft={4} />
      </Box>
    </Box>
  );
}

export default BackArrow;
