import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram, Github } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-slate-950 border-t border-white/10">

      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid md:grid-cols-12 gap-10">

          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <img src="/HIMATIF.png" alt="HIMATIF" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">HIMATIF</h3>
                <p className="text-violet-400 text-xs tracking-widest uppercase">Glory Glory Glory</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Himpunan Mahasiswa Teknik Informatika Universitas Islam Nusantara —
              wadah pengembangan akademik, organisasi, dan inovasi teknologi.
            </p>

            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-200 group">
                <Instagram className="w-4 h-4 text-slate-400 group-hover:text-violet-400 transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-200 group">
                <Github className="w-4 h-4 text-slate-400 group-hover:text-violet-400 transition-colors" />
              </a>
            </div>
          </div>

          <div className="hidden md:block md:col-span-1" />

          <div className="md:col-span-2">
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Navigasi</p>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/makrab", label: "Program" },
                { to: "/register", label: "Pendaftaran" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-violet-500/0 group-hover:bg-violet-500 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Program</p>
            <ul className="space-y-3">
              {["Coding Camp", "Hackathon", "Seminar Teknologi", "Pengabdian Masyarakat"].map((item) => (
                <li key={item} className="text-slate-400 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Kontak</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-violet-400" />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">Universitas Islam Nusantara, Bandung</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-violet-400" />
                </div>
                <p className="text-slate-400 text-sm">himatif@uninus.ac.id</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© 2026 HIMATIF UNINUS. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 text-xs hover:text-violet-400 transition-colors duration-200 group"
          >
            Kembali ke atas
            <span className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-violet-500/20 group-hover:border-violet-500/30 transition-all duration-200">
              ↑
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}