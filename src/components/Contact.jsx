import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#050816] px-6 py-24 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-cyan-400 text-lg">Let's Connect</p>

          <h2 className="text-5xl md:text-6xl font-bold mt-3">Contact Me</h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            I'm always interested in discussing new opportunities, collaborating
            on exciting projects and building modern web applications. Feel free
            to reach out anytime.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 flex items-center gap-5 hover:border-cyan-400 transition">
              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-black">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-gray-400">youremail@example.com</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 flex items-center gap-5 hover:border-cyan-400 transition">
              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-black">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-semibold text-xl">Location</h3>
                <p className="text-gray-400">Punjab, India</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>

              <div className="flex gap-5">
                <a
                  href="#"
                  className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="#"
                  className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-cyan-300">
                Currently Available
              </h3>

              <p className="mt-2 text-gray-300">
                Open to internships, freelance work and full-time MERN Stack
                Developer opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-8">Send a Message</h3>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none resize-none focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-black rounded-xl py-4 font-semibold flex items-center justify-center gap-3 hover:bg-cyan-400 transition"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
