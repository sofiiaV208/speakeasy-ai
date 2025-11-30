export default function ChatBubble({ sender, text }) {
  const own = sender === "user";

  return (
    <div
      style={{
        margin: "6px 0",
        textAlign: own ? "right" : "left"
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "10px 14px",
          borderRadius: "12px",
          maxWidth: "75%",
          backgroundColor: own ? "#6d4aff" : "rgba(255,255,255,0.1)",
          color: "white"
        }}
      >
        {text}
      </div>
    </div>
  );
}
