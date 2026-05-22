import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "Login gagal");
        return;
      }

      localStorage.setItem("adminToken", data.token);
      toast.success("Login berhasil!");

      setTimeout(() => navigate("/admin/dashboard"), 1000);
    } catch (err) {
      toast.error("Gagal terhubung ke server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      background: "linear-gradient(135deg, #0f0c29 0%, #1a1040 50%, #0d1b2a 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <Toaster position="top-center" />

      {/* Background orbs */}
      <div style={{
        position: "absolute", width: 400, height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
        top: "-100px", left: "-100px", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 300, height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)",
        bottom: "-80px", right: "-80px", pointerEvents: "none",
      }} />

      {/* Card */}
      <div style={{
        width: "100%",
        maxWidth: 420,
        margin: "0 16px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(139,92,246,0.25)",
        borderRadius: 20,
        padding: "48px 40px",
        backdropFilter: "blur(20px)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}>

        {/* Logo area */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 60, height: 60,
            borderRadius: 16,
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            marginBottom: 16,
            boxShadow: "0 8px 24px rgba(124,58,237,0.4)",
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 style={{
            color: "white",
            fontSize: 24,
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.5px",
          }}>
            Admin <span style={{ color: "#a78bfa" }}>HIMATIF</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 6 }}>
            Masuk untuk mengelola data pendaftaran
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, display: "block", marginBottom: 8 }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Masukkan username"
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(139,92,246,0.3)",
                borderRadius: 10,
                color: "white",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.target.style.borderColor = "#7c3aed"}
              onBlur={(e) => e.target.style.borderColor = "rgba(139,92,246,0.3)"}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, display: "block", marginBottom: 8 }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Masukkan password"
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(139,92,246,0.3)",
                borderRadius: 10,
                color: "white",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.target.style.borderColor = "#7c3aed"}
              onBlur={(e) => e.target.style.borderColor = "rgba(139,92,246,0.3)"}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: loading
                ? "rgba(124,58,237,0.5)"
                : "linear-gradient(135deg, #7c3aed, #4f46e5)",
              border: "none",
              borderRadius: 10,
              color: "white",
              fontSize: 15,
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: loading ? "none" : "0 8px 24px rgba(124,58,237,0.4)",
              transition: "all 0.2s",
              letterSpacing: "0.3px",
            }}
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;