import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial data
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    message:
      "Codantra helped us launch our MVP in record time. Their communication and delivery were beyond expectations.",
    rating: 5,
  },
  {
    name: "Anuj Patel",
    role: "CTO, Fintech",
    message:
      "The team brought technical expertise and creative insight that helped shape our AI platform beautifully.",
    rating: 4,
  },
  {
    name: "Sarah Ali",
    role: "Digital Marketer",
    message:
      "I loved how intuitive and clean the UI/UX was. The team really understood our goals and made it shine.",
    rating: 5,
  },
  {
    name: "Raj Mehta",
    role: "Product Manager",
    message:
      "Their understanding of product and tech together is commendable. A solid partner to work with.",
    rating: 4,
  },
  {
    name: "Ayesha Khan",
    role: "Founder, EdTech",
    message:
      "They helped bring our classroom app to life—smooth and simple experience with amazing support.",
    rating: 5,
  },
];

// Define random shades
const bgShades =  [
  "bg-[#E3F2FD]",
  "bg-[#FCE4EC]",
  "bg-[#E8F5E9]",
  "bg-[#FFF3E0]",
  "bg-[#F3E5F5]",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const renderStars = (rating) => (
  <div className="flex justify-center gap-1 mt-2">
    {[...Array(5)].map((_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400" />
      ) : (
        <FaRegStar key={i} className="text-gray-400 dark:text-gray-500" />
      )
    )}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#F5F9FF] to-[#dceaff]  text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#012A56]"
        >
          💬 What People Say
        </motion.h2>

        <Slider {...settings}>
          {testimonials.map((t, index) => {
            const bg = bgShades[index % bgShades.length]; // rotate shades
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div
                  className={`rounded-xl shadow-xl p-6 text-center h-full mx-4 ${bg} `}
                >
                  <p className="text-black italic mb-4">“{t.message}”</p>
                  {renderStars(t.rating)}
                  <h4 className="text-lg font-semibold mt-4 text-[#012A56]">
                    {t.name}
                  </h4>
                  <span className="text-sm text-blue-600">{t.role}</span>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
