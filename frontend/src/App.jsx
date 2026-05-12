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
import DashboardAdmin from "./pages/DashboardAdmin";

import Login from "./auth/Login";

import Angkatan2526 from "./detailStruktur/Angkatan2526";
import Angkatan2425 from "./detailStruktur/Angkatan2425";
import Angkatan2324 from "./detailStruktur/Angkatan2324";
import Angkatan2223 from "./detailStruktur/Angkatan2223";

import Transition from "./transition/Transition";

// PROTECTED ROUTE
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" replace />;
}

// ROUTES
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* TRANSITION HARUS DI SINI (bukan double Routes) */}
      <Transition key={"transition-" + location.pathname} />

      <Routes location={location} key={location.pathname}>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/makrab" element={<Makrab />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data-register" element={<DataRegister />} />
        <Route path="/congratulations" element={<Congratulations />} />

        {/* STRUKTUR */}
        <Route path="/angkatan-2526" element={<Angkatan2526 />} />
        <Route path="/angkatan-2425" element={<Angkatan2425 />} />
        <Route path="/angkatan-2324" element={<Angkatan2324 />} />
        <Route path="/angkatan-2223" element={<Angkatan2223 />} />

        {/* ADMIN */}
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <DashboardAdmin />
            </ProtectedRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

// APP ROOT
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;