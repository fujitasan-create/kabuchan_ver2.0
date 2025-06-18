import { useState } from "react";

export default function ChatInput({ onSend }: { onSend: (text: string) => void }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    onSend(text);
    setText("");
  };

  return (
    <div style={{ display: "flex", padding: "10px", borderTop: "1px solid #ccc" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="かぶちゃんに質問してみてね"
        style={{ flex: 1, marginRight: "8px", padding: "8px" }}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button onClick={handleSubmit}>送信</button>
    </div>
  );
}
