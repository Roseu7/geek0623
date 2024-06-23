"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { FetchMessages } from "@/features/main/components/FetchMessages";
import { Card, Flex, Spacer, Text } from "@chakra-ui/react";
import { MdBookmarkBorder, MdDeleteOutline } from "react-icons/md";
import { Anzumoji } from "@/assets/fonts/fonts";

type Message = {
  id: number;
  created_at: string;
  uid: string;
  text: string | null;
};

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

export default function MyMessages({ date }: { date: string }) {
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
            <Flex direction="row" align="center" gap={2}>
              <Spacer />
              {/* <MdBookmarkBorder size={24} /> */}
              <MdDeleteOutline size={24} />
            </Flex>
          </Flex>
        </Card>
      ))}
    </>
  );
}
