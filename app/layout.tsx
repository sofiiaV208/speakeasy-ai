"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import ChatIcon from "./components/ChatIcon";
import Chatbot from "./components/Chatbot";
import ChatButtons from "./components/ChatButtons";
import { useState, type ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Navbar />

        {children}

        {/* Иконка чата */}
        <ChatIcon onClick={() => setIsChatOpen(true)} />

        {/* Окно чата */}
        {isChatOpen && <Chatbot onClose={() => setIsChatOpen(false)} />}
      </body>
    </html>
  );
}

