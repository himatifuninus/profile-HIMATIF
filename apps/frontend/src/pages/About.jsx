import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const listVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative bg-[#05030d] text-white overflow-hidden min-h-screen">
      {/* LIQUID ETHER BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.30), transparent 65%)",
            filter: "blur(70px)",
            mixBlendMode: "screen",
          }}
          animate={{
            x: [0, 120, 40, 0],
            y: [0, 80, 160, 0],
            scale: [1, 1.25, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-20 right-[-180px] w-[720px] h-[720px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.35), transparent 68%)",
            filter: "blur(80px)",
            mixBlendMode: "screen",
          }}
          animate={{
            x: [0, -120, -40, 0],
            y: [0, 120, 40, 0],
            scale: [1, 1.15, 1.3, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[-220px] left-1/3 w-[760px] h-[760px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(217,70,239,0.25), transparent 70%)",
            filter: "blur(90px)",
            mixBlendMode: "screen",
          }}
          animate={{
            x: [0, 80, -80, 0],
            y: [0, -100, -40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* HERO */}
      <div className="relative z-10 pt-32 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            max-w-5xl
            mx-auto
            text-center
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            shadow-2xl
          "
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tentang{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              HIMATIF
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            HIMATIF UNINUS merupakan organisasi mahasiswa Teknik Informatika
            Universitas Islam Nusantara yang menjadi wadah pengembangan
            akademik, organisasi, kreativitas, dan solidaritas mahasiswa.
          </p>
        </motion.div>
      </div>

      {/* SEJARAH */}
      <div className="relative z-10 min-h-screen flex items-center py-20 -mt-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LOGO */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -60, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-3xl scale-125"></div>

                <div
                  className="
                    relative
                    rounded-full
                    p-5
                    border
                    border-cyan-400/40
                    bg-white/5
                    backdrop-blur-xl
                    shadow-[0_0_60px_rgba(34,211,238,0.35)]
                  "
                >
                  <img
                    src="/HIMATIF.png"
                    alt="Sejarah Himatif"
                    className="
                      w-56
                      h-56
                      md:w-72
                      md:h-72
                      object-contain
                      rounded-full
                    "
                  />
                </div>
              </div>
            </motion.div>

            {/* CARD */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="
                relative
                bg-slate-950/45
                backdrop-blur-2xl
                border
                border-cyan-400/40
                rounded-3xl
                p-8
                md:p-10
                shadow-[0_0_50px_rgba(168,85,247,0.25)]
                overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/20"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="
                      w-14
                      h-14
                      rounded-full
                      border
                      border-purple-400/50
                      bg-purple-500/10
                      flex
                      items-center
                      justify-center
                      shadow-[0_0_25px_rgba(168,85,247,0.5)]
                    "
                  >
                    <span className="text-2xl">📖</span>
                  </div>

                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      Sejarah Himatif
                    </h2>

                    <div className="w-32 h-1 mt-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                  </div>
                </div>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify">
                  HIMATIF UNINUS didirikan di Kota Bandung pada tanggal 24
                  Maret 2018 sebagai organisasi kemahasiswaan Program Studi
                  Teknik Informatika Universitas Islam Nusantara. Organisasi
                  ini dibentuk untuk jangka waktu yang tidak ditetapkan dan
                  berfungsi sebagai wadah pengembangan akademik,
                  keorganisasian, serta penyaluran aspirasi mahasiswa Teknik
                  Informatika secara berkelanjutan.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* VISI MISI */}
      <div className="relative z-10 py-20 px-6 -mt-50">
        <div
          className="
            max-w-6xl
            mx-auto
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            md:p-12
            shadow-2xl
          "
        >
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              VISI & MISI
            </h2>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-white/20"></div>

              <div className="w-8 h-8 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>

              <div className="h-px w-24 bg-white/20"></div>
            </div>
          </motion.div>

          {/* TAB */}
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            {["vision", "mission"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-10 py-4 rounded-full font-semibold transition-all duration-300
                  ${
                    activeTab === tab
                      ? "bg-purple-600 shadow-[0_0_25px_rgba(168,85,247,0.8)]"
                      : "bg-white/10 hover:bg-purple-500/40"
                  }
                `}
              >
                {tab === "vision" ? "Vision" : "Mission"}
              </motion.button>
            ))}
          </div>

          {/* CONTENT */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === "vision" ? (
              <p className="text-slate-200 text-lg md:text-xl text-center leading-relaxed">
                Membangun karakter dengan semangat bermusyawarah melalui ilmu
                pengetahuan, etika, dan keahlian dalam bidang teknologi dan
                informasi serta menjadi wadah untuk menyatukan mahasiswa Teknik
                Informatika UNINUS.
              </p>
            ) : (
              <ul className="space-y-5 text-slate-200 text-lg leading-relaxed">
                {[
                  "Membentuk Mahasiswa yang bertaqwa kepada Tuhan Yang Maha Esa",
                  "Membentuk karakter anggota yang kreatif, inovatif, unggul dan bertanggung jawab.",
                  "Mengembangkan potensi anggota dalam hardskill maupun softskill.",
                  "Membangun sifat kekeluargaan dan profesionalisme.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={listVariant}
                    initial="hidden"
                    animate="visible"
                    className="
                      flex
                      items-start
                      gap-3
                      hover:translate-x-2
                      hover:text-purple-300
                      transition-all
                      duration-300
                    "
                  >
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;