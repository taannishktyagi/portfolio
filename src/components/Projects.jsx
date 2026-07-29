import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery Website",

      description:
        "A full-stack food delivery platform where users can explore food items, manage cart, place orders and experience a smooth online ordering workflow.",

      image: "/food-delivery.png",

      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],

      github: "#",

      live: "#",
    },

    {
      title: "Developer Portfolio",

      description:
        "A modern animated portfolio website designed to showcase skills, projects and professional journey with a futuristic user interface.",

      image: "/portfolio.png",

      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"],

      github: "#",

      live: "#",
    },
  ];

  return (
    <section
      id="projects"
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
        {/* SECTION HEADER */}

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
                justify-center
                text-center
                "
        >
          <p
            className="
                    text-cyan-400
                    text-lg
                    "
          >
            My Recent Work
          </p>

          <h2
            className="
                    text-5xl
                    md:text-6xl
                    font-bold
                    mt-3
                    "
          >
            Featured Projects
          </h2>

          <p
            className="
                    mt-5
                    text-gray-400
                    text-lg
                    max-w-3xl
                    mx-auto
                    leading-relaxed
                    "
          >
            Real-world applications built using modern frontend and backend
            technologies with clean architecture, scalable solutions and smooth
            user experiences.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}

        <div
          className="
                grid
                md:grid-cols-2
                gap-10
                mt-16
                "
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
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
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -12,
              }}
              className="

                        bg-white/10

                        backdrop-blur-xl

                        border
                        border-white/20

                        rounded-3xl

                        overflow-hidden

                        shadow-xl

                        "
            >
              {/* PROJECT IMAGE */}

              <div
                className="
                            h-64

                            bg-gradient-to-r
                            from-cyan-500/20
                            to-purple-500/20

                            overflow-hidden

                            "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                                w-full
                                h-full
                                object-cover

                                hover:scale-110

                                transition
                                duration-700

                                "
                />
              </div>

              {/* CONTENT */}

              <div
                className="
                            p-8
                            "
              >
                <h3
                  className="
                                text-3xl
                                font-bold
                                "
                >
                  {project.title}
                </h3>

                <p
                  className="
                                mt-4
                                text-gray-400
                                leading-relaxed
                                "
                >
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}

                <div
                  className="
                                flex
                                flex-wrap
                                gap-3
                                mt-6
                                "
                >
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="

                                    px-4
                                    py-2

                                    rounded-full

                                    bg-cyan-400/10

                                    border
                                    border-cyan-400/20

                                    text-cyan-300

                                    text-sm

                                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}

                <div
                  className="
                                flex
                                gap-5
                                mt-8
                                "
                >
                  <a
                    href={project.github}
                    className="

                                    flex
                                    items-center
                                    gap-2

                                    px-5
                                    py-3

                                    rounded-xl

                                    bg-white/10

                                    border
                                    border-white/20

                                    hover:bg-white/20

                                    transition

                                    "
                  >
                    <FaGithub />
                    Github
                  </a>

                  <a
                    href={project.live}
                    className="

                                    flex
                                    items-center
                                    gap-2

                                    px-5
                                    py-3

                                    rounded-xl

                                    bg-cyan-400

                                    text-black

                                    hover:scale-105

                                    transition

                                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
