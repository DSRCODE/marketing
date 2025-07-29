import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBullhorn } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
      <motion.div
        className="text-2xl font-bold text-blue-600 flex items-center gap-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaBullhorn />
        BuzzFleet
      </motion.div>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/brands">For Brands</Link>
        </li>
        <li>
          <Link to="/influencers">For Influencers</Link>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
