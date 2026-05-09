import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Pagination, Stack } from "@mui/material";
import { supabase } from "../supabaseClient";

const DataRegister = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Gagal ambil data:", error);
    } else {
      setData(data);
    }

    setLoading(false);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + rowsPerPage);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-8 text-white flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Daftar Mahasiswa Terdaftar
        </h2>

        <Link
          to="/register"
          className="inline-flex items-center gap-2 text-white px-4 py-2 rounded hover:bg-blue-500 transition mb-6 backdrop-blur-sm bg-white/10"
        >
          <HiArrowNarrowLeft className="w-5 h-5" />
          Kembali ke Form
        </Link>

        <div className="overflow-x-auto backdrop-blur-md bg-slate-800/60 rounded-lg">
          <table className="min-w-full text-sm text-left border border-gray-700">
            <thead className="bg-slate-700 text-gray-300">
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Nama</th>
                <th className="px-4 py-2 border">NIM</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">No HP</th>
                <th className="px-4 py-2 border">Riwayat Penyakit</th>
                <th className="px-4 py-2 border">Alergi</th>
                <th className="px-4 py-2 border">Angkatan</th>
              </tr>
            </thead>

            <tbody>
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-6">
                    Belum ada data.
                  </td>
                </tr>
              ) : (
                paginatedData.map((item, index) => (
                  <tr key={item.id} className="border-t border-gray-700">
                    <td className="px-4 py-2 border">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-4 py-2 border">{item.nama}</td>
                    <td className="px-4 py-2 border">{item.nim}</td>
                    <td className="px-4 py-2 border">{item.email}</td>
                    <td className="px-4 py-2 border">{item.phone}</td>
                    <td className="px-4 py-2 border">
                      {item.riwayat_penyakit || "-"}
                    </td>
                    <td className="px-4 py-2 border">
                      {item.alergi || "-"}
                    </td>
                    <td className="px-4 py-2 border">{item.angkatan}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-end">
          <div className="backdrop-blur-md bg-white/10 rounded-md px-6 py-3">
            <Stack spacing={1}>
              <Pagination
                count={Math.ceil(data.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                shape="rounded"
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.3)",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#3b82f6",
                  },
                }}
              />
            </Stack>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="mt-12 text-center">
          <a
            href="https://chat.whatsapp.com/JrCnrMh8Nig3MTgrgIkUNZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"
          >
            <FaWhatsapp size={20} />
            Join WhatsApp
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 flex justify-center gap-6">
        <a
          href="https://www.instagram.com/himatifuninus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://github.com/himatifuninus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
      </footer>
    </div>
  );
};

export default DataRegister;
