import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DairyMessages from "@/features/main/components/DairyMessages";
import CreateDairy from "@/features/main/components/CreateDairy";
import DairyInput from "@/features/main/components/DairyInput";

export default async function page() {
    return (
    <div className="flex flex-col min-h-screen bg-zinc-100">
        <Header />
        <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
                <DairyInput />
                <DairyMessages />
            </div>
        </main>
        <CreateDairy />
        <Footer />
    </div>
    );
}