"use client";
import { createClient } from "@/utils/supabase/client";
import { Button, Box, Textarea, Card, Flex, Divider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AutosizeTextarea from "react-textarea-autosize";

export default function MessageInput(): JSX.Element {
  const supabase = createClient();
  const [text, setText] = useState("");
  const [user, setUser] = useState<string | undefined>(undefined);

  // ユーザー情報の取得
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user?.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // メッセージの送信
  const sendMessage = async () => {
    if (!text.trim()) {
      console.error("Message is empty");
      return;
    }

    try {
      const { error } = await supabase.from("messages").insert([
        {
          text: text.trim(),
          uid: user,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setText("");
      navigateAfterSend();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // 送信後のナビゲーション
  const navigateAfterSend = () => {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "/home";
    } else {
      window.location.reload();
    }
  };

  return (
    <Card variant="outline" padding={2} borderRadius="lg" marginBottom={4}>
      <Flex direction="column">
        <Textarea
          value={text}
          placeholder="今日のできごとを瓶に入れて誰かに届けてみましょう！"
          resize="none"
          variant="filled"
          as={AutosizeTextarea}
          bg="#FFFFFF"
          onChange={(e) => setText(e.target.value)}
          _hover={{ bg: "#FFFFFF", borderColor: "gray.300" }}
        />
        <Box my={2} w="full">
          <Divider />
        </Box>
        <Button
          colorScheme="teal"
          variant="outline"
          alignSelf="flex-end"
          onClick={sendMessage}
        >
          ボトメる
        </Button>
      </Flex>
    </Card>
  );
}
