import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MessageInput from "@/features/main/components/MessageInput";
import ShowMessages from "@/features/main/components/ShowMessages";
import CreateMessage from "@/features/main/components/CreateMessage";
import { Box, Stack } from "@chakra-ui/react";

export default function MainPage(): JSX.Element {
  return (
    <Box className="flex flex-col min-h-screen" bg="gray.100">
      <Header />
      <Stack
        spacing="24px"
        direction={["column", "row"]}
        className="flex-1 overflow-y-auto"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="hidden sm:block">
            <MessageInput />
          </div>
          <ShowMessages />
        </div>
      </Stack>
      <CreateMessage />
      <Footer />
    </Box>
  );
}
