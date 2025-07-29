import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBullhorn, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "For Brands", path: "/brands" },
    { name: "For Influencers", path: "/influencers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-blue-600 flex items-center gap-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaBullhorn />
          BuzzFleet
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={link.path}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-10 text-xl font-semibold text-gray-700"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
