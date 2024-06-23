"use client";
import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";

function BackArrow() {
  const navigation = useRouter();

  return (
    <Box position="sticky" top={0} zIndex={10} marginTop={3} marginLeft={6}>
      <Box as="button" onClick={() => navigation.back()}>
        <Icon as={MdArrowBackIos} boxSize={6} />
      </Box>
    </Box>
  );
}

export default BackArrow;
