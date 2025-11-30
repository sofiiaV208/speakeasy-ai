"use client";

export default function ChatIcon({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        backgroundColor: "#4f46e5",
        color: "white",
        border: "none",
        fontSize: "26px",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      }}
    >
      💬
    </button>
  );
}

