"use client";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Archive() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-100">
      {/* useLocationフックを使用するには、<Router>コンポーネントでラップしなければならない */}
      <Router>
        <Header />
      </Router>
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6"></div>
      </main>
      <Footer />
    </div>
  );
}
