import { Box, Container, Flex } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignOutButton from "@/features/settings/components/SignOutButton";

export default function SettingsPage() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bg="gray.100">
      <Header />
      <Flex flex="1" overflowY="auto">
        <Container maxW="container.md" py="6">
          <SignOutButton />
        </Container>
      </Flex>
      <Footer />
    </Box>
  );
}
