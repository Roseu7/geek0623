"use client";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link"; // Next.jsのリンクコンポーネントを使用するために必要
import { useState, useEffect } from "react";

export default function PostButton() {
  const [loading, setLoading] = useState(true); // データ取得中の状態管理
  const [initialData, setInitialData] = useState(null); // 初期データの状態管理

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        setInitialData(data);
        setLoading(false); // データ取得が完了したらローディング状態を解除
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // エラー時もローディング状態を解除
      }
    };

    fetchData();
  }, []); // 空の依存配列を指定して、初回のみ実行されるようにする

  return (
    <div className="visible sm:hidden sticky z-20 bottom-20">
      <div className="flex justify-end mr-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <NextLink href="/home/post" passHref>
            <Button
              as="a" // Chakra UIのButtonをリンクとして使用するために、as="a"を指定
              colorScheme="teal"
              borderRadius="full"
              size="lg"
              height="64px"
              width="64px"
            >
              投稿
            </Button>
          </NextLink>
        )}
      </div>
    </div>
  );
}
