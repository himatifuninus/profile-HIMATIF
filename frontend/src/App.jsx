import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Makrab from "./pages/Makrab";
import Register from "./pages/Register";
import DataRegister from "./pages/DataRegister";
import Congratulations from "./pages/Congratulations";

import Login from "./auth/Login"; // tambah ini
import Angkatan2526 from "./detailStruktur/Angkatan2526";
import Angkatan2425 from "./detailStruktur/Angkatan2425";
import Angkatan2324 from "./detailStruktur/Angkatan2324";
import Angkatan2223 from "./detailStruktur/Angkatan2223";

import Transition from "./transition/Transition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<><Transition /><Home /></>} />
        <Route path="/about" element={<><Transition /><About /></>} />
        <Route path="/makrab" element={<><Transition /><Makrab /></>} />
        <Route path="/register" element={<><Transition /><Register /></>} />
        <Route path="/data-register" element={<><Transition /><DataRegister /></>} />
        <Route path="/congratulations" element={<><Transition /><Congratulations /></>} />

        <Route path="/angkatan-2526" element={<><Transition /><Angkatan2526 /></>} />
        <Route path="/angkatan-2425" element={<><Transition /><Angkatan2425 /></>} />
        <Route path="/angkatan-2324" element={<><Transition /><Angkatan2324 /></>} />
        <Route path="/angkatan-2223" element={<><Transition /><Angkatan2223 /></>} />

        {/* Admin */}
        <Route path="/admin/login" element={<><Transition /><Login /></>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
