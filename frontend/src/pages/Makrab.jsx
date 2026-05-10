import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function Makrab() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center pb-10"
      style={{ backgroundImage: "url('/Icc.jpeg')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-24 md:mt-20">
        {/* JUDUL */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-6"
        >
          SEMDIKTI (Seminar Diskusi Teknik Informatika)
        </motion.h2>

        {/* DESKRIPSI */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-gray-200 text-center max-w-3xl mx-auto mb-12"
        >
          SEMDIKTI merupakan ruang kebersamaan yang dirancang untuk mempererat
          hubungan antar mahasiswa Teknik Informatika melalui kegiatan seminar
          dan diskusi yang bersifat terbuka, hangat, dan inklusif.
        </motion.p>

        {/* CARD */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* TUJUAN */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white
            transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            <h3 className="font-semibold text-lg mb-3">🎯 Tujuan</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>
                Menjadi wadah silaturahmi antar mahasiswa Teknik Informatika.
              </li>
              <li>Menciptakan ruang diskusi yang nyaman dan terbuka.</li>
              <li>Mendorong komunikasi yang positif dan interaktif.</li>
              <li>Membentuk lingkungan akademik yang harmonis dan suportif.</li>
              <li>Menanamkan nilai kebersamaan dan kekeluargaan.</li>
              <li>Menguatkan relasi sebagai bekal kolaborasi ke depan.</li>
            </ul>
          </motion.div>

          {/* TIMELINE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white
            transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            <h3 className="font-semibold text-lg mb-6">🗓 Timeline Kegiatan</h3>

            <ol className="relative border-l border-white/30 ml-3 space-y-8">
              <li className="ml-6">
                <span className="absolute -left-[7px] w-3 h-3 bg-cyan-400 rounded-full"></span>
                <time className="block text-sm text-cyan-300 mb-1">
                  12 Januari 2026
                </time>
                <p className="font-semibold">Sosialisasi</p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-[7px] w-3 h-3 bg-cyan-400 rounded-full"></span>
                <time className="block text-sm text-cyan-300 mb-1">
                  12 Januari - 01 Februari 2026
                </time>
                <p className="font-semibold">Pendaftaran & Pembayaran</p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-[7px] w-3 h-3 bg-cyan-400 rounded-full"></span>
                <time className="block text-sm text-cyan-300 mb-1">
                  17 - 18 April 2026
                </time>
                <p className="font-semibold">Pelaksanaan</p>
              </li>
            </ol>
          </motion.div>

          {/* BENEFIT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white
            transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            <h3 className="font-semibold text-lg mb-3">🤝 Benefit</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Menambah relasi dan kebersamaan.</li>
              <li>Sertifikat peserta SEMDIKTI HIMATIF.</li>
              <li>Ilmu dan wawasan yang aplikatif.</li>
              <li>Pengalaman organisasi.</li>
              <li>Kenangan berharga bersama HIMATIF.</li>
            </ul>
          </motion.div>
        </div>

        {/* BUTTON & LINK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4"
          >
          {/* BUTTON */}
          <a
            href="/register"
            className="flex
      items-center
      justify-center
      h-[56px]
      px-10
      bg-[#121B2F]
      hover:bg-[#000080]
      text-white
      font-semibold
      rounded-full
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-xl
      hover:shadow-cyan-500/40"
          >
            Daftar Sekarang
          </a>

          <a
            href="https://drive.google.com/drive/folders/1BYMPweNf8nnCyP8Ax-mTuAT9oozjSx0L"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            gap-0
            ml-6
            text-sm
            text-gray-300
            hover:text-white
            transition-all
            duration-300
            hover:underline"
          >
            <span>Lihat Peraturan Lengkap</span>
            <FiArrowUpRight className="text-[15px] translate-y-[2px]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
