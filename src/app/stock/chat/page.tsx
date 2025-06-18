"use client";

import "@/app/stock/chat/chat.css";
import BackButton from "@/components/BackButton";
import ChatBox from "@/components/ChatBox";


export default function ChatPage() {
  return (
    <div className="chat-page">
      <BackButton />
      <ChatBox />
    </div>
  );
}