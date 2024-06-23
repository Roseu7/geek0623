"use client";
import { useState } from "react";
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
import { Link } from "@chakra-ui/next-js";
import BackArrow from "@/components/ui/BackArrow";
import { signupWithOtp } from "./actions";

export default function LoginPage() {
  const [inputValue, setInputValue] = useState("");

  const handleAddValue = (additionalValue: string) => {
    setInputValue((prevValue) => `${prevValue}${additionalValue}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <BackArrow />
      <Stack
        spacing="48px"
        direction={["column", "row"]}
        className="flex-1 overflow-y-auto"
      >
        <div className="container mx-auto min-w-64 px-6 mt-12">
          <Tabs align="center">
            <TabList gap={12}>
              <Tab>電話番号</Tab>
              <Tab>メールアドレス</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Stack spacing={4} marginTop={2}>
                  <InputGroup>
                    <InputLeftAddon borderLeftRadius="full" padding={6}>
                      +81
                    </InputLeftAddon>
                    <Input
                      type="tel"
                      placeholder="90-XXXX-XXXX"
                      borderRadius="full"
                      padding={6}
                    />
                  </InputGroup>
                  <Link href="/auth/login/phone">
                    <Button
                      w="full"
                      colorScheme="teal"
                      padding={6}
                      borderRadius="full"
                    >
                      次へ
                    </Button>
                  </Link>
                </Stack>
              </TabPanel>

              <TabPanel>
                <Stack spacing={4} marginTop={2}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    borderRadius="full"
                    padding={6}
                    placeholder="入力してください"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Link href="/auth/login/mail">
                    <Button
                      w="full"
                      colorScheme="teal"
                      padding={6}
                      borderRadius="full"
                      onClick={() => signupWithOtp(inputValue)}
                    >
                      次へ
                    </Button>
                  </Link>
                  <Flex marginTop={6} justify="space-between">
                    {["@gmail.com", "@icloud.com", "@yahoo.co.jp"].map(
                      (domain) => (
                        <Button
                          key={domain}
                          colorScheme="blackAlpha"
                          size="sm"
                          onClick={() => handleAddValue(domain)}
                        >
                          {domain}
                        </Button>
                      )
                    )}
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

/* ろせさんが書いてたサンプルコード
 <form>
<label htmlFor="email">Email:</label><br/>
<input id="email" name="email" type="email" required /><br/>
<label htmlFor="password">Password:</label><br/>
<input id="password" name="password" type="password" required /><br/>
<button formAction={login}>Log in</button><br/>
<button formAction={signup}>Sign up</button>
</form> */
