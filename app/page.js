"use client";

export default function Home() {
  // Плавный скролл к ценам
  const scrollToPricing = () => {
    const el = document.getElementById("pricing-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 20px",
        color: "white",
      }}
    >
      {/* === HERO БЛОК === */}
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          marginTop: "40px",
          textAlign: "left",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "800",
            lineHeight: "1.1",
            maxWidth: "700px",
          }}
        >
          English powered by AI + human teachers
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            maxWidth: "600px",
            lineHeight: "1.4",
          }}
        >
          Speak with confidence: hybrid (AI + expert educators), context-based
          explanations, and transparent analytics.
        </p>

        {/* КНОПКИ */}
        <div style={{ display: "flex", gap: "20px", marginTop: "35px" }}>
          <button
            style={{
              padding: "12px 32px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "2px solid white",
              background: "white",
              color: "black",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Start free
          </button>

          <button
            onClick={scrollToPricing}
            style={{
              padding: "12px 32px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "2px solid white",
              background: "transparent",
              color: "white",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            See pricing
          </button>
        </div>
      </div>

      {/* === КАРТОЧКИ ФИЧ === */}
      <div
        style={{
          maxWidth: "1240px",
          margin: "70px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {[
          {
            title: "Hybrid AI + Human Input",
            desc: "Combine AI lessons with human educator reviews.",
          },
          {
            title: "Context-Based Learning",
            desc: "Your AI explains WHY something is correct.",
          },
          {
            title: "Flexible Credit Validity",
            desc: "Credits roll over for at least 2–3 months.",
          },
          {
            title: "Pause Option",
            desc: "Freeze your subscription anytime.",
          },
          {
            title: "Balanced Curriculum",
            desc: "Conversation + grammar + vocabulary.",
          },
          {
            title: "AI Feedback Loop",
            desc: "Corrections + pronunciation tips.",
          },
          {
            title: "Fair Teacher Matching",
            desc: "AI matches by rating, timezone, specialty.",
          },
          {
            title: "Predictive Scheduling",
            desc: "Teachers set blocks — students auto-match.",
          },
          {
            title: "Transparent Metrics",
            desc: "Booking forecasts & demand trends.",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "white",
              color: "black",
              padding: "22px",
              borderRadius: "14px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              ✓ {item.title}
            </h3>
            <p style={{ fontSize: "16px", opacity: 0.8 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* === PRICING Якорь === */}
      <div
        id="pricing-section"
        style={{
          marginTop: "80px",
          paddingBottom: "100px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "800" }}>Pricing</h2>
        <p style={{ marginTop: "10px", opacity: 0.8 }}>
          Здесь будут твои карточки с ценами ❤️
        </p>
      </div>
    </div>
  );
}

