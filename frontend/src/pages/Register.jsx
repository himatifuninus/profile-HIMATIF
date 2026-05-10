import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaUser,
  FaIdCard,
  FaPhone,
  FaUniversity,
} from "react-icons/fa";

const forbiddenWords = [
  "anjing",
  "babi",
  "goblok",
  "tolol",
  "bangsat",
  "kontol",
  "memek",
  "asu",
  "tol",
  "kon",
  "bodoh",
  "bego",
  "sia",
  "pepek",
  "jule",
  "fefek",
  "vevek",
];

const Register = () => {
  const [formData, setFormData] = useState({
    namaTim: "",
    namaAnggotaTim: "",
    nim: "",
    phone: "",
    angkatan: "2025",
  });

  const [errors, setErrors] = useState({
    namaTim: "",
    namaAnggotaTim: "",
  });

  const containsForbiddenWord = (text) => {
    return forbiddenWords.find((word) =>
      text.toLowerCase().includes(word)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "namaTim" || name === "namaAnggotaTim") {
      const found = containsForbiddenWord(value);

      setErrors((prev) => ({
        ...prev,
        [name]: found
          ? `Kata "${found}" tidak diperbolehkan`
          : "",
      }));
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.namaTim || errors.namaAnggotaTim) {
      toast.error("Terdapat kata yang tidak diperbolehkan");
      return;
    }

    console.log("Data Form:", formData);

    toast.success("Pendaftaran berhasil");

    setFormData({
      namaTim: "",
      namaAnggotaTim: "",
      nim: "",
      phone: "",
      angkatan: "2025",
    });

    setErrors({
      namaTim: "",
      namaAnggotaTim: "",
    });
  };

  const fields = [
    {
      name: "namaTim",
      label: "Nama Tim",
      icon: <FaUser />,
      type: "text",
    },
    {
      name: "namaAnggotaTim",
      label: "Nama Anggota Tim",
      icon: <FaUser />,
      type: "text",
    },
    {
      name: "nim",
      label: "NIM",
      icon: <FaIdCard />,
      type: "text",
    },
    {
      name: "phone",
      label: "No HP",
      icon: <FaPhone />,
      type: "tel",
    },
  ];

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gray-900 px-4"
    style={{ backgroundImage: "url('/Icc.jpeg')" }}>
      <div className="w-full max-w-md bg-slate-800 border border-slate-600 rounded-md p-6 shadow-lg">
        <Toaster position="top-center" />

        <h1 className="text-3xl font-bold text-center text-white mb-10">
          Daftar ICC & Hackathon
        </h1>

        <form onSubmit={handleSubmit}>
          {fields.map(({ name, label, icon, type }) => (
            <div className="relative mb-10" key={name}>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                placeholder=" "
                className="
                  peer w-full bg-transparent border-b-2 border-gray-400
                  text-white py-2 pr-8 outline-none
                  focus:border-blue-500
                "
              />

              <label
                className="
                  absolute left-0 top-2 text-gray-400
                  transition-all duration-200
                  peer-placeholder-shown:top-2
                  peer-placeholder-shown:text-sm
                  peer-focus:-top-4
                  peer-focus:text-xs
                  peer-focus:text-blue-400
                  peer-not-placeholder-shown:-top-4
                  peer-not-placeholder-shown:text-xs
                "
              >
                {label}
              </label>

              <span className="absolute right-2 top-2 text-gray-400">
                {icon}
              </span>

              {errors[name] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[name]}
                </p>
              )}
            </div>
          ))}

          <div className="mb-8">
            <label className="text-white flex items-center gap-2 mb-1">
              <FaUniversity /> Angkatan
            </label>

            <input
              value="2025"
              readOnly
              className="w-full p-2 bg-slate-600 text-white rounded opacity-70 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            disabled={
              errors.namaTim || errors.namaAnggotaTim
            }
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-3 rounded"
          >
            Daftar Sekarang
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;