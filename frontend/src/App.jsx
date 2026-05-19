import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Makrab from "./pages/Makrab";
import Register from "./pages/Register";
import DataRegister from "./pages/DataRegister";
import Congratulations from "./pages/Congratulations";
import DashboardAdmin from "./pages/DashboardAdmin";
import Proker from "./pages/Proker";

import Login from "./auth/Login";

import Angkatan2526 from "./detailStruktur/Angkatan2526";
import Angkatan2425 from "./detailStruktur/Angkatan2425";
import Angkatan2324 from "./detailStruktur/Angkatan2324";
import Angkatan2223 from "./detailStruktur/Angkatan2223";


// PROTECTED ROUTE
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  return token ? children : <Navigate to="/admin/login" replace />;
}

// PAGE TRANSITION WRAPPER
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// ROUTES
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* PUBLIC */}
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        <Route
          path="/proker"
          element={
            <PageTransition>
              <Proker />
            </PageTransition>
          }
        />
        <Route
          path="/makrab"
          element={
            <PageTransition>
              <Makrab />
            </PageTransition>
          }
        />

        <Route
          path="/register"
          element={
            <PageTransition>
              <Register />
            </PageTransition>
          }
        />

        <Route
          path="/data-register"
          element={
            <PageTransition>
              <DataRegister />
            </PageTransition>
          }
        />

        <Route
          path="/congratulations"
          element={
            <PageTransition>
              <Congratulations />
            </PageTransition>
          }
        />

        {/* STRUKTUR */}
        <Route
          path="/angkatan-2526"
          element={
            <PageTransition>
              <Angkatan2526 />
            </PageTransition>
          }
        />

        <Route
          path="/angkatan-2425"
          element={
            <PageTransition>
              <Angkatan2425 />
            </PageTransition>
          }
        />

        <Route
          path="/angkatan-2324"
          element={
            <PageTransition>
              <Angkatan2324 />
            </PageTransition>
          }
        />

        <Route
          path="/angkatan-2223"
          element={
            <PageTransition>
              <Angkatan2223 />
            </PageTransition>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin/login"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <PageTransition>
                <DashboardAdmin />
              </PageTransition>
            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}
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