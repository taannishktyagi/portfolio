import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#050816] overflow-hidden">
      {/* Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top */}

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white">
              Taannishk
              <span className="text-cyan-400"> Tyagi</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Passionate MERN Stack Developer focused on building modern,
              scalable and high-performance web applications with clean code and
              intuitive user experiences.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 px-5 py-3 backdrop-blur-xl">
              <FaCode className="text-cyan-400" />

              <span className="text-gray-300">
                Built with React • Tailwind • MERN
              </span>
            </div>
          </motion.div>

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:text-right"
          >
            <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>

            <p className="text-gray-400 mt-4">
              Interested in collaborating or discussing opportunities? Feel free
              to connect.
            </p>

            <div className="flex lg:justify-end gap-4 mt-8">
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}

        <div className="border-t border-white/10 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Taannishk Tyagi. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-400">
            Crafted with
            <FaHeart className="text-red-500 animate-pulse" />
            using React & MERN
          </div>

          <button
            onClick={scrollTop}
            className="w-14 h-14 rounded-full bg-cyan-500 text-black flex items-center justify-center hover:scale-110 transition duration-300 shadow-lg shadow-cyan-500/30"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
