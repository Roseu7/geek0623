import BackArrow from "@/components/ui/BackArrow";
import {
  Box,
  Button,
  HStack,
  Heading,
  PinInput,
  PinInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function page() {
  return (
    <>
      <BackArrow />
      <Box marginX={8} marginTop={8}>
        <Stack spacing={2}>
          <Heading as="h1" size={"lg"}>
            認証コード
          </Heading>
          <Text marginBottom={4}>naoki.nico@gmail.comへ送信しました</Text>
          <HStack align={"center"} gap={2} marginBottom={6}>
            <PinInput type="alphanumeric" size="lg">
              {/* 何桁かは任せる */}
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <Button
            colorScheme="teal"
            borderRadius={"full"}
            paddingY={6}
            paddingX={8}
          >
            再送信する
          </Button>
        </Stack>
      </Box>
    </>
  );
}
