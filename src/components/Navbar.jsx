import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authDropdown, setAuthDropdown] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "For Brands", path: "/brands" },
    { name: "For Influencers", path: "/influencers" },

    // { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const authOptions = [
    { name: "Login as Influencer", path: "/login/influencer", icon: "" },
    { name: "Login as Brand", path: "/login/brand", icon: "" },
    { name: "Sign Up", path: "/signup", icon: "" },
  ];

  return (
    <>
      <nav className="bg-black/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent flex items-center gap-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">📢</span>
            </div>
            SocialSpark
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8 text-gray-300 font-medium">
              {navLinks.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group"
                >
                  <a
                    href={link.path}
                    className="hover:text-white transition-colors duration-300 py-2 px-1"
                  >
                    {link.name}
                  </a>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.li>
              ))}
            </ul>

            {/* Auth Buttons Desktop */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <motion.button
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                  onClick={() => setAuthDropdown(!authDropdown)}
                  whileHover={{ scale: 1.05 }}
                >
                  Login
                  <svg
                    className={`inline-block ml-1 transition-transform duration-200 ${
                      authDropdown ? "rotate-180" : ""
                    }`}
                    width="12"
                    height="12"
                    fill="currentColor"
                  >
                    <path d="M6 9L1.5 4.5L3 3L6 6L9 3L10.5 4.5L6 9Z" />
                  </svg>
                </motion.button>

                <AnimatePresence>
                  {authDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-56 bg-gray-900 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden"
                      onMouseLeave={() => setAuthDropdown(false)}
                    >
                      {authOptions.map((option, i) => (
                        <motion.a
                          key={i}
                          href={option.path}
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 flex items-center gap-3"
                          whileHover={{ x: 4 }}
                        >
                          <span className="text-lg">{option.icon}</span>
                          {option.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.a
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2.5 cursor-pointer rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}
              >
                Get Started
              </motion.a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            className="lg:hidden text-2xl text-white relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? "✕" : "☰"}
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-80 h-screen bg-gray-900/95 backdrop-blur-md border-l border-white/10 z-50 flex flex-col"
            >
              {/* Mobile Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-xs">📢</span>
                  </div>
                  Connect
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-xl p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-8 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}

                {/* Divider */}
                <div className="h-px bg-white/10 my-6" />

                {/* Auth Options Mobile */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wider px-4 py-2 font-semibold">
                    Account
                  </p>
                  {authOptions.map((option, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + i) * 0.1 }}
                    >
                      <a
                        href={option.path}
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 flex items-center gap-3"
                      >
                        <span className="text-lg">{option.icon}</span>
                        {option.name}
                      </a>
                    </motion.div>
                  ))}/
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-white/10">
                <motion.a
                  className="block w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-center px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started Free
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
