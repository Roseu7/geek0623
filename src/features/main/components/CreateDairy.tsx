import React from "react";
import { Button } from "@chakra-ui/react";

export default function CreateDairy() {
  return (
    <div className="visible sm:hidden sticky z-20 bottom-20">
      <div className="flex justify-end mr-4">
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
