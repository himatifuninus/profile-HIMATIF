import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Settings, Handshake } from "lucide-react";
import { ReactTyped } from "react-typed";

const Home = () => {
  const cursorGlowRef = useRef(null);
  const cursorGlowRef2 = useRef(null);
  const cursorGlowRef3 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${e.clientX}px`;
        cursorGlowRef.current.style.top = `${e.clientY}px`;
      }
      if (cursorGlowRef2.current) {
        cursorGlowRef2.current.style.left = `${e.clientX}px`;
        cursorGlowRef2.current.style.top = `${e.clientY}px`;
      }
      if (cursorGlowRef3.current) {
        cursorGlowRef3.current.style.left = `${e.clientX}px`;
        cursorGlowRef3.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -60, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, x: -60, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
    exit: { opacity: 0, transition: { staggerChildren: 0.1, staggerDirection: -1 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="relative min-h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-screen flex items-center">

          {/* ── Animated Mesh Gradient Background ── */}
          <div className="absolute inset-0 z-0 bg-[#080412] overflow-hidden">

            {/* Cursor Glow Layer 1 - inti asap, cepat (ungu) */}
            <div
              ref={cursorGlowRef}
              className="pointer-events-none fixed z-50"
              style={{
                width: "600px",
                height: "600px",
                borderRadius: "50%",
                background: `radial-gradient(circle, 
                  rgba(139,92,246,0.18) 0%, 
                  rgba(139,92,246,0.08) 30%, 
                  rgba(139,92,246,0.03) 60%, 
                  transparent 80%
                )`,
                filter: "blur(45px)",
                transform: "translate(-50%, -50%)",
                transition: "left 0.08s ease, top 0.08s ease",
                mixBlendMode: "screen",
              }}
            />

            {/* Cursor Glow Layer 2 - body asap, organik (fuchsia) */}
            <div
              ref={cursorGlowRef2}
              className="pointer-events-none fixed z-50"
              style={{
                width: "800px",
                height: "800px",
                borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%",
                background: `radial-gradient(ellipse at center, 
                  rgba(217,70,239,0.12) 0%, 
                  rgba(139,92,246,0.07) 35%, 
                  rgba(14,116,144,0.04) 60%, 
                  transparent 75%
                )`,
                filter: "blur(70px)",
                transform: "translate(-50%, -50%)",
                transition: "left 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                mixBlendMode: "screen",
              }}
            />

            {/* Cursor Glow Layer 3 - ekor asap, paling lambat (indigo) */}
            <div
              ref={cursorGlowRef3}
              className="pointer-events-none fixed z-50"
              style={{
                width: "1000px",
                height: "1000px",
                borderRadius: "55% 45% 40% 60% / 45% 55% 50% 50%",
                background: `radial-gradient(ellipse at 40% 40%, 
                  rgba(99,60,180,0.08) 0%, 
                  rgba(82,39,255,0.04) 40%, 
                  transparent 70%
                )`,
                filter: "blur(90px)",
                transform: "translate(-50%, -50%)",
                transition: "left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                mixBlendMode: "screen",
              }}
            />

            {/* Orb 1 - ungu besar kiri atas */}
            <motion.div
              className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(82,39,255,0.45) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
              animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orb 2 - pink/magenta kanan tengah */}
            <motion.div
              className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(180,60,255,0.35) 0%, transparent 70%)",
                filter: "blur(70px)",
              }}
              animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Orb 3 - biru bawah kiri */}
            <motion.div
              className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(14,116,144,0.4) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
              animate={{ x: [0, 20, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* Orb 4 - indigo tengah */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(99,60,180,0.2) 0%, transparent 70%)",
                filter: "blur(80px)",
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Grid overlay subtle */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Animated Background Shapes */}
          <div className="absolute inset-0 z-[1] pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 border border-violet-400/20 rounded-lg"
              animate={{ rotateX: [0, 90, 180, 270, 360], rotateY: [0, 45, 90, 135, 180], scale: [1, 1.1, 1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-violet-400/10 to-blue-500/10 rounded-full"
              animate={{ y: [-20, 20, -20], x: [-10, 10, -10], scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-32 left-1/4 w-12 h-12 border border-cyan-400/20 rotate-45"
              animate={{ rotate: [45, 225, 405], scale: [1, 1.3, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-40 right-1/4 w-3 h-3 bg-violet-400/40 rounded-full"
              animate={{ scale: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400/40 rounded-full"
              animate={{ scale: [1, 2.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-[2] min-h-screen flex items-center w-full">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="space-y-8"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={staggerContainer}
                >
                  <motion.div className="flex items-center space-x-3" variants={fadeInLeft}>
                    <span className="text-2xl font-bold text-white/90">Selamat Datang Di</span>
                  </motion.div>

                  <motion.h1
                    className="text-5xl lg:text-7xl font-bold text-white leading-tight -translate-y-8"
                    variants={fadeInLeft}
                  >
                    Himpunan Mahasiswa{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                      Teknik Informatika
                    </span>
                  </motion.h1>

                  <motion.div
                    className="text-xl lg:text-2xl text-slate-300/80 h-16 flex items-center -translate-y-16"
                    variants={fadeInLeft}
                  >
                    <ReactTyped
                      strings={[
                        "Informatika unggul untuk masa depan digital",
                        "Kolaborasi cerdas, inovasi tiada henti",
                        "Bersama membangun teknologi untuk bangsa",
                        "Solusi modern dari generasi digital",
                      ]}
                      typeSpeed={50}
                      backSpeed={30}
                      backDelay={2000}
                      loop={true}
                      showCursor={true}
                      cursorChar="|"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Gradient fade ke section bawah */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 to-transparent z-[3]" />
        </section>

        {/* ===== HIMATIF DALAM AKSI SECTION ===== */}
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                HIMATIF dalam <span className="text-violet-400">Aksi</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                HIMATIF hadir sebagai wadah pengembangan akademik, organisasi,
                dan kebersamaan mahasiswa Teknik Informatika
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8 items-stretch"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {/* Akademik */}
              <motion.div variants={scaleIn} className="flex items-stretch">
                <Link
                  to="/program/akademik"
                  className="group text-center space-y-4 bg-white/5 backdrop-blur-xl
                    border border-white/10 rounded-2xl p-8
                    transition-all duration-300 transform hover:-translate-y-3 hover:scale-105
                    hover:shadow-2xl hover:shadow-violet-500/20 hover:border-violet-500/30 block w-full"
                >
                  <motion.div
                    className="w-16 h-16 bg-violet-500/20 rounded-xl flex items-center justify-center mx-auto mb-6
                      group-hover:bg-violet-500/30 transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Monitor className="w-8 h-8 text-violet-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Pengembangan Akademik</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Meningkatkan wawasan dan keilmuan mahasiswa melalui seminar,
                    diskusi, dan kegiatan edukatif di bidang teknologi informasi.
                  </p>
                </Link>
              </motion.div>

              {/* Organisasi */}
              <motion.div variants={scaleIn} className="flex items-stretch">
                <Link
                  to="/program/organisasi"
                  className="group text-center space-y-4 bg-white/5 backdrop-blur-xl
                    border border-white/10 rounded-2xl p-8
                    transition-all duration-300 transform hover:-translate-y-3 hover:scale-105
                    hover:shadow-2xl hover:shadow-fuchsia-500/20 hover:border-fuchsia-500/30 block w-full"
                >
                  <motion.div
                    className="w-16 h-16 bg-fuchsia-500/20 rounded-xl flex items-center justify-center mx-auto mb-6
                      group-hover:bg-fuchsia-500/30 transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Settings className="w-8 h-8 text-fuchsia-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Organisasi & Kepemimpinan</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Melatih kepemimpinan, tanggung jawab, dan kerja sama tim
                    melalui pengalaman berorganisasi di HIMATIF.
                  </p>
                </Link>
              </motion.div>

              {/* Kebersamaan */}
              <motion.div variants={scaleIn} className="flex items-stretch">
                <Link
                  to="/program/makrab"
                  className="group text-center space-y-4 bg-white/5 backdrop-blur-xl
                    border border-white/10 rounded-2xl p-8
                    transition-all duration-300 transform hover:-translate-y-3 hover:scale-105
                    hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/30 block w-full"
                >
                  <motion.div
                    className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-6
                      group-hover:bg-cyan-500/30 transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Handshake className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Solidaritas & Kebersamaan</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Membangun rasa kekeluargaan dan solidaritas antar mahasiswa
                    melalui kegiatan Makrab dan event internal HIMATIF.
                  </p>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== SEJARAH KEPENGURUSAN SECTION ===== */}
        <section className="py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                SEJARAH KEPENGURUSAN{" "}
                <span className="text-violet-400">HIMATIF UNINUS</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Menelusuri perjalanan kepengurusan HIMATIF UNINUS dari masa ke
                masa dalam membangun organisasi.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {[
                { to: "/angkatan-2526", src: "Himatif25.jpg", alt: "HIMATIF 2025", label: "HIMATIF 2025 - 2026" },
                { to: "/angkatan-2425", src: "Himatif24.jpeg", alt: "HIMATIF 2024", label: "HIMATIF 2024 - 2025" },
                { to: "/angkatan-2324", src: "himatif23.jpeg", alt: "HIMATIF 2023", label: "HIMATIF 2023 - 2024" },
                { to: "/angkatan-2223", src: "Himatif22.jpg", alt: "HIMATIF 2022", label: "HIMATIF 2022 - 2023" },
              ].map((item) => (
                <Link to={item.to} className="block" key={item.to}>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10
                      rounded-xl transition-all duration-300
                      hover:shadow-2xl hover:shadow-violet-500/20 hover:border-violet-500/30"
                  >
                    <div className="rounded-xl overflow-hidden">
                      <div className="bg-slate-900/80">
                        <img src={item.src} alt={item.alt} className="w-full h-auto object-contain" />
                      </div>
                      <div className="py-4 text-center">
                        <h3 className="font-semibold text-white text-lg tracking-wide">{item.label}</h3>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

      </motion.div>
    </AnimatePresence>
  );
};

export default Home;