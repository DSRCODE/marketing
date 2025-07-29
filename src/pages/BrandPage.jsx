import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import BrandOnboardingForm from "../components/BrandOnboardingForm";

const BrandPage = () => {
  return (
    <div>
      <section className="bg-white py-20 px-4 text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Promote Your Brand with Influencers
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Reach the right audience through our trusted influencer network.
          Campaign setup, audience targeting, and results — all in one place.
        </p>
      </section>

      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {[
            "Targeted audience reach",
            "ROI-focused campaigns",
            "Real-time analytics",
            "Trusted influencer pool",
            "Flexible budgets",
            "Quick campaign setup",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-semibold text-gray-700">{text}</h3>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-12 bg-blue-50 px-4">
        <BrandOnboardingForm />
      </section>
    </div>
  );
};

export default BrandPage;
