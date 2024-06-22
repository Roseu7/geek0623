"use client";
import { createClient } from "@/utils/supabase/client";
import { Button, Box, Textarea, Card, Flex, Divider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AutosizeTextarea from "react-textarea-autosize";

export default function MessageInput(): JSX.Element {
  const supabase = createClient();
  const [text, setText] = useState("");
  const [user, setUser] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user?.id);
    })();
  }, []);

  const sendMessage = async () => {
    try {
      if (!(text === "" || text === null || text === undefined)) {
        const { error } = await supabase.from("messages").insert([
          {
            text: text.trim(),
            uid: user,
            created_at: new Date().toISOString(),
          },
        ]);

        if (error) {
          throw error;
        }
      } else {
        console.error("Message is empty");
      }

      setText("");

      const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = "/home";
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    // <Box pos="relative">
    //   <Textarea
    //     value={text}
    //     placeholder="今日はどんなことがありましたか？"
    //     resize={"none"}
    //     colorScheme="gray"
    //     variant={"filled"}
    //     as={AutosizeTextarea}
    //     bg={"#FFFFFF"}
    //     onChange={(e) => setText(e.target.value)}
    //   />
    //   <Box>
    //     <Button
    //         colorScheme="teal"
    //         pos={"absolute"}
    //         right="0%"
    //         onClick={sendMessage}
    //       >
    //         投稿する
    //     </Button>
    //   </Box>
    // </Box>
    <Card variant={"outline"} padding={2} borderRadius={"lg"}>
      <Flex direction={"column"}>
        <Textarea
          value={text}
          placeholder="今日のできごとを瓶に入れて誰かに届けてみましょう！"
          resize={"none"}
          variant={"filled"}
          as={AutosizeTextarea}
          bg={"#FFFFFF"}
          onChange={(e) => setText(e.target.value)}
          _hover={{ bg: "#FFFFFF", borderColor: "gray.300" }}
        />
        <Box my={2} w={"full"}>
          <Divider />
        </Box>
        <Button
          colorScheme={"teal"}
          variant={"outline"}
          alignSelf={"flex-end"}
          onClick={sendMessage}
        >
          ボトメる
        </Button>
      </Flex>
    </Card>
  );
}
