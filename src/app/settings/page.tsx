import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignOutButton from "@/features/settings/components/SignOutButton";

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6">
          <SignOutButton />
        </div>
      </main>
      <Footer />
    </div>
  );
}