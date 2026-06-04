import { motion } from "framer-motion";

function Proker() {
const programKerja = [
{
title: "Makrab",
description:
"Meningkatkan kebersamaan dan kekeluargaan antar anggota HIMATIF.",
icon: "🤝",
},
{
title: "Seminar",
description:
"Memberikan wawasan dan pengetahuan melalui kegiatan seminar dan workshop.",
icon: "🎓",
},
{
title: "Bakti Sosial",
description:
"Meningkatkan kepedulian sosial dan kontribusi kepada masyarakat.",
icon: "❤️",
},
{
title: "ICC & Hackathon",
description:
"Mengembangkan hard skill dan soft skill mahasiswa Informatika.",
icon: "💻",
},
];

return ( <section className="relative min-h-screen bg-[#080412] overflow-hidden text-white pt-32 pb-20 px-6">
{/* Background Glow */} <div className="absolute inset-0 overflow-hidden">
<motion.div
className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
style={{
background:
"radial-gradient(circle, rgba(82,39,255,0.35) 0%, transparent 70%)",
filter: "blur(70px)",
}}
animate={{
x: [0, 50, 0],
y: [0, 30, 0],
scale: [1, 1.15, 1],
}}
transition={{
duration: 10,
repeat: Infinity,
ease: "easeInOut",
}}
/>

    <motion.div
      className="absolute top-1/3 right-[-150px] w-[600px] h-[600px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(217,70,239,0.30) 0%, transparent 70%)",
        filter: "blur(80px)",
      }}
      animate={{
        x: [0, -40, 0],
        y: [0, 50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>

  {/* Hero */}
  <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-6xl font-extrabold mb-6"
    >
      Program Kerja{" "}
      <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
        HIMATIF
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-slate-300 text-lg max-w-3xl mx-auto"
    >
      Berbagai program kerja yang dirancang untuk meningkatkan kualitas
      akademik, organisasi, dan kebersamaan mahasiswa Teknik Informatika.
    </motion.p>
  </div>

  {/* Cards */}
  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
    {programKerja.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15 }}
        whileHover={{
          y: -10,
          scale: 1.03,
        }}
        className="
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-8
          hover:border-violet-500/40
          hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
          transition-all duration-300
        "
      >
        <div className="text-5xl mb-5">
          {item.icon}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-white">
          {item.title}
        </h2>

        <p className="text-slate-300 leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    ))}
  </div>
</section>


);
}

export default Proker;
