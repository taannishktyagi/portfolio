import { motion } from "framer-motion";

import {
  FaCode,
  FaGraduationCap,
  FaRocket,
  FaLaptopCode,
} from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description:
        "MCA Graduate with a strong foundation in computer applications, programming and software development.",
    },

    {
      icon: <FaCode />,
      title: "Development",
      description:
        "MERN Stack Developer focused on creating modern, responsive and scalable web applications.",
    },

    {
      icon: <FaRocket />,
      title: "Vision",
      description:
        "Focused on improving skills continuously and building real-world software solutions.",
    },
  ];

  const stats = [
    {
      number: "10+",
      title: "Projects Built",
    },

    {
      number: "15+",
      title: "Technologies",
    },

    {
      number: "100%",
      title: "Coding Passion",
    },
  ];

  return (
    <section
      id="about"
      className="
        bg-[#050816]
        text-white
        px-6
        py-20
        "
    >
      <div
        className="
            max-w-7xl
            mx-auto
            "
      >
        {/* ABOUT HEADER */}

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
                max-w-4xl
                mx-auto
                text-center
                "
        >
          <p
            className="
                    text-cyan-400
                    text-lg
                    "
          >
            Get To Know Me
          </p>

          <h2
            className="
                    text-5xl
                    md:text-6xl
                    font-bold
                    mt-3
                    "
          >
            About Me
          </h2>

          <p
            className="
                    mt-6
                    text-gray-400
                    text-lg
                    leading-relaxed
                    mx-auto
                    "
          >
            I am Taannishk Tyagi, a MERN Stack Developer passionate about
            building modern, responsive and scalable web applications. I enjoy
            solving problems through clean code and innovative solutions.
          </p>
        </motion.div>

        {/* CARDS */}

        <div
          className="
                grid
                md:grid-cols-3
                gap-8
                mt-14
                "
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                        bg-white/10
                        backdrop-blur-xl

                        border
                        border-white/20

                        rounded-2xl

                        p-8

                        transition
                        "
            >
              <div
                className="
                            text-cyan-400
                            text-4xl
                            mb-5
                            "
              >
                {card.icon}
              </div>

              <h3
                className="
                            text-2xl
                            font-semibold
                            "
              >
                {card.title}
              </h3>

              <p
                className="
                            mt-4
                            text-gray-400
                            leading-relaxed
                            "
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* JOURNEY CARD */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="

                mt-16

                bg-gradient-to-r
                from-cyan-500/20
                to-purple-500/20

                border
                border-white/10

                rounded-3xl

                p-8

                flex
                flex-col
                md:flex-row

                items-center

                gap-6

                "
        >
          <div
            className="
                    text-cyan-400
                    text-6xl
                    "
          >
            <FaLaptopCode />
          </div>

          <div
            className="
                    text-center
                    md:text-left
                    "
          >
            <h3
              className="
                        text-3xl
                        font-bold
                        "
            >
              Full Stack Development Journey
            </h3>

            <p
              className="
                        mt-3
                        text-gray-400
                        leading-relaxed
                        "
            >
              Learning and building projects with React, JavaScript, Node.js,
              Express, MongoDB and modern development tools.
            </p>
          </div>
        </motion.div>

        {/* STATS */}

        <div
          className="
                grid
                md:grid-cols-3
                gap-10

                mt-16

                text-center

                "
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.2,
              }}
            >
              <h3
                className="
                            text-5xl
                            font-bold
                            text-cyan-400
                            "
              >
                {item.number}
              </h3>

              <p
                className="
                            mt-3
                            text-gray-400
                            "
              >
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
