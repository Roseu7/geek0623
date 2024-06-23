"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { FetchMessages } from "../components/FetchMessages";
import { Message } from "@/types/index";
import {
  Button,
  Card,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdBookmarkBorder, MdDeleteOutline } from "react-icons/md";
import { Anzumoji } from "@/assets/fonts/fonts";
import { useRouter } from "next/router";

// 日付を指定のフォーマットに変換する関数
const getFormattedDate = (date: Date, format: string): string => {
  // 日付コンポーネントを取得し、必要に応じてゼロ埋めを行う関数
  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

  // 日付の各コンポーネントをマッピング
  const symbols: { [key: string]: number | string } = {
    M: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours() % 12 || 12,
    m: date.getMinutes(),
    s: date.getSeconds(),
    yyyy: date.getFullYear(),
    MM: zeroPad(date.getMonth() + 1, 2),
    dd: zeroPad(date.getDate(), 2),
    hh: zeroPad(date.getHours() % 12 || 12, 2),
    mm: zeroPad(date.getMinutes(), 2),
    ss: zeroPad(date.getSeconds(), 2),
    a: date.getHours() < 12 ? "午前" : "午後",
  };

  // 指定されたフォーマットに従って日付を整形
  return format.replace(
    /(yyyy|MM|dd|hh|mm|ss|a)/g,
    (match) => `${symbols[match]}`
  );
};

export default function GetMessages({ date }: { date: string }) {
  const supabase = createClient();
  const [user, setUser] = useState<string | undefined>(undefined);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
      } else {
        setUser(data.user?.id);
      }
    };

    fetchUser();
  });

  useEffect(() => {
    const loadMessages = async () => {
      if (user) {
        const messages = await FetchMessages();
        setMessages(messages);
      }
    };

    loadMessages();
  }, [user, date]);

  const deleteMessage = async (messageId: number) => {
    try {
      const res = await supabase.from("messages").delete().eq("id", messageId);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {messages.map((message) => (
        <Card
          variant="outline"
          paddingX={6}
          paddingY={4}
          borderRadius="lg"
          key={message.id}
          marginTop={4}
        >
          <Flex direction="column" gap={8}>
            <Flex direction="row" align="center" gap={2}>
              <Text fontSize={"2xl"} className={Anzumoji.className}>
                {message.text}
              </Text>
              <Spacer />
              <Text fontSize="xs">
                {getFormattedDate(
                  new Date(message.created_at),
                  "hh:mm yyyy/MM/dd"
                )}
              </Text>
            </Flex>
            <Flex
              direction="row"
              align="center"
              gap={2}
              onClick={() => deleteMessage(message.id)}
            >
              <Spacer />
              {/* <MdBookmarkBorder size={24} /> */}
              <Button size={"sm"}>
                <MdDeleteOutline size={24} onClick={onOpen} />
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>日記を捨てる</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>ほんとうに捨ててしまいますか？</ModalBody>

                  <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                      やめる
                    </Button>
                    <Button
                      colorScheme="blue"
                      onClick={() => deleteMessage(message.id)}
                    >
                      捨てる
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>{" "}
            </Flex>
          </Flex>
        </Card>
      ))}
    </>
  );
}
