# HIMATIF UNINUS Website

Website resmi Himpunan Mahasiswa Teknik Informatika (HIMATIF) Universitas Islam Nusantara yang dibangun menggunakan React.js, Express.js, dan MySQL dalam arsitektur Monorepo.

## 🚀 Fitur Utama

### Website Organisasi
- Landing Page HIMATIF
- Profil Organisasi
- Sejarah Kepengurusan HIMATIF
- Struktur Kepengurusan
- Informasi Program Kerja
- Responsive Design

### ICC & Hackathon
- Halaman Informatika Coding Camp (ICC)
- Halaman Hackathon
- Sistem Pendaftaran Peserta
- Informasi Timeline Kegiatan
- Informasi Benefit dan Peraturan

### Dashboard Admin
- Login Admin
- Manajemen Data Pendaftar
- Monitoring Peserta
- Protected Route dengan JWT

---

# 🏗️ Teknologi

## Frontend
- React JS
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React

## Backend
- Express JS
- Sequelize ORM
- MySQL
- JWT Authentication
- Bcrypt

## Package Manager
- pnpm Workspace

---

# 📂 Struktur Project

```bash
profile-HIMATIF/
│
├── apps/
│   ├── frontend/
│   └── backend/
│
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

---

# ⚙️ Instalasi

## Clone Repository

```bash
git clone https://github.com/himatifuninus/profile-HIMATIF.git
```

```bash
cd profile-HIMATIF
```

## Install Dependency

```bash
pnpm install
```

---

# 🔥 Menjalankan Frontend

```bash
cd apps/frontend
pnpm run dev
```

Frontend berjalan pada:

```bash
http://localhost:5173
```

---

# 🔥 Menjalankan Backend

```bash
cd apps/backend
pnpm run dev
```

Backend berjalan pada:

```bash
http://localhost:5000
```

---

# 🔐 Environment Variable

Buat file:

```env
apps/backend/.env
```

Contoh:

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=himatif_db
DB_USER=root
DB_PASSWORD=

JWT_SECRET=your_secret_key
```


# 👨‍💻 Tim Pengembang

Website ini dikembangkan oleh:

**HIMATIF DEVELOPER TIM**

Universitas Islam Nusantara

Bandung, Jawa Barat

---

# 📄 Lisensi

Project ini dikembangkan untuk kebutuhan internal HIMATIF UNINUS.

© HIMATIF UNINUS