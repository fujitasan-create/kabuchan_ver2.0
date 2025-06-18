import styles from "./MessageBubble.module.css";

type Message = {
  role: "user" | "kabu";
  text: string;
};

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`${styles.messageRow} ${isUser ? styles.user : ""}`}
    >
      {!isUser && (
        <img
          src="/kabuchan/kabuchan_littlehappy_touka.png"
          alt="かぶちゃん"
          className={styles.avatar}
        />
      )}
      <div className={`message-bubble ${isUser ? "message-user" : "message-kabu"}`}>
        {message.text}
      </div>
    </div>
  );
}
