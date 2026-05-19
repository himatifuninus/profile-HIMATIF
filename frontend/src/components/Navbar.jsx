import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    x: -20,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navClass = ({ isActive }) =>
    `relative pb-1 text-sm md:text-base font-bold transition-all duration-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 ${
      isActive
        ? "text-white after:w-full"
        : "text-gray-300 after:w-0 hover:after:w-full"
    }`;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[82%] max-w-6xl z-50">
      <nav
        className="
          relative overflow-hidden rounded-2xl
          border border-white/10
          bg-[#0B0717]/40 backdrop-blur-3xl
          shadow-[0_10px_35px_rgba(0,0,0,0.25)]
          text-white
        "
      >
        {/* Purple Glow */}
        <div className="absolute left-0 top-0 h-full w-40 bg-purple-500/20 blur-3xl pointer-events-none" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent pointer-events-none" />

        {/* CONTENT */}
        <div className="relative px-4 sm:px-5">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/HIMATIF.png"
                alt="Logo HIMATIF"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain rounded-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/64x64?text=H";
                }}
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-sm sm:text-base">
                  HIMATIF
                </span>
                <span className="text-[10px] sm:text-xs text-slate-300">
                  Glory Glory Glory
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-7">
              <NavLink to="/home" className={navClass}>
                HOME
              </NavLink>
              <NavLink to="/about" className={navClass}>
                ABOUT
              </NavLink>
              <NavLink to="/makrab" className={navClass}>
                PROGRAM
              </NavLink>
              <NavLink
                to="/admin/login"
                className="ml-0 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Login"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" />
                </svg>
              </NavLink>
            </div>

            {/* MOBILE BUTTON */}
            <div className="flex items-center gap-1 md:hidden">
              {/* Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                  relative w-9 h-9
                  flex items-center justify-center
                  rounded-lg hover:bg-white/10
                  transition-colors focus:outline-none
                "
                aria-label="Toggle menu"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              {/* Icon User - Login */}
              <NavLink
                to="/admin/login"
                className="
                  w-9 h-9
                  flex items-center justify-center
                  rounded-lg hover:bg-white/10
                  transition-colors
                "
                aria-label="Login"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="
                md:hidden overflow-hidden
                border-t border-white/10
                bg-[#0B0717]/30 backdrop-blur-3xl
              "
            >
              <div className="px-5 py-4 space-y-3">
                <motion.div variants={itemVariants}>
                  <NavLink
                    to="/home"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block py-2 text-sm font-semibold transition-colors duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <NavLink
                    to="/about"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block py-2 text-sm font-semibold transition-colors duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    About
                  </NavLink>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <NavLink
                    to="/makrab"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block py-2 text-sm font-semibold transition-colors duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    Program
                  </NavLink>
                </motion.div>

                {/* <motion.div variants={itemVariants}>
                  <NavLink
                    to="/admin/login"
                    onClick={closeMenu}
                    className="
                      block py-2 px-4 text-sm font-bold text-center
                      border border-white rounded-lg text-white
                      transition-all duration-300
                      hover:bg-white hover:text-black
                    "
                  >
                    Login
                  </NavLink>
                </motion.div> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
