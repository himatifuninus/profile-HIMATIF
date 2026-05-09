import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Makrab from "./pages/Makrab";
import Register from "./pages/Register";
import DataRegister from "./pages/DataRegister";
import Angkatan2526 from "./detailStruktur/Angkatan2526";
import Angkatan2425 from "./detailStruktur/Angkatan2425";
import Angkatan2324 from "./detailStruktur/Angkatan2324";
import Angkatan2223 from "./detailStruktur/Angkatan2223";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/makrab" element={<Makrab />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data-register" element={<DataRegister />} />

        {/* 🔥 ROUTE ANGKATAN */}
        <Route path="/angkatan-2526" element={<Angkatan2526 />} />
        <Route path="/angkatan-2425" element={<Angkatan2425 />} />
        <Route path="/angkatan-2324" element={<Angkatan2324 />} />
        <Route path="/angkatan-2223" element={<Angkatan2223 />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
