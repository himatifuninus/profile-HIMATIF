import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
function AnimatedRoutes({ setIsTransitioning }) {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (!isAdminPage) {
      if (isFirstLoad) {
        setIsFirstLoad(false);
        setIsTransitioning(false);
        return;
      }
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 1800);
      return () => clearTimeout(timer);
    } else {
      setIsTransitioning(false);
    }
  }, [location.pathname]);

  return (
    <>

      {/* AnimatePresence KHUSUS untuk Transition overlay */}
      <AnimatePresence mode="wait">
        {!isAdminPage && !isFirstLoad && (
          <Transition key={"transition-" + location.pathname} />
        )}
      </AnimatePresence>

      {/* AnimatePresence KHUSUS untuk page content */}
      <AnimatePresence mode="wait">
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
    </>
  );
}

// LAYOUT
function AppLayout() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <>
      {!isAdminPage && !isTransitioning && <Navbar />}
      <AnimatedRoutes setIsTransitioning={setIsTransitioning} />
      {!isAdminPage && !isTransitioning && <Footer />}
    </>
  );
}

// APP ROOT
function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;