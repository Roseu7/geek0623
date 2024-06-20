"use client";
import React from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  // useLocationから現在のURLのパスを取得
  const { pathname } = useLocation();

  // ヘッダータイトルを格納する変数を初期化
  let title: string = "";

  // パスに応じてヘッダータイトルを設定
  switch (pathname) {
    case "/home":
      title = "ホーム";
      break;
    case "/archive":
      title = "アーカイブ";
      break;
    case "/mypage":
      title = "マイページ";
      break;
    case "/settings":
      title = "設定";
      break;
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href={pathname}>{title}</a>
        <a href="/settings">
          <div>設定</div>
        </a>
      </div>
    </header>
  );
}
