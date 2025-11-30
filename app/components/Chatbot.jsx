"use client";
import React, { useState, useRef, useEffect } from "react";

export default function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! How can I help you today?" }
  ]);

  const [step, setStep] = useState("menu");
  const [input, setInput] = useState("");

  // показывать ли быстрые кнопки (FAQ)
  const [showOptions, setShowOptions] = useState(true);

  // для автоскролла
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // -----------------------------
  // SEND MESSAGE
  // -----------------------------
  const sendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");

    setTimeout(() => handleBotResponse(text), 300);
  };

  // -----------------------------
  // BOT MESSAGE
  // -----------------------------
  const bot = (text) =>
    setMessages((prev) => [...prev, { from: "bot", text }]);

  // -----------------------------
  // MAIN LOGIC
  // -----------------------------
  const handleBotResponse = (userText) => {
    const t = userText.toLowerCase();

    // MENU actions
    if (step === "menu") {
      if (t.includes("start")) return startFreeLesson();
      if (t.includes("test") || t.includes("level")) return englishTestFlow();
      if (t.includes("contact")) return contactOptions();
      if (t.includes("when"))
        return bot("Our lessons are available 7 days a week. Please choose a time when registering.");
      if (t.includes("cost"))
        return bot("The price depends on your plan. You can see details in the Pricing section.");
      if (t.includes("register")) return startFreeLesson();
      if (t.includes("teacher"))
        return bot("You can contact a teacher via Telegram, Instagram, or LinkedIn.");
    }

    // Registration logic
    if (step === "askAdultOrKid") {
      if (t.includes("adult")) {
        setStep("adultName");
        setShowOptions(false);
        return bot("Great! Please write your full name.");
      }
      if (t.includes("kid") || t.includes("child")) {
        setStep("guardianName");
        setShowOptions(false);
        return bot("Please write guardian's full name.");
      }
      return bot("Please choose: Adult or Child.");
    }

    // Adult registration
    if (step === "adultName") {
      setStep("adultEmail");
      return bot("Write your email for the lesson booking.");
    }

    if (step === "adultEmail") {
      bot("Thank you! Your free lesson has been booked. We will contact you soon!");
      setShowOptions(true);
      return setStep("menu");
    }

    // Kid registration
    if (step === "guardianName") {
      setStep("kidName");
      return bot("Write the child's full name.");
    }

    if (step === "kidName") {
      setStep("guardianEmail");
      return bot("Write the guardian's email.");
    }

    if (step === "guardianEmail") {
      setStep("birthDoc");
      return bot("Finally, please upload a photo/scan of the birth certificate.");
    }

    if (step === "birthDoc") {
      bot("Document received! The child's free lesson is booked.");
      setShowOptions(true);
      return setStep("menu");
    }

    bot("I didn’t understand. Please choose an option below.");
  };

  // -----------------------------
  // FLOWS
  // -----------------------------
  const startFreeLesson = () => {
    bot("Do you want to book for an Adult or a Child?");
    setShowOptions(false);
    setStep("askAdultOrKid");
  };

  const englishTestFlow = () => {
    bot("Great! Starting the adaptive English level test…");
    bot("Question 1/26: (we will add real questions later)");
    setShowOptions(false);
    setStep("testInProgress");
  };

  const contactOptions = () => {
    bot("Which contact option do you prefer? Telegram, Instagram or LinkedIn?");
    setShowOptions(false);
    setStep("contactChoice");
  };

  // -----------------------------
  // STYLE FOR QUICK QUESTIONS
  // -----------------------------
  const quickBtn = {
    width: "100%",
    background: "rgba(255,255,255,0.12)",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.3)",
    cursor: "pointer",
    fontSize: "14px",
    textAlign: "left"
  };

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div
      style={{
        width: "320px",
        height: "470px",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(10px)",
        borderRadius: "14px",
        padding: "10px",
        position: "fixed",
        bottom: "90px",
        right: "30px",
        zIndex: 9999,
        color: "white",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
          fontSize: "17px",
          fontWeight: "600"
        }}
      >
        <span>Speakeasy AI — Support Bot</span>
        <button
          onClick={onClose}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "22px",
            cursor: "pointer",
            marginTop: "-6px"
          }}
        >
          ×
        </button>
      </div>

      {/* MESSAGES */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          paddingRight: "5px"
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              marginBottom: "12px",
              textAlign: m.from === "user" ? "right" : "left"
            }}
          >
            <div
              style={{
                display: "inline-block",
                background:
                  m.from === "user"
                    ? "rgba(120,120,255,0.35)"
                    : "rgba(255,255,255,0.1)",
                padding: "8px 12px",
                borderRadius: "10px",
                maxWidth: "85%"
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* BACK BUTTON — появится, когда кнопки скрыты */}
      {!showOptions && (
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
            marginBottom: "5px",
            fontSize: "14px",
            textDecoration: "underline"
          }}
          onClick={() => {
            bot("Back to menu:");
            setShowOptions(true);
            setStep("menu");
          }}
        >
          ← Back
        </button>
      )}

      {/* QUICK QUESTIONS — только когда мы в меню и показываем опции */}
      {step === "menu" && showOptions && (
        <div
          style={{
            marginBottom: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            maxHeight: "160px",
            overflowY: "auto"
          }}
        >
          <button
            style={quickBtn}
            onClick={() => {
              setShowOptions(false);
              sendMessage("When are the lessons?");
            }}
          >
            When are the lessons?
          </button>

          <button
            style={quickBtn}
            onClick={() => {
              setShowOptions(false);
              sendMessage("How much does it cost?");
            }}
          >
            How much does it cost?
          </button>

          <button
            style={quickBtn}
            onClick={() => {
              setShowOptions(false);
              sendMessage("How can I register my child?");
            }}
          >
            How can I register my child?
          </button>

          <button
            style={quickBtn}
            onClick={() => {
              setShowOptions(false);
              sendMessage("How can I contact a teacher?");
            }}
          >
            How can I contact a teacher?
          </button>
        </div>
      )}

      {/* FILE UPLOAD + INPUT FIELD */}
      <div style={{ display: "flex", gap: "5px", marginBottom: "6px" }}>
        <input
          type="file"
          id="uploadFile"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;

            setMessages((prev) => [
              ...prev,
              { from: "user", text: `📎 Uploaded: ${file.name}` }
            ]);

            setTimeout(() => {
              if (step === "birthDoc") {
                bot("Document received! The child's free lesson is booked.");
                setStep("menu");
                setShowOptions(true);
              } else {
                bot("File received, thank you!");
              }
            }, 300);
          }}
        />

        <button
          onClick={() => document.getElementById("uploadFile").click()}
          style={{
            padding: "8px 10px",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.15)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.3)",
            cursor: "pointer",
            fontSize: "18px"
          }}
        >
          📎
        </button>

        {/* INPUT FIELD */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.15)",
            color: "white"
          }}
        />

        <button
          onClick={() => sendMessage(input)}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            background: "#5865F2",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}



