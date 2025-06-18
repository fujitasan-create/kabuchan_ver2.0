import React, { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import styles from "./ChatBox.module.css";

type Message = { role: "user" | "kabu"; text: string };

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  // localStorageから読み込み
  useEffect(() => {
    const saved = localStorage.getItem("kabuchat");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  // localStorageに保存 & スクロール
  useEffect(() => {
    localStorage.setItem("kabuchat", JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ユーザーの送信時に実行
  const handleSend = async (text: string) => {
    if (!text) return;

    // ユーザーの発言を即表示
    const userMessage:Message = { role: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // APIリクエスト
      const res = await fetch("https://my-api-h54h.onrender.com/openai/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: text,
          model: "gpt-3.5-turbo",
        }),
      });

      const data = await res.json();

      // かぶちゃんの返答を追加
      const kabuMessage:Message = { role: "kabu", text: data.response };
      setMessages((prev) => [...prev, kabuMessage]);

    } catch (error) {
      console.error("かぶちゃんAPIエラー:", error);
      setMessages((prev) => [
        ...prev,
        { role: "kabu", text: "かぶちゃんとの通信に失敗しちゃったよ…😢" },
      ]);
    }
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatMessages}>
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}

