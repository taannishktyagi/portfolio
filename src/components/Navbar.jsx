import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Journey", to: "journey" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "top-2" : "top-5"
      }`}
    >
      <nav
        className={`
          max-w-7xl
          mx-auto
          px-8
          rounded-2xl
          transition-all
          duration-500

          ${
            scrolled
              ? "py-3 bg-[#050816]/80 backdrop-blur-2xl border border-cyan-400/20 shadow-2xl shadow-cyan-500/10"
              : "py-4 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-cyan-500/10"
          }
        `}
      >
        <div className="flex items-center justify-between">

          {/* Logo */}

          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 5,
            }}
          >
            <Link
              to="hero"
              smooth={true}
              duration={700}
              offset={-90}
              className="
                cursor-pointer
                text-3xl
                font-bold
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              TT
            </Link>
          </motion.div>

          {/* Desktop Menu */}

          <ul className="hidden md:flex items-center gap-10">

            {links.map((link) => (

              <li key={link.name}>

                <Link
                  to={link.to}
                  smooth={true}
                  spy={true}
                  duration={700}
                  offset={-90}
                  activeClass="text-cyan-400"
                  className="
                    cursor-pointer
                    relative
                    text-gray-300
                    hover:text-cyan-400
                    transition-all
                    duration-300

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-cyan-400
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  {link.name}
                </Link>

              </li>

            ))}

          </ul>

          {/* Resume */}

          <motion.a
            href="/resume.pdf"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(34,211,238,.45)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              hidden
              md:block

              px-5
              py-2.5

              rounded-xl

              bg-gradient-to-r
              from-cyan-400
              to-blue-500

              text-black
              font-semibold

              transition
            "
          >
            Resume
          </motion.a>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>

        {/* Mobile Menu */}

        <AnimatePresence>

          {open && (

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                md:hidden
                mt-5
                rounded-2xl
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                p-6
              "
            >

              <ul className="flex flex-col gap-5">

                {links.map((link) => (

                  <li key={link.name}>

                    <Link
                      to={link.to}
                      smooth={true}
                      spy={true}
                      duration={700}
                      offset={-90}
                      onClick={() => setOpen(false)}
                      className="
                        cursor-pointer
                        text-gray-300
                        hover:text-cyan-400
                        transition
                      "
                    >
                      {link.name}
                    </Link>

                  </li>

                ))}

                <a
                  href="/resume.pdf"
                  className="
                    mt-2
                    text-center
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    py-3
                    font-semibold
                    text-black
                  "
                >
                  Resume
                </a>

              </ul>

            </motion.div>

          )}

        </AnimatePresence>

      </nav>
    </header>
  );
};

export default Navbar;