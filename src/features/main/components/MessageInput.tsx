'use client'
import { createClient } from "@/utils/supabase/client";
import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function MessageInput(): JSX.Element {
  const supabase = createClient();
  const [text, setText] = useState('');
  const [user, setUser] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user?.id);
    })();
  }, []);

  const sendMessage = async () => {
    try {
      const { error } = await supabase
        .from('messages')
        .insert([{ text: text.trim(), uid: user, created_at: new Date().toISOString() }]);

      if (error) {
        throw error;
      }

      setText('');
      console.log('Message sent successfully');

      const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = '/home';
      } else {
        window.location.reload();
      }

    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        placeholder="今日はどんなことがありましたか？"
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <Button
          colorScheme="teal"
          onClick={sendMessage}
        >
          投稿する
        </Button>
    </div>
  );
}