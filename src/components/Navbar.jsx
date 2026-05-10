import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';


const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren"
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.07
    }
  }
};

const itemVariants = {
  closed: {
    opacity: 0,
    x: -20
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);


  const navClass = ({ isActive }) =>
    `relative pb-1 transition-all
     hover:text-white
     after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:transition-all
     ${isActive ? "text-white after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <nav className="sticky top-0 z-50 bg-[#121B2F]/95 backdrop-blur-lg text-white shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group ml-3 sm:ml-20"
          >
            <img
              src="HIMATIF.png"
              alt="Logo HIMATIF"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-lg p-1"
            />
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm sm:text-lg">
                HIMATIF
              </span>
              <span className="text-xs text-slate-400 block sm:block">
                Glory Glory Glory
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="font-bold hidden md:flex space-x-6 mr-2 lg:mr-16">
            <NavLink to="/home" className={navClass}>
              HOME
            </NavLink>

            <NavLink to="/about" className={navClass}>
              ABOUT
            </NavLink>

            <NavLink to="/makrab" className={navClass}>
              PROGRAM
            </NavLink>

            {/* <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink> */}
          </div>

          {/* BUTTON MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="md:hidden bg-[#121B2F] overflow-hidden border-t border-white/10"
    >
      <div className="px-6 pb-4 space-y-3 pt-3">
      <motion.div variants={itemVariants}>
  <NavLink
    to="/home"
    onClick={closeMenu}
    className="block hover:text-gray-300 font-semibold transition-colors"
  >
    Home
  </NavLink>
</motion.div>

<motion.div variants={itemVariants}>
  <NavLink
    to="/about"
    onClick={closeMenu}
    className="block hover:text-gray-300 font-semibold transition-colors"
  >
    About
  </NavLink>
</motion.div>

<motion.div variants={itemVariants}>
  <NavLink
    to="/makrab"
    onClick={closeMenu}
    className="block hover:text-gray-300 font-semibold transition-colors"
  >
    Program
  </NavLink>
</motion.div>

        {/* <motion.div variants={itemVariants}>
          <NavLink to="/contact" className="block hover:text-gray-300 transition-colors">
            Contact
          </NavLink>
        </motion.div> */}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}
