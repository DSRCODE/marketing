import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const HeroIntro = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-white to-gray-100">
      {/* Text Section */}
      <motion.div
        className="max-w-xl mb-10 md:mb-0"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Bridge Brands with Influencers <br />
          <span className="text-indigo-600">for Powerful Promotion</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Our platform connects forward-thinking brands with trusted influencers
          to create authentic marketing campaigns that drive results.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-indigo-700 transition"
        >
          Get Started <FaArrowRight />
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="https://media.istockphoto.com/id/1156623026/photo/brand-awareness-and-attractiveness-customer-relationship-building.jpg?s=612x612&w=0&k=20&c=UoWJJh0IQiRuhC-FQG_hYnUNHhUfuZJDkmlSHWDF5es="
          alt="Platform illustration"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
};

export default HeroIntro;
