import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Shield,
  Clock,
  Zap,
  Car,
  Monitor,
  Settings,
  Handshake,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Play,
} from "lucide-react";

import { ReactTyped } from "react-typed";

const Home = () => {
  // Animation variants dengan exit animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -60,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -60,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: 60,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.4, ease: "easeIn" },
    },
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
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
          {/* Animated Background Shapes */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400/30 rounded-lg"
              animate={{
                rotateX: [0, 90, 180, 270, 360],
                rotateY: [0, 45, 90, 135, 180],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full"
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-32 left-1/4 w-12 h-12 border border-emerald-400/40 rotate-45"
              animate={{
                rotate: [45, 225, 405],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  className="space-y-8"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={staggerContainer}
                >
                  {/* Welcome Text */}
                  <motion.div
                    className="flex items-center space-x-3"
                    variants={fadeInLeft}
                  >
                    <span className="text-2xl font-bold text-white">
                      Selamat Datang Di
                    </span>
                  </motion.div>

                  {/* Main Heading */}
                  <motion.h1
                    className="text-5xl lg:text-7xl font-bold text-white leading-tight -translate-y-8"
                    variants={fadeInLeft}
                  >
                    Himpunan Mahasiswa{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                      Teknik Informatika
                    </span>
                  </motion.h1>

                  {/* Subtitle with Typed */}
                  <motion.div
                    className="text-xl lg:text-2xl text-slate-300 h-16 flex items-center -translate-y-16"
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
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </section>

        {/* Layanan Section */}
        <section className="py-20 bg-slate-800 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto px-6 lg:px-8">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                HIMATIF dalam <span className="text-cyan-400">Aksi</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                HIMATIF hadir sebagai wadah pengembangan akademik, organisasi,
                dan kebersamaan mahasiswa Teknik Informatika
              </p>
            </motion.div>

            {/* Cards */}
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
                  className="group text-center space-y-4 bg-slate-900/50 backdrop-blur-xl
          border border-slate-700/50 rounded-2xl p-8
          transition-all duration-300 transform hover:-translate-y-3 hover:scale-105
          hover:shadow-2xl hover:shadow-cyan-500/30 block"
                >
                  <motion.div
                    className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-6
            group-hover:bg-cyan-500/30 transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Monitor className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Pengembangan Akademik
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Meningkatkan wawasan dan keilmuan mahasiswa melalui seminar,
                    diskusi, dan kegiatan edukatif di bidang teknologi
                    informasi.
                  </p>
                  {/* <div className="flex items-center justify-center text-cyan-400">
            <span className="font-medium">Lihat Program</span>
            <ChevronRight className="w-4 h-4 ml-2" />
          </div> */}
                </Link>
              </motion.div>

              {/* Organisasi */}
              <motion.div variants={scaleIn} className="flex items-stretch">
                <Link
                  to="/program/organisasi"
                  className="group text-center space-y-4 bg-slate-900/50 backdrop-blur-xl
          border border-slate-700/50 rounded-2xl p-8
          transition-all duration-300 transform hover:-translate-y-3 hover:scale-105
          hover:shadow-2xl hover:shadow-blue-500/30 block"
                >
                  <motion.div
                    className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6
            group-hover:bg-blue-500/30 transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Settings className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Organisasi & Kepemimpinan
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Melatih kepemimpinan, tanggung jawab, dan kerja sama tim
                    melalui pengalaman berorganisasi di HIMATIF.
                  </p>
                  {/* <div className="flex items-center justify-center text-blue-400">
            <span className="font-medium">Lihat Program</span>
            <ChevronRight className="w-4 h-4 ml-2" />
          </div> */}
                </Link>
              </motion.div>

              {/* Kebersamaan */}
              <motion.div variants={scaleIn} className="flex items-stretch">
                <Link
                  to="/program/makrab"
                  className="group text-center space-y-4 bg-slate-900/50 backdrop-blur-xl
          border border-slate-700/50 rounded-2xl p-8
          transition-all duration-300 transform hover:-translate-y-3 hover:scale-105
          hover:shadow-2xl hover:shadow-emerald-500/30 block"
                >
                  <motion.div
                    className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-6
            group-hover:bg-emerald-500/30 transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Handshake className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Solidaritas & Kebersamaan
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Membangun rasa kekeluargaan dan solidaritas antar mahasiswa
                    melalui kegiatan Makrab dan event internal HIMATIF.
                  </p>
                  {/* <div className="flex items-center justify-center text-emerald-400">
                    <span className="font-medium">Lihat Kegiatan</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </div> */}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
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
                <span className="text-cyan-400">HIMATIF UNINUS</span>
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
              {/* HIMATIF25 */}
              <Link to="/angkatan-2526" className="block">
                <motion.div
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 
  rounded-xl transition-all duration-300 
  hover:shadow-2xl hover:shadow-cyan-500/30"
                >
                  <div className="rounded-xl overflow-hidden">
                    {/* FOTO */}
                    <div className="bg-slate-900">
                      <img
                        src="Himatif25.jpg"
                        alt="HIMATIF 2025"
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* NAMA */}
                    <div className="py-4 text-center">
                      <h3 className="font-semibold text-white text-lg tracking-wide">
                        HIMATIF 2025 - 2026
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* HIMATIF24 */}
              <Link to="/angkatan-2425" className="block">
                <motion.div
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 
  rounded-xl transition-all duration-300 
  hover:shadow-2xl hover:shadow-cyan-500/30"
                >
                  <div className="rounded-xl overflow-hidden">
                    {/* FOTO */}
                    <div className="bg-slate-900">
                      <img
                        src="Himatif24.jpeg"
                        alt="HIMATIF 2024"
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* NAMA */}
                    <div className="py-4 text-center">
                      <h3 className="font-semibold text-white text-lg tracking-wide">
                        HIMATIF 2024 - 2025
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* HIMATIF23 */}
              <Link to="/angkatan-2324" className="block">
                <motion.div
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 
  rounded-xl transition-all duration-300 
  hover:shadow-2xl hover:shadow-cyan-500/30"
                >
                  <div className="rounded-xl overflow-hidden">
                    {/* FOTO */}
                    <div className="bg-slate-900">
                      <img
                        src="himatif23.jpeg"
                        alt="HIMATIF 2023"
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* NAMA */}
                    <div className="py-4 text-center">
                      <h3 className="font-semibold text-white text-lg tracking-wide">
                        HIMATIF 2023 - 2024
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* HIMATIF22 */}
              <Link to="/angkatan-2223" className="block">
                <motion.div
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 
  rounded-xl transition-all duration-300 
  hover:shadow-2xl hover:shadow-cyan-500/30"
                >
                  <div className="rounded-xl overflow-hidden">
                    {/* FOTO */}
                    <div className="bg-slate-900">
                      <img
                        src="Himatif22.jpg"
                        alt="HIMATIF 2022"
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* NAMA */}
                    <div className="py-4 text-center">
                      <h3 className="font-semibold text-white text-lg tracking-wide">
                        HIMATIF 2022 - 2023
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
