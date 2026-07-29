import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaJs,
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        bg-[#050816]
        text-white
        flex
        items-center
        px-6
        overflow-hidden
        "
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
            absolute
            top-20
            right-20
            w-80
            h-80
            bg-cyan-500/20
            rounded-full
            blur-3xl
            "
      />

      <div
        className="
            max-w-7xl
            mx-auto
            grid
            md:grid-cols-2
            gap-12
            items-center
            relative
            z-10
            "
      >
        {/* LEFT SECTION */}

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p
            className="
                    text-cyan-400
                    text-xl
                    mb-4
                    "
          >
            Hello, I'm
          </p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
                    text-5xl
                    md:text-7xl
                    font-bold
                    "
          >
            Taannishk Tyagi
          </motion.h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,

              "Full Stack Engineer",
              2000,

              "React Developer",
              2000,

              "Software Engineer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="
                    mt-5
                    text-3xl
                    text-cyan-400
                    font-semibold
                    "
          />

          <p
            className="
                    mt-6
                    text-gray-400
                    text-lg
                    max-w-xl
                    leading-relaxed
                    "
          >
            I build modern, scalable and responsive web applications using
            React, Node.js, Express and MongoDB. Passionate about creating
            real-world software solutions.
          </p>

          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
            }}
            className="
                    flex
                    gap-5
                    mt-8
                    "
          >
            <Link
              to="/projects"
              className="
                        px-6
                        py-3
                        rounded-xl

                        bg-gradient-to-r
                        from-cyan-400
                        to-blue-500

                        text-black

                        font-semibold

                        hover:scale-105

                        transition
                        "
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              className="
                        px-6
                        py-3

                        rounded-xl

                        border
                        border-cyan-400

                        hover:bg-cyan-400
                        hover:text-black

                        transition
                        "
            >
              Resume
            </a>
          </motion.div>

          {/* SOCIAL ICONS */}

          <div
            className="
                    flex
                    gap-6
                    mt-8
                    text-2xl
                    "
          >
            <FaGithub
              className="
                        hover:text-cyan-400
                        cursor-pointer
                        "
            />

            <FaLinkedin
              className="
                        hover:text-cyan-400
                        cursor-pointer
                        "
            />

            <FaInstagram
              className="
                        hover:text-cyan-400
                        cursor-pointer
                        "
            />
          </div>
        </motion.div>

        {/* RIGHT SECTION */}

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
                relative
                flex
                justify-center
                "
        >
          {/* React */}

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
                    absolute
                    top-0
                    left-10
                    text-5xl
                    text-cyan-400
                    "
          >
            <FaReact />
          </motion.div>

          {/* Node */}

          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
                    absolute
                    right-0
                    top-20
                    text-5xl
                    text-green-400
                    "
          >
            <FaNodeJs />
          </motion.div>

          {/* MongoDB */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
                    absolute
                    bottom-10
                    left-0
                    text-5xl
                    text-green-500
                    "
          >
            <SiMongodb />
          </motion.div>

          {/* Javascript */}

          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
                    absolute
                    bottom-0
                    right-10
                    text-5xl
                    text-yellow-400
                    "
          >
            <FaJs />
          </motion.div>

          {/* Main Circle */}

          <div
            className="
                    w-72
                    h-72

                    md:w-96
                    md:h-96

                    rounded-full

                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-purple-600

                    flex
                    items-center
                    justify-center

                    shadow-2xl
                    shadow-cyan-500/30

                    "
          >
            <div
              className="
                        w-64
                        h-64

                        md:w-80
                        md:h-80

                        rounded-full

                        bg-[#050816]

                        flex
                        items-center
                        justify-center

                        text-8xl
                        "
            >
              👨‍💻
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
