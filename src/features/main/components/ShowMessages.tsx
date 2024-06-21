import React from "react";
import GetMessages from "./GetMessage";

export default function ShowMessages(): JSX.Element {
  const today = new Date().toISOString().split('T')[0]; // 現在の日付を取得

  return (
    <div>
      <GetMessages date={today} />
    </div>
  );
}