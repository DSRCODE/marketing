import { motion } from "framer-motion";
import { FaRocket, FaUserFriends } from "react-icons/fa";

const Hero = ({ setModalOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh] bg-gradient-to-br from-blue-100 to-white text-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Bridging Brands with Real Influence
      </motion.h1>
      <motion.p
        className="mt-4 text-gray-600 text-lg max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        A platform to connect your products with the perfect influencers and
        create impactful promotions.
      </motion.p>
      <motion.div
        className="mt-8 flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg flex items-center gap-2 transition-all duration-300"
        >
          <FaRocket />
          I'm a Brand
        </button>
        <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl text-lg flex items-center gap-2 transition-all duration-300">
          <FaUserFriends />
          I'm an Influencer
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
