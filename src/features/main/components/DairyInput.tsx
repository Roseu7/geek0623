"use client";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@chakra-ui/react";
import React from "react";

export default function DairyInput() {
  const supabase = createClient();
  const handleSendMessage = async (text: string) => {
    // ! 確認のため
    alert(text);
    /*
      call to supabase
      この部分では、Supabaseの"messages"テーブルに新しいメッセージを挿入しています。
      メッセージのテキストは関数の引数から取得します。
      エラーが発生した場合、そのエラーメッセージをアラートとして表示します。
    */
    const { error } = await supabase.from("messages").insert({ text });
    if (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-4 border-b bg-white rounded-lg">
      <textarea
        placeholder="今日はどんなことがありましたか？"
        className="w-full border-none focus:ring-0 min-h-24 max-h-64"
      />
      {/* 投稿ボタン */}
      <div className="flex justify-end mt-2">
        <Button
          colorScheme="teal"
          onClick={(event) => handleSendMessage(event.currentTarget.value)}
        >
          投稿する
        </Button>
      </div>
    </div>
  );
}
