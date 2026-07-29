import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  const technologies = [
    {
      name: "React",
      icon: <FaReact />,
      position: "top-5 left-1/2 -translate-x-1/2",
    },

    {
      name: "Node.js",
      icon: <FaNodeJs />,
      position: "top-24 right-10",
    },

    {
      name: "MongoDB",
      icon: <SiMongodb />,
      position: "bottom-24 right-12",
    },

    {
      name: "Express",
      icon: <SiExpress />,
      position: "bottom-5 left-1/2 -translate-x-1/2",
    },

    {
      name: "JavaScript",
      icon: <FaJs />,
      position: "bottom-24 left-12",
    },

    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      position: "top-24 left-10",
    },

    {
      name: "Redux",
      icon: <SiRedux />,
      position: "top-1/2 left-0 -translate-y-1/2",
    },

    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      position: "top-1/2 right-0 -translate-y-1/2",
    },
  ];

  const extraTools = [
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },

    {
      name: "Git",
      icon: <FaGitAlt />,
    },

    {
      name: "GitHub",
      icon: <FaGithub />,
    },
  ];

  return (
    <section
      id="skills"
      className="
        min-h-screen
        bg-[#050816]
        text-white
        px-6
        py-24
        overflow-hidden
        "
    >
      <div
        className="
            max-w-7xl
            mx-auto
            "
      >
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
                w-full
                flex
                flex-col
                items-center
                text-center
                "
        >
          <p
            className="
                    text-cyan-400
                    text-lg
                    "
          >
            My Technology Universe
          </p>

          <h2
            className="
                    text-5xl
                    md:text-6xl
                    font-bold
                    mt-3
                    "
          >
            Skills & Stack
          </h2>

          <p
            className="
                    mt-5
                    text-gray-400
                    text-lg
                    max-w-3xl
                    leading-relaxed
                    "
          >
            A collection of technologies I use to build modern full stack
            applications and transform ideas into real-world digital
            experiences.
          </p>
        </motion.div>

        {/* TECH GALAXY */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
                relative
                h-[560px]
                mt-16
                flex
                items-center
                justify-center
                "
        >
          {/* Outer Orbit */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
                    absolute
                    w-[430px]
                    h-[430px]
                    rounded-full
                    border
                    border-cyan-400/20
                    "
          />

          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
                    absolute
                    w-80
                    h-80
                    rounded-full
                    bg-cyan-500/20
                    blur-3xl
                    "
          />

          {/* MERN CORE */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
                    relative
                    w-64
                    h-64
                    rounded-full

                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-purple-600

                    flex
                    items-center
                    justify-center

                    shadow-2xl
                    shadow-cyan-500/40

                    "
          >
            <div
              className="
                        w-52
                        h-52
                        rounded-full
                        bg-[#050816]

                        flex
                        items-center
                        justify-center

                        text-5xl
                        font-bold
                        "
            >
              MERN
            </div>
          </motion.div>

          {/* FLOATING TECHNOLOGIES */}

          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 2 + index * 0.2,
                repeat: Infinity,
              }}
              whileHover={{
                scale: 1.15,
              }}
              className={`

                        absolute
                        ${tech.position}

                        bg-white/10

                        backdrop-blur-xl

                        border
                        border-white/20

                        rounded-2xl

                        px-5
                        py-3

                        flex
                        items-center
                        gap-3

                        shadow-lg

                        `}
            >
              <span
                className="
                            text-3xl
                            text-cyan-400
                            "
              >
                {tech.icon}
              </span>

              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* TOOLS */}

        <div
          className="
                flex
                justify-center
                flex-wrap
                gap-5
                mt-8
                "
        >
          {extraTools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="
                    bg-white/10
                    backdrop-blur-xl

                    border
                    border-white/20

                    rounded-xl

                    px-6
                    py-3

                    flex
                    items-center
                    gap-3
                    "
            >
              <span
                className="
                        text-cyan-400
                        text-xl
                        "
              >
                {tool.icon}
              </span>

              {tool.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
