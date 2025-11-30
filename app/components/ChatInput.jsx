"use client";
import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        type="text"
        placeholder="Write your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button style={styles.button} onClick={handleSend}>Send</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "8px",
    padding: "10px",
    background: "#000000aa",
    borderTop: "1px solid #444",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #666",
    background: "#111",
    color: "white",
    outline: "none",
  },
  button: {
    padding: "10px 14px",
    background: "#6366f1",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
