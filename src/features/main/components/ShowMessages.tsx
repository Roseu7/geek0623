import React from "react";
import GetMessages from "./GetMessage";
import { Box } from "@chakra-ui/react";

export default function ShowMessages(): JSX.Element {
  const today = new Date().toISOString().split("T")[0]; // 現在の日付を取得

  return (
    <Box>
      <GetMessages date={today} />
    </Box>
  );
}
