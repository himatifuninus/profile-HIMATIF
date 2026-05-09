import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Angkatan2223() {
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

  /* ===== STAF STYLE ===== */
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

  // DEFAULT (1 KOLOM)
  const stafListDefault = {
    width: "fit-content",
  };

  // KHUSUS PSDM (2 KOLOM)
  const stafListPSDM = {
    width: "fit-content",
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    columnGap: 32,
  };

  // FONT NORMAL (DEPARTEMEN LAIN)
  const stafRowDefault = {
    position: "relative",
    paddingLeft: 16,
    marginBottom: 6,
    textAlign: "left",
    fontSize: 14,
  };

  // 🔥 FONT LEBIH KECIL (KHUSUS PSDM)
  const stafRowPSDM = {
    ...stafRowDefault,
    fontSize: 12,
    lineHeight: 1.4,
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
          <span style={{ color: "#22d3ee" }}>2022–2023</span>
        </h1>
      </div>

      {/* BARIS 1 */}
      <div style={grid2}>
        <motion.div style={card} {...motionCard}>
          <img src="KAHIM23.png" style={imgStyle} />
          <div style={jabatan}>KETUA HIMATIF</div>
          <div style={nama}>TRIYANTO RIZKY JAYA</div>
        </motion.div>

        <motion.div style={card} {...motionCard}>
          <img src="WAKAHIM23.png" style={imgStyle} />
          <div style={jabatan}>WAKIL KETUA</div>
          <div style={nama}>HAFIZH ABDULLAH F</div>
        </motion.div>
      </div>

      {/* BARIS 2 */}
      <div style={grid2}>
        <motion.div style={card} {...motionCard}>
          <img src="SEKRE23.jpeg" style={imgStyle} />
          <div style={jabatan}>SEKRETARIS</div>
          <div style={nama}>FEBIANA FAJRIN S - JIHAN DZAKIYYAH A</div>
        </motion.div>

        <motion.div style={card} {...motionCard}>
          <img src="BENDAHARA23.jpeg" style={imgStyle} />
          <div style={jabatan}>BENDAHARA</div>
          <div style={nama}>SAHLA NATLIYANTI P - ANISA FITRI UTAMI</div>
        </motion.div>
      </div>

      {/* BARIS 3 */}
      <div style={grid3}>
        {[
          {
            img: "Himatif22.jpg",
            dept: "DEPARTEMEN KOMINFO",
            kepala: "RIAN IHSAN A",
            staf: [
              "M LUTHFI RAMADHAN",
              "M AZKA NURUL A",
              "AzIS MAULANA",
              "ROHENDO J",
              "MUHAMAD DESTA",
              "ENDI RAHMAN M",
              "ELISNAWATI",
            ],
          },
          {
            img: "Himatif22.jpg",
            dept: "DEPARTEMEN PELITBANG",
            kepala: "FAHMI FRIANDIKA",
            staf: [
              "ZEN AHLIL B",
              "YOAN NURAZIZAH",
              "INAL MAHPUD",
              "SALWA R J R",
              "RIZAL ABDULATIF",
              "MAYA RAEMONA P",
              "MAKIATUL",
            ],
          },
          {
            img: "Himatif22.jpg",
            dept: "DEPARTEMEN EKSTERNAL - INTERNAL",
            kepala: "MUHAMMAD RAMADAN - EGY JUANSYAH",
            staf: [
              "RAIHAN AHMAD M",
              "RIZKI HENDRIAWAN",
              "RIFA RAMDANI",
              "RIKA PERMANI",
              "MILA MAULIDA",
              "MOCHAMAD KHOPID",
              "RESTI AGUSTIN",
              "M SILDAN RG",
              "RIFQI MUNAWAR R", 
              "GINANJAR B P",
              "ICHA YOANA",
              "DINA GRISELA",
              "ILYAS K A",
              "M SATRIA N",
            ],
          },
        ].map((d, i) => {
          const isPSDM = d.dept === "DEPARTEMEN EKSTERNAL - INTERNAL";

          return (
            <motion.div key={i} style={card} {...motionCard}>
              <img src={d.img} style={imgStyle} />
              <div style={jabatan}>{d.dept}</div>
              <div style={kepala}>KEPALA DEPARTEMEN: {d.kepala}</div>

              <div style={stafWrapper}>
                <div style={stafTitle}>STAF</div>

                <div style={isPSDM ? stafListPSDM : stafListDefault}>
                  {d.staf.map((s, idx) => (
                    <div
                      key={idx}
                      style={isPSDM ? stafRowPSDM : stafRowDefault}
                    >
                      <span style={dot} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
