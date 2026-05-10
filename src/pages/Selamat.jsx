import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Selamat() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/momen.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-24 md:mt-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-6"
        >
          SELAMAT ANDA SUDAH MENDAFTAR
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-gray-200 text-center max-w-3xl mx-auto mb-12"
        >
          Terima kasih sudah mendaftar di program ICC Himpunan Mahasiswa Teknik
          Informatika Universitas Islam Nusantara. Silahkan Join Grup WhatsApp
          untuk informasi lebih lanjut.
        </motion.p>

        <div className="mt-12 text-center">
          <a
            href="https://chat.whatsapp.com/JrCnrMh8Nig3MTgrgIkUNZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            <FaWhatsapp size={20} />
            Join WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
