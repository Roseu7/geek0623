import React from "react";

export default function Footer() {
  return (
    <div className="sticky bottom-0 z-10 bg-white shadow-sm">
      <nav className="container mx-auto flex justify-between px-16 py-5">
        <a href="/home">
          <div>ホーム</div>
        </a>
        <a href="/archive">
          <div>アーカイブ</div>
        </a>
        <a href="/mypage">
          <div>マイページ</div>
        </a>
      </nav>
    </div>
  );
}
