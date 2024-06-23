import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MessageInput from "@/features/main/components/MessageInput";
import BackArrow from "@/components/ui/BackArrow";

export default function PostPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100 relative">
      <Header />
      <main className="flex-1 overflow-y-auto relative">
        <div className="container mx-auto px-4 py-6 relative">
          <MessageInput />
        </div>
      </main>
      <Footer />
      <div className="absolute top-0 left-0 z-10">
        <BackArrow />
      </div>
    </div>
  );
}
