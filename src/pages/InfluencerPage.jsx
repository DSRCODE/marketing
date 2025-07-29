import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import InfluencerOnboardingForm from "../components/InfluencerOnboardingForm";

const InfluencerPage = () => {
  return (
    <div>
      <section className="bg-white py-20 px-4 text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Join Our Influencer Network
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get consistent paid promotions, grow your audience, and become part of
          an exclusive marketing community.
        </p>
      </section>

      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {[
            "Regular paid campaigns",
            "Fair and fast payouts",
            "Category-based targeting",
            "Supportive team environment",
            "Reputation-based rewards",
            "Easy onboarding",
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
        <InfluencerOnboardingForm />
      </section>
    </div>
  );
};

export default InfluencerPage;
