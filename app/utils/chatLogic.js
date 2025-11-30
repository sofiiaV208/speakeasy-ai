export async function processUserMessage(message, context) {
  message = message.toLowerCase();

  // -----------------------------
  // 1. Контактные данные
  // -----------------------------
  if (message.includes("contact")) {
    return {
      reply:
        "Which contact would you like?\n• Telegram\n• Instagram\n• LinkedIn",
      newContext: "contact"
    };
  }

  if (context === "contact") {
    if (["telegram", "instagram", "linkedin"].includes(message)) {
      return {
        reply: "This option is not available yet — please check later 💜",
        newContext: null
      };
    }
  }

  // -----------------------------
  // 2. Бесплатный урок
  // -----------------------------
  if (message.includes("start free lesson")) {
    return {
      reply:
        "Are you signing up for yourself or for a child under 18?",
      newContext: "choose_who"
    };
  }

  if (context === "choose_who") {
    if (message.includes("myself") || message.includes("me")) {
      return {
        reply: "Great! Please write your full name.",
        newContext: "register_name"
      };
    }

    if (message.includes("child")) {
      return {
        reply:
          "Please provide your full name and your child's full name.\nThen send a photo of the birth certificate.",
        newContext: "register_child"
      };
    }
  }

  // -----------------------------
  // 3. Тест уровня английского
  // -----------------------------
  if (message.includes("english level test")) {
    return {
      reply:
        "Perfect! Please write your full name — I will generate an adaptive test for you.",
      newContext: "test_name"
    };
  }

  if (context === "test_name") {
    return {
      reply: "Generating adaptive Linguaskill-style test…\n(Here will be the test)",
      newContext: null
    };
  }

  // -----------------------------
  // 4. Регистрация (взрослый)
  // -----------------------------
  if (context === "register_name") {
    return {
      reply: `Thanks, ${message}. Please write your email.`,
      newContext: "register_email"
    };
  }

  if (context === "register_email") {
    return {
      reply:
        "Perfect! You are registered for the free lesson. Our team will contact you soon 💜",
      newContext: null
    };
  }

  // -----------------------------
  // 5. Регистрация (ребёнок)
  // -----------------------------
  if (context === "register_child") {
    return {
      reply:
        "Received! Now send the photo of the birth certificate.",
      newContext: "register_child_doc"
    };
  }

  if (context === "register_child_doc") {
    return {
      reply:
        "Perfect! Registration completed. Our team will contact you soon 💜",
      newContext: null
    };
  }

  // -----------------------------
  // 6. Универсальный AI ответ
  // -----------------------------
  return {
    reply: "Got it! Let me process this… (general AI reply)",
    newContext: context
  };
}
