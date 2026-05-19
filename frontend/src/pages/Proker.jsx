import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Users,
  Trophy,
  Calendar,
  Code,
  BookOpen,
} from "lucide-react";

const Proker = () => {
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    const glow = cursorGlowRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    const speed = 0.08;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      if (glow) {
        glow.style.transform = `
          translate(${currentX}px, ${currentY}px)
          translate(-50%, -50%)
        `;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const programs = [
    {
      title: "Seminar Teknologi",
      icon: Monitor,
      color: "violet",
      description:
        "Kegiatan seminar dan workshop untuk meningkatkan wawasan mahasiswa di bidang teknologi informasi.",
    },
    {
      title: "Pelatihan Coding",
      icon: Code,
      color: "cyan",
      description:
        "Program pembelajaran coding dan pengembangan skill programming mahasiswa.",
    },
    {
      title: "Makrab HIMATIF",
      icon: Users,
      color: "fuchsia",
      description:
        "Membangun solidaritas dan kebersamaan antar anggota HIMATIF.",
    },
    {
      title: "Lomba & Kompetisi",
      icon: Trophy,
      color: "yellow",
      description:
        "Mengikuti dan menyelenggarakan kompetisi untuk meningkatkan prestasi mahasiswa.",
    },
    {
      title: "Kajian Akademik",
      icon: BookOpen,
      color: "emerald",
      description:
        "Diskusi dan kajian mengenai perkembangan dunia informatika dan teknologi.",
    },
    {
      title: "Event Tahunan",
      icon: Calendar,
      color: "blue",
      description:
        "Pelaksanaan event besar HIMATIF sebagai agenda tahunan organisasi.",
    },
  ];

  const getColor = (color) => {
    switch (color) {
      case "violet":
        return "from-violet-500/20 to-violet-700/20 border-violet-500/30 text-violet-400";
      case "cyan":
        return "from-cyan-500/20 to-cyan-700/20 border-cyan-500/30 text-cyan-400";
      case "fuchsia":
        return "from-fuchsia-500/20 to-fuchsia-700/20 border-fuchsia-500/30 text-fuchsia-400";
      case "yellow":
        return "from-yellow-500/20 to-yellow-700/20 border-yellow-500/30 text-yellow-400";
      case "emerald":
        return "from-emerald-500/20 to-emerald-700/20 border-emerald-500/30 text-emerald-400";
      default:
        return "from-blue-500/20 to-blue-700/20 border-blue-500/30 text-blue-400";
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080412]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Cursor Glow */}
        <div
          ref={cursorGlowRef}
          className="pointer-events-none fixed z-50"
          style={{
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: `radial-gradient(circle, 
              rgba(34,211,238,0.38) 0%, 
              rgba(34,211,238,0.20) 30%, 
              rgba(6,182,212,0.10) 55%, 
              transparent 75%
            )`,
            filter: "blur(45px)",
            transform: "translate(-50%, -50%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Orb 1 */}
        <motion.div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(82,39,255,0.45) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 2 */}
        <motion.div
          className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(180,60,255,0.35) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 3 */}
        <motion.div
          className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(14,116,144,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}
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
      </div>

      {/* CONTENT */}
      <div className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Program Kerja{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                HIMATIF
              </span>
            </h1>

            <p className="text-slate-300 max-w-3xl mx-auto text-lg">
              Berbagai program kerja HIMATIF untuk mendukung pengembangan
              akademik, organisasi, dan kreativitas mahasiswa Teknik Informatika.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className={`bg-gradient-to-br ${getColor(
                    item.color
                  )} border backdrop-blur-xl rounded-2xl p-8`}
                >
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-white/5">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h2>

                  <p className="text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proker;