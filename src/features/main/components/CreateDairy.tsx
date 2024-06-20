import React from "react";
import { Button } from "@chakra-ui/react";

export default function CreateDairy() {
  return (
    <div className="visible sm:hidden relative">
      <div className="relative flex right-4 bottom-6 justify-end">
        <a href="/home/post">
          <Button
            colorScheme="teal"
            borderRadius="full"
            size="lg"
            height="64px"
            width="64px"
          >
            投稿
          </Button>
        </a>
      </div>
    </div>
  );
}
