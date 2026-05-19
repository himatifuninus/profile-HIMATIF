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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "Login gagal");
        return;
      }

      localStorage.setItem("adminToken", data.token);

      toast.success("Login berhasil!");

      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    } catch (err) {
      toast.error("Gagal terhubung ke server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background:
          "linear-gradient(135deg, #07111f 0%, #0f172a 40%, #111827 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Toaster position="top-center" />

      {/* Glow Background */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
          top: "-150px",
          left: "-150px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
          bottom: "-120px",
          right: "-120px",
          pointerEvents: "none",
        }}
      />

      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          margin: "0 16px",
          background: "rgba(15,23,42,0.75)",
          border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: 22,
          padding: "48px 40px",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 18,
            }}
          >
            <img 
              src="\public\HIMATIF.png" 
              alt="logo himatif"
              style={{
                width: 64,
                height: 64,
                objectFit: 18,
              }}
              />
          </div>

          <h1
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: 700,
              margin: 0,
              letterSpacing: "-0.6px",
            }}
          >
            Admin{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #38bdf8 0%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              HIMATIF
            </span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 13,
              marginTop: 8,
              lineHeight: 1.6,
            }}
          >
            Masuk untuk mengelola data pendaftaran
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: 13,
                display: "block",
                marginBottom: 8,
              }}
            >
              Username
            </label>

            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: 12,
                color: "white",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
                transition: "0.25s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#38bdf8";
                e.target.style.boxShadow =
                  "0 0 0 4px rgba(56,189,248,0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor =
                  "rgba(59,130,246,0.2)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: 28 }}>
            <label
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: 13,
                display: "block",
                marginBottom: 8,
              }}
            >
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: 12,
                color: "white",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
                transition: "0.25s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#38bdf8";
                e.target.style.boxShadow =
                  "0 0 0 4px rgba(56,189,248,0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor =
                  "rgba(59,130,246,0.2)";
                e.target.style.boxShadow = "none";
              }}
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
                ? "rgba(59,130,246,0.45)"
                : "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
              border: "none",
              borderRadius: 12,
              color: "white",
              fontSize: 15,
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "0.25s ease",
              letterSpacing: "0.3px",
              boxShadow: loading
                ? "none"
                : "0 10px 28px rgba(37,99,235,0.35)",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
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