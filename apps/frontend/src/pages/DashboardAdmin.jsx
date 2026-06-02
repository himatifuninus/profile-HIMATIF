import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const API_URL = import.meta.env.VITE_API_URL;

export default function DashboardAdmin() {
  const navigate = useNavigate();
  const [dataPendaftar, setDataPendaftar] = useState([]);

  const getDataPendaftar = async () => {
    try {
      const res = await fetch(`${API_URL}/api/register`);
      const result = await res.json();

      if (result.success) {
        setDataPendaftar(result.data);
      }
    } catch (error) {
      console.log("Gagal mengambil data:", error);
    }
  };

  useEffect(() => {
    getDataPendaftar(); // fetch pertama kali

    const interval = setInterval(() => {
      getDataPendaftar();
    }, 5000); // polling setiap 5 detik

    return () => clearInterval(interval); // cleanup saat unmount
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Data Pendaftar ICC & Hackathon", 14, 15);

    autoTable(doc, {
      startY: 25,
      head: [
        [
          "No",
          "Nama Tim",
          "No HP",
          "Angkatan",
          "Jumlah Member",
          "Detail Member",
        ],
      ],
      body: dataPendaftar.map((item, index) => [
        index + 1,
        item.team_name,
        item.phone,
        item.angkatan,
        `${item.members?.length || 0} Orang`,
        item.members?.map((m) => `${m.member_name} - ${m.nim}`).join("\n"),
      ]),
    });

    doc.save("data-pendaftar.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Admin</h1>
          <p className="text-slate-400">
            Panel pengelolaan pendaftaran ICC & Hackathon
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
          >
            Download PDF
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          <p className="text-slate-400">Total Tim</p>
          <h2 className="text-3xl font-bold mt-2">{dataPendaftar.length}</h2>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl border border-slate-800 p-5">
        <h2 className="text-xl font-semibold mb-6">Data Pendaftar</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400">
                <th className="py-3 px-3">No</th>
                <th className="px-3">Nama Tim</th>
                <th className="px-3">No HP</th>
                <th className="px-3">Angkatan</th>
                <th className="px-3">Jumlah Member</th>
                <th className="px-3">Detail Member</th>
              </tr>
            </thead>

            <tbody>
              {dataPendaftar.map((item, index) => (
                <tr
                  key={item.id || index}
                  className="border-b border-slate-800 align-top"
                >
                  <td className="py-4 px-3">{index + 1}</td>
                  <td className="px-3 font-semibold">{item.team_name}</td>
                  <td className="px-3">{item.phone}</td>
                  <td className="px-3">{item.angkatan}</td>
                  <td className="px-3">{item.members?.length || 0} Orang</td>

                  <td className="px-3">
                    <div className="space-y-1 text-sm">
                      {item.members?.map((member, i) => (
                        <p key={i}>
                          {member.member_name} - {member.nim}
                        </p>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}

              {dataPendaftar.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-slate-400">
                    Belum ada data pendaftar
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
