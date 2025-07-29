import { motion } from "framer-motion";
// import teamImg from "../assets/about/team.jpg";
import ab from "../assets/about/ab1.jpg"

export default function About() {
  return (
    <section
      id="About"
      className=" pt-24 py-20 px-6 bg-white text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={ab}
            alt="Codantra Team"
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#012A56]">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-black">
            At <span className="font-semibold">Codantra</span>, we're on a
            mission to empower businesses and startups with modern digital
            solutions. Whether it’s a minimal web app or an advanced AI-driven
            system, our team is passionate about building tools that solve
            real-world problems.
          </p>
          <p className="mt-4 text-md text-black ">
            We blend creativity, technology, and strategy to build software
            that's fast, scalable, and user-first. Our values are built on
            transparency, innovation, and delivering impact.
          </p>
          <div className="mt-6">
            <ul className="list-disc list-inside text-left space-y-2 text-black">
              <li>💡 Innovative & client-centric approach</li>
              <li>⚙️ Full-stack capabilities (Web, Mobile, APIs, AI)</li>
              <li>🛠️ Trusted by startups & entrepreneurs</li>
              <li>📞 Always just a call or message away</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
