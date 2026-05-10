import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Congratulations() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
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
          Congratulations !!!
        </motion.h2>

        {/* DESKRIPSI */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-gray-200 text-center max-w-3xl mx-auto mb-12"
        >
          Selamat atas pencapaianmu! Teruslah berkarya dan jadilah yang terbaik.
        </motion.p>

        {/* BUTTON DAFTAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://chat.whatsapp.com/IK0olt6xmnt2JTBekizZ7l"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg
            transition-colors duration-300 hover:bg-blue-700"
          >
            <FaWhatsapp className="text-[22px]" />

            <span>Join Group WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
