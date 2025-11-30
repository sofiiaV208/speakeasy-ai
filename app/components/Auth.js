"use client";

import { useState } from "react";

export default function Auth({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!data.success) return setError(data.error);
    onSuccess();
  }

  async function handleRegister() {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!data.success) return setError(data.error);
    onSuccess();
  }

  return (
    <div className="auth-box">
      <h1>SpeakeasyAI</h1>

      <input
        type="email"
        placeholder="Email"
        className="auth-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password min 6 chars"
        className="auth-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button className="auth-btn" onClick={handleLogin}>Login</button>
      <button className="auth-btn" onClick={handleRegister}>Register</button>
    </div>
  );
}
