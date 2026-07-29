import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";

const journeyData = [
  {
    year: "2024",
    icon: <FaGraduationCap />,
    title: "Master of Computer Applications",
    description:
      "Strengthened my understanding of programming, software development, databases and computer science fundamentals.",
  },
  {
    year: "2025",
    icon: <FaLaptopCode />,
    title: "Started MERN Stack Journey",
    description:
      "Learned HTML, CSS, JavaScript, React.js, Node.js, Express.js and MongoDB while building practical full-stack projects.",
  },
  {
    year: "2026",
    icon: <FaRocket />,
    title: "Building Real Projects",
    description:
      "Developing modern web applications including a Food Delivery platform and a futuristic developer portfolio while continuously improving my problem-solving and DSA skills.",
  },
];

const Journey = () => {
  return (
    <section
      id="journey"
      className="min-h-screen bg-[#050816] text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-cyan-400 text-lg">My Learning Path</p>

          <h2 className="text-5xl md:text-6xl font-bold mt-3">My Journey</h2>

          <p className="mt-5 text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
            Every project, every challenge and every line of code has
            contributed to my growth as a full-stack developer. My journey is
            driven by curiosity, continuous learning and building practical
            solutions.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">
          {/* Center Line */}

          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-cyan-500/30"></div>

          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}

              <div
                className="
                absolute
                left-6
                md:left-1/2
                md:-translate-x-1/2
                w-14
                h-14
                rounded-full
                bg-cyan-500
                flex
                items-center
                justify-center
                text-black
                text-xl
                shadow-lg
                shadow-cyan-500/40
              "
              >
                {item.icon}
              </div>

              {/* Card */}

              <div
                className={`
                ml-24
                md:ml-0
                w-full
                md:w-[45%]
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-3xl
                p-8
                ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
              `}
              >
                <span className="text-cyan-400 font-semibold">{item.year}</span>

                <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
