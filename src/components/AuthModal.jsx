import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -30 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 30 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-md relative"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
              {isLogin ? "Login to AdBridge" : "Create an Account"}
            </h2>

            <form className="flex flex-col gap-4">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-lg px-4 py-2 outline-blue-400"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg px-4 py-2 outline-blue-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="border rounded-lg px-4 py-2 outline-blue-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all">
                {isLogin ? "Login" : "Register"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <span
                    className="text-blue-600 cursor-pointer font-medium"
                    onClick={() => setIsLogin(false)}
                  >
                    Register
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    className="text-blue-600 cursor-pointer font-medium"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </span>
                </>
              )}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
