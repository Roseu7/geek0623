"use client";
import { SetStateAction, useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Stack,
  Button,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import BackArrow from "@/components/ui/BackArrow"; // カスタムバックアローコンポーネント
import { login, signup } from "../../actions";

// パスワード入力コンポーネント
export default function PasswordInput() {
  // パスワードの表示状態と値を管理するステート
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  // パスワードの表示・非表示を切り替える関数
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  // パスワードの値を更新する関数
  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setPassword(e.target.value);

  // パスワード送信処理（ダミー）
  const handleSubmit = () => console.log("Password submitted:", password);

  return (
    <>
      <BackArrow />
      <Box marginX={8} marginTop={8}>
        <Stack spacing={2}>
          <Heading as="h1" size="lg">
            パスワードが必要です
          </Heading>
          <Text marginBottom={4}>
            数字・英字・記号から２種類以上を組み合わせた６文字以上のパスワードを設定してください
          </Text>
        </Stack>
      </Box>
      <Stack spacing={4} maxW="md" mx="auto" mt={8} p={6} rounded="md">
        <InputGroup>
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="入力してください"
            value={password}
            onChange={handlePasswordChange}
            rounded="md"
          />
          <InputRightElement>
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              onClick={handlePasswordVisibility}
              variant="ghost"
            />
          </InputRightElement>
        </InputGroup>
        <Button colorScheme="teal" onClick={handleSubmit} formAction={signup}>
          次へ
        </Button>
      </Stack>
    </>
  );
}
