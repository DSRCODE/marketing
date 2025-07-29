import { FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/clogo.jpeg";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0A0F1C] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* <img
              src={logo}
              alt="Platform Logo"
              className="h-10 w-auto rounded-xl object-contain"
            /> */}
            <h2 className="text-2xl font-bold tracking-wide text-blue-600">
              BuzzFleet
            </h2>
          </div>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Connecting brands with the right influencers to create impactful
            digital campaigns.
          </p>
          <p className="text-sm text-gray-500">
            📍 Jaipur, Rajasthan, India
            <br />
            📞 +91-9782488408
            <br />
            📧 hello@BuzzFleet.com
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">For Brands</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li
              onClick={() => navigate("/how-it-works")}
              className="cursor-pointer hover:text-blue-400"
            >
              How it Works
            </li>
            <li
              onClick={() => navigate("/start-campaign")}
              className="cursor-pointer hover:text-blue-400"
            >
              Start a Campaign
            </li>
            <li
              onClick={() => navigate("/pricing")}
              className="cursor-pointer hover:text-blue-400"
            >
              Pricing
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">For Influencers</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li
              onClick={() => navigate("/join-as-influencer")}
              className="cursor-pointer hover:text-blue-400"
            >
              Join as Influencer
            </li>
            <li
              onClick={() => navigate("/dashboard")}
              className="cursor-pointer hover:text-blue-400"
            >
              Dashboard
            </li>
            <li
              onClick={() => navigate("/community")}
              className="cursor-pointer hover:text-blue-400"
            >
              Community
            </li>
          </ul>
        </div>

        {/* Social + CTA */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <div className="flex gap-4 text-2xl text-gray-300 mb-4">
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white">
              <FaSquareXTwitter />
            </a>
          </div>
          <button
            onClick={() => navigate("/register")}
            className="mt-2 text-sm px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition font-medium"
          >
            Join Our Network
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} BuzzFleet — All rights reserved.
      </div>
    </footer>
  );
}
