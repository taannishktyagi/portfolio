import { motion } from "framer-motion";

const Background = () => {
  return (
    <div
      className="
        fixed
        inset-0
        -z-10
        overflow-hidden
        bg-[#050816]
        "
    >
      {/* Cyan Aurora Glow */}

      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="

            absolute

            top-[-10%]

            left-[20%]

            w-[500px]

            h-[500px]

            bg-cyan-500/20

            rounded-full

            blur-[120px]

            "
      />

      {/* Purple Aurora Glow */}

      <motion.div
        animate={{
          x: [100, -100, 100],
          y: [50, -50, 50],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="

            absolute

            bottom-[-10%]

            right-[10%]

            w-[600px]

            h-[600px]

            bg-purple-600/20

            rounded-full

            blur-[140px]

            "
      />

      {/* Floating Particles */}

      {Array.from({ length: 35 }).map((_, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -100, 0],

            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + (index % 5),

            repeat: Infinity,

            delay: index * 0.2,
          }}
          className="

                absolute

                w-1

                h-1

                bg-cyan-300

                rounded-full

                "
          style={{
            left: `${Math.random() * 100}%`,

            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Grid Overlay */}

      <div
        className="

            absolute

            inset-0

            opacity-[0.08]

            bg-[linear-gradient(#22d3ee_1px,transparent_1px),linear-gradient(90deg,#22d3ee_1px,transparent_1px)]

            bg-[size:60px_60px]

            "
      />
    </div>
  );
};

export default Background;
