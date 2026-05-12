import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  opacity: Math.random() * 0.4 + 0.1,
  duration: Math.random() * 8 + 4,
  delay: Math.random() * 5,
}));

export default function DashboardAdmin() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* Tombol Logout */}
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: "20px",
          right: "24px",
          zIndex: 50,
          padding: "8px 20px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(139,92,246,0.35)",
          borderRadius: "8px",
          color: "rgba(255,255,255,0.7)",
          fontSize: "13px",
          fontWeight: 500,
          cursor: "pointer",
          backdropFilter: "blur(10px)",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "rgba(124,58,237,0.3)";
          e.target.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "rgba(255,255,255,0.06)";
          e.target.style.color = "rgba(255,255,255,0.7)";
        }}
      >
        Logout
      </button>

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            top: "-100px",
            left: "-150px",
            background: "radial-gradient(circle, rgba(88,28,220,0.25) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-80px",
            right: "-100px",
            background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "400px",
            height: "400px",
            top: "30%",
            left: "60%",
            background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-purple-400"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animation: `floatUp ${p.duration}s ${p.delay}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative shapes */}
      <div
        className="absolute bottom-16 left-16 border border-purple-700/30"
        style={{ width: "60px", height: "60px", transform: "rotate(15deg)" }}
      />
      <div
        className="absolute top-20 right-24 border border-pink-600/20 rounded-full"
        style={{ width: "80px", height: "80px" }}
      />
      <div
        className="absolute bottom-32 right-48 rounded-full bg-purple-600/20"
        style={{ width: "12px", height: "12px" }}
      />

      {/* Main content */}
      <div
        className="relative z-10 text-center px-6"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <p
          className="text-sm font-semibold tracking-[0.35em] text-purple-400 uppercase mb-4"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.2s" }}
        >
          Selamat Datang, Admin
        </p>

        <h1
          className="font-black leading-tight mb-3"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            color: "#ffffff",
            textShadow: "0 0 60px rgba(168,85,247,0.3)",
            fontFamily: "'Syne', sans-serif",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.9s ease 0.35s",
          }}
        >
          Himpunan Mahasiswa
        </h1>

        <h1
          className="font-black leading-tight"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            background: "linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'Syne', sans-serif",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.9s ease 0.5s",
          }}
        >
          Informatika
        </h1>

        <div
          className="mx-auto my-7 rounded-full"
          style={{
            width: "120px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #a855f7, #ec4899, transparent)",
            opacity: visible ? 0.85 : 0,
            transition: "opacity 0.9s ease 0.65s",
          }}
        />

        <p
          className="text-base text-gray-400 tracking-wide"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.75s" }}
        >
          Panel Admin &mdash; Kelola organisasi dengan mudah &amp; efisien
        </p>
      </div>

      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-20px) scale(1.1); }
        }
      `}</style>
    </div>
  );
}