"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { FetchMessages } from "../components/FetchMessages";
import { Message } from "@/types/index";
import { Card, Flex, Spacer, Text } from "@chakra-ui/react";
import { MdBookmarkBorder, MdDeleteOutline } from "react-icons/md";
import { Anzumoji } from "@/assets/fonts/fonts";

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
                console.error('Error fetching user:', error.message);
            } else {
                setUser(data.user?.id);
            }
        };

        fetchUser();
    }, );

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
        <div>
            {messages.map((message) => (
                <div key={message.id} className="text-lg p-4 bg-white shadow-md rounded-md my-2">
                    <p className="opacity-60 text-sm text-right">{new Date(message.created_at).toLocaleString()}</p>
                    <p className="">{message.text}</p>
                </div>
            ))}
        </div>
    );
}
