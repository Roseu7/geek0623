import React from "react";
import { Box } from "@chakra-ui/react";
import GetOtherMessages from "@/features/archive/components/GetOtherMessage";

export default function ShowOtherMessages(): JSX.Element {
  const today = new Date().toISOString().split("T")[0]; // 現在の日付を取得

  return (
    <Box>
      <GetOtherMessages date={today} />
    </Box>
  );
}
