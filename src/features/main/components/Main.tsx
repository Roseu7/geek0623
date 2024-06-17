import React from "react";
import { BackgroundImage } from "@/components/BackgroundImage";

export function Main() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-sm">
      <BackgroundImage />
      <header>
        <div>ホーム</div>
        <div>設定</div>
      </header>
      <main>
        <div>日記を書く場所</div>
        <div>タイムライン形式で見る場所</div>
      </main>
      <nav>
        <div>ホーム</div>
        <div>アーカイブ</div>
        <div>マイページ</div>
        <div>投稿ボタン</div>
      </nav>
    </div>
  );
}
