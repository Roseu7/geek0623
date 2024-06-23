"use client";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { login, signup } from "./actions";
import Header from "@/components/Header";
import { BackgroundImage } from "@/components/BackgroundImage";
import { Link } from "@chakra-ui/next-js";
import BackArrow from "@/components/ui/BackArrow";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <BackgroundImage /> */}
      {/* <Header /> */}
      <BackArrow />
      <Stack
        spacing="48px"
        direction={["column", "row"]}
        className="flex-1 overflow-y-auto"
      >
        <div className="container mx-auto min-w-64 px-12 mt-12">
          <Tabs align="center">
            <TabList gap={12}>
              <Tab>電話番号</Tab>
              <Tab>メールアドレス</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Stack spacing={4} marginTop={2}>
                  <InputGroup>
                    <InputLeftAddon borderLeftRadius={"full"}>
                      +81
                    </InputLeftAddon>
                    <Input
                      type="tel"
                      placeholder="90-XXXX-XXXX"
                      borderRadius={"full"}
                    />
                  </InputGroup>
                  <Button
                    w={"full"}
                    colorScheme="teal"
                    padding={6}
                    borderRadius={"full"}
                  >
                    次へ
                  </Button>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack spacing={4} marginTop={2}>
                  <Input
                    borderRadius={"full"}
                    padding={6}
                    placeholder="入力してください"
                  />
                  <Link href="/login/mail">
                    <Button
                      w={"full"}
                      colorScheme="teal"
                      padding={6}
                      borderRadius={"full"}
                    >
                      次へ
                    </Button>
                  </Link>
                  <Flex marginTop={6} justify={"space-between"}>
                    <Button colorScheme="blackAlpha" size={"sm"}>
                      @gmail.com
                    </Button>
                    <Button colorScheme="blackAlpha" size={"sm"}>
                      @icloud.com
                    </Button>
                    <Button colorScheme="blackAlpha" size={"sm"}>
                      @yahoo.co.jp
                    </Button>
                  </Flex>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </Stack>
    </div>
  );
}
