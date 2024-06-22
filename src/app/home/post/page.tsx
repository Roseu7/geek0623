import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MessageInput from "@/features/main/components/MessageInput";

export default function PostPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6">
          <MessageInput />
        </div>
      </main>
      <Footer />
    </div>
  );
}