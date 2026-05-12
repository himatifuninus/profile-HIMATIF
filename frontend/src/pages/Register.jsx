import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaUser,
  FaIdCard,
  FaPhone,
  FaUniversity,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

const API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const navigate = useNavigate();

  const [teamName, setTeamName] = useState("");
  const [phone, setPhone] = useState("");

  const [members, setMembers] = useState([
    { member_name: "", nim: "" },
    { member_name: "", nim: "" },
    { member_name: "", nim: "" },
    { member_name: "", nim: "" },
    { member_name: "", nim: "" },
  ]);

  const [errors, setErrors] = useState({
    teamName: "",
    members: Array(5).fill(""),
  });

  const containsForbiddenWord = (text) => {
    return forbiddenWords.find((word) =>
      text.toLowerCase().includes(word)
    );
  };

  // TEAM NAME
  const handleTeamNameChange = (e) => {
    const value = e.target.value;

    const found = containsForbiddenWord(value);

    setErrors((prev) => ({
      ...prev,
      teamName: found
        ? `Kata "${found}" tidak diperbolehkan`
        : "",
    }));

    setTeamName(value);
  };

  // MEMBER
  const handleMemberChange = (index, field, value) => {
    const found =
      field === "member_name"
        ? containsForbiddenWord(value)
        : null;

    const newMemberErrors = [...errors.members];

    newMemberErrors[index] = found
      ? `Kata "${found}" tidak diperbolehkan`
      : "";

    setErrors((prev) => ({
      ...prev,
      members: newMemberErrors,
    }));

    const newMembers = members.map((member, i) =>
      i === index
        ? {
            ...member,
            [field]: value,
          }
        : member
    );

    setMembers(newMembers);
  };

  // VALIDASI ERROR
  const hasErrors = () => {
    return (
      !!errors.teamName ||
      errors.members.some((error) => error !== "")
    );
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (hasErrors()) {
      toast.error("Terdapat kata yang tidak diperbolehkan");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team_name: teamName,
          phone,
          angkatan: "2025",
          members,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "Gagal mendaftar");
        return;
      }

      toast.success("Pendaftaran berhasil!");

      // RESET FORM
      setTeamName("");
      setPhone("");

      setMembers([
        { member_name: "", nim: "" },
        { member_name: "", nim: "" },
        { member_name: "", nim: "" },
        { member_name: "", nim: "" },
        { member_name: "", nim: "" },
      ]);

      setErrors({
        teamName: "",
        members: Array(5).fill(""),
      });

      // REDIRECT
      setTimeout(() => {
        navigate("/congratulations");
      }, 1500);
    } catch (err) {
      toast.error("Gagal terhubung ke server");
    }
  };

  return (
    <div
      className="min-h-screen w-screen flex justify-center items-center bg-gray-900 px-4 py-10 pt-28"
      style={{ backgroundImage: "url('/Icc.jpeg')" }}
    >
      <div className="w-full max-w-md bg-slate-800 border border-slate-600 rounded-md p-6 shadow-lg">
        <Toaster position="top-center" />

        <h1 className="text-3xl font-bold text-center text-white mb-10">
          Daftar ICC & Hackathon
        </h1>

        <form onSubmit={handleSubmit}>
          {/* NAMA TIM */}
          <div className="relative mb-10">
            <input
              type="text"
              value={teamName}
              onChange={handleTeamNameChange}
              required
              placeholder=" "
              className="
                peer
                w-full
                bg-transparent
                border-b-2
                border-gray-400
                text-white
                py-2
                pr-8
                outline-none
                focus:border-blue-500
              "
            />

            <label
              className="
                absolute
                left-0
                top-2
                text-gray-400
                transition-all
                duration-200
                peer-placeholder-shown:top-2
                peer-placeholder-shown:text-sm
                peer-focus:-top-4
                peer-focus:text-xs
                peer-focus:text-blue-400
                peer-not-placeholder-shown:-top-4
                peer-not-placeholder-shown:text-xs
              "
            >
              Nama Tim
            </label>

            <span className="absolute right-2 top-2 text-gray-400">
              <FaUser />
            </span>

            {errors.teamName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.teamName}
              </p>
            )}
          </div>

          {/* NO HP */}
          <div className="relative mb-10">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder=" "
              className="
                peer
                w-full
                bg-transparent
                border-b-2
                border-gray-400
                text-white
                py-2
                pr-8
                outline-none
                focus:border-blue-500
              "
            />

            <label
              className="
                absolute
                left-0
                top-2
                text-gray-400
                transition-all
                duration-200
                peer-placeholder-shown:top-2
                peer-placeholder-shown:text-sm
                peer-focus:-top-4
                peer-focus:text-xs
                peer-focus:text-blue-400
                peer-not-placeholder-shown:-top-4
                peer-not-placeholder-shown:text-xs
              "
            >
              No HP
            </label>

            <span className="absolute right-2 top-2 text-gray-400">
              <FaPhone />
            </span>
          </div>

          {/* MEMBER */}
          {members.map((member, index) => (
            <div
              key={index}
              className="mb-6 border border-slate-600 rounded p-4"
            >
              <p className="text-blue-400 text-sm font-semibold mb-4">
                Anggota {index + 1}
              </p>

              {/* NAMA */}
              <div className="relative mb-8">
                <input
                  type="text"
                  value={member.member_name}
                  onChange={(e) =>
                    handleMemberChange(
                      index,
                      "member_name",
                      e.target.value
                    )
                  }
                  required
                  placeholder=" "
                  className="
                    peer
                    w-full
                    bg-transparent
                    border-b-2
                    border-gray-400
                    text-white
                    py-2
                    pr-8
                    outline-none
                    focus:border-blue-500
                  "
                />

                <label
                  className="
                    absolute
                    left-0
                    top-2
                    text-gray-400
                    transition-all
                    duration-200
                    peer-placeholder-shown:top-2
                    peer-placeholder-shown:text-sm
                    peer-focus:-top-4
                    peer-focus:text-xs
                    peer-focus:text-blue-400
                    peer-not-placeholder-shown:-top-4
                    peer-not-placeholder-shown:text-xs
                  "
                >
                  Nama Anggota {index + 1}
                </label>

                <span className="absolute right-2 top-2 text-gray-400">
                  <FaUser />
                </span>

                {errors.members[index] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.members[index]}
                  </p>
                )}
              </div>

              {/* NIM */}
              <div className="relative">
                <input
                  type="text"
                  value={member.nim}
                  onChange={(e) =>
                    handleMemberChange(
                      index,
                      "nim",
                      e.target.value
                    )
                  }
                  required
                  placeholder=" "
                  className="
                    peer
                    w-full
                    bg-transparent
                    border-b-2
                    border-gray-400
                    text-white
                    py-2
                    pr-8
                    outline-none
                    focus:border-blue-500
                  "
                />

                <label
                  className="
                    absolute
                    left-0
                    top-2
                    text-gray-400
                    transition-all
                    duration-200
                    peer-placeholder-shown:top-2
                    peer-placeholder-shown:text-sm
                    peer-focus:-top-4
                    peer-focus:text-xs
                    peer-focus:text-blue-400
                    peer-not-placeholder-shown:-top-4
                    peer-not-placeholder-shown:text-xs
                  "
                >
                  NIM Anggota {index + 1}
                </label>

                <span className="absolute right-2 top-2 text-gray-400">
                  <FaIdCard />
                </span>
              </div>
            </div>
          ))}

          {/* ANGKATAN */}
          <div className="mb-8 mt-4">
            <label className="text-white flex items-center gap-2 mb-1">
              <FaUniversity />
              Angkatan
            </label>

            <input
              value="2025"
              readOnly
              className="
                w-full
                p-2
                bg-slate-600
                text-white
                rounded
                opacity-70
                cursor-not-allowed
              "
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={hasErrors()}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              disabled:opacity-50
              text-white
              font-bold
              py-3
              rounded
              transition-all
              duration-300
            "
          >
            Daftar Sekarang
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;