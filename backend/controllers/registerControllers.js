import Team from "../models/teamModel.js";
import Member from "../models/memberModel.js";
import Registration from "../models/registrationModel.js";

// POST - daftar tim
export const createRegister = async (req, res) => {
  try {
    const { team_name, phone, angkatan, members } = req.body;

    // Simpan ke tabel teams
    const team = await Team.create({ team_name, phone, angkatan });

    // Simpan ke tabel members
    const memberData = members.map((m) => ({
      team_id: team.id,
      member_name: m.member_name,
      nim: m.nim,
    }));
    await Member.bulkCreate(memberData);

    // Simpan ke tabel registrations (1 baris)
    await Registration.create({
      team_name,
      phone,
      angkatan,
      member_name_1: members[0]?.member_name || "-",
      nim_1: members[0]?.nim || "-",
      member_name_2: members[1]?.member_name || "-",
      nim_2: members[1]?.nim || "-",
      member_name_3: members[2]?.member_name || "-",
      nim_3: members[2]?.nim || "-",
      member_name_4: members[3]?.member_name || "-",
      nim_4: members[3]?.nim || "-",
      member_name_5: members[4]?.member_name || "-",
      nim_5: members[4]?.nim || "-",
    });

    // Response dengan data lengkap
    const result = await Team.findOne({
      where: { id: team.id },
      include: [{ model: Member, as: "members" }],
    });

    res.json({ success: true, message: "Pendaftaran berhasil", data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET - ambil semua tim beserta anggotanya
export const getRegisters = async (req, res) => {
  try {
    const teams = await Team.findAll({
      include: [{ model: Member, as: "members" }],
    });

    const result = teams.map((team) => {
      const t = team.toJSON();
      return {
        id: t.id,
        team_name: t.team_name,
        phone: t.phone,
        angkatan: t.angkatan,
        members: t.members.map((m) => ({
          member_name: m.member_name,
          nim: m.nim,
        })),
      };
    });

    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};