import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Angkatan2425() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ================== STYLE ================== */
  const container = {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #0f172a, #020617)",
    padding: "32px 16px 80px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 48,
    overflowX: "hidden",
  };

  const title = { textAlign: "center" };

  const grid2 = {
    width: "100%",
    maxWidth: 720,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 24,
  };

  const grid3 = {
    width: "100%",
    maxWidth: 1040,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 24,
  };

  const card = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 18,
    padding: 16,
    textAlign: "center",
  };

  const imgStyle = {
    width: "100%",
    height: "clamp(160px, 45vw, 200px)",
    borderRadius: 14,
    marginBottom: 14,
    objectFit: "cover",
  };

  const jabatan = { fontSize: 18, fontWeight: 700 };
  const nama = { fontSize: 15, color: "#cbd5f5" };
  const kepala = { fontSize: 14, marginTop: 8, fontWeight: 600 };

  /* ===== STAF STYLE (SEJAJAR & TENGAH) ===== */
  const stafWrapper = {
    marginTop: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const stafTitle = {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 6,
  };

  const stafList = {
    width: "fit-content",
  };

  const stafRow = {
    position: "relative",
    paddingLeft: 16,
    marginBottom: 6,
    textAlign: "left",
  };

  const dot = {
    position: "absolute",
    left: 0,
    top: 8,
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#fff",
  };

  /* ================== MOTION ================== */
  const motionCard = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
    whileHover: {
      scale: 1.05,
      boxShadow: "0 0 28px rgba(30,58,138,0.7)",
    },
  };

  return (
    <div style={container}>
      {/* JUDUL */}
      <div style={title}>
        <h1 style={{ fontSize: "clamp(24px,5vw,42px)", fontWeight: 700 }}>
          KEPENGURUSAN HIMATIF{" "}
          <span style={{ color: "#22d3ee" }}>2024–2025</span>
        </h1>
      </div>

      {/* BARIS 1 */}
      <div style={grid2}>
        <motion.div style={card} {...motionCard}>
          <img src="KAHIM25.JPG" style={imgStyle} />
          <div style={jabatan}>KETUA HIMATIF</div>
          <div style={nama}>RAFI AKMAL S</div>
        </motion.div>

        <motion.div style={card} {...motionCard}>
          <img src="WAKAHIM25.JPG" style={imgStyle} />
          <div style={jabatan}>WAKIL KETUA</div>
          <div style={nama}>ADITYA WARMAN</div>
        </motion.div>
      </div>

      {/* BARIS 2 */}
      <div style={grid2}>
        <motion.div style={card} {...motionCard}>
          <img src="SEKRE25.JPG" style={imgStyle} />
          <div style={jabatan}>SEKRETARIS</div>
          <div style={nama}>SYIFA RAHMATUL Z</div>
        </motion.div>

        <motion.div style={card} {...motionCard}>
          <img src="BENDAHARA25.JPG" style={imgStyle} />
          <div style={jabatan}>BENDAHARA</div>
          <div style={nama}>FENI PEBRIANI</div>
        </motion.div>
      </div>

      {/* BARIS 3 */}
      <div style={grid3}>
        {[
          {
            img: "Himatif24.jpeg",
            dept: "DEPARTEMEN KOMINFO",
            kepala: "GALIH ADRIASYAH",
            staf: [
              "MUHAMMAD SAHAL",
              "GHEIZA MUHAMMAD",
              "VARGAS NIDALSAVA",
              "SYAHRIL KOMARUDIN",
            ],
          },
          {
            img: "Himatif24.jpeg",
            dept: "DEPARTEMEN PELITBANG",
            kepala: "FAISAL SOPIAN",
            staf: ["FAHMI ZAENAL M ", "AHMAD HAFIZ", "MELI SEPTIANA","IRMA DWI MAULANI"],
          },
          {
            img: "Himatif24.jpeg",
            dept: "DEPARTEMEN PSDM",
            kepala: "NUGRAHA MANAF",
            staf: ["NAFI KAINUNATUL", "FERDIAN", "NUR AKBAR F"],
          },
        ].map((d, i) => (
          <motion.div key={i} style={card} {...motionCard}>
            <img src={d.img} style={imgStyle} />
            <div style={jabatan}>{d.dept}</div>
            <div style={kepala}>KEPALA DEPARTEMEN: {d.kepala}</div>

            <div style={stafWrapper}>
              <div style={stafTitle}>STAF</div>
              <div style={stafList}>
                {d.staf.map((s, idx) => (
                  <div key={idx} style={stafRow}>
                    <span style={dot} />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
