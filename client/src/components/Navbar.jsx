import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
        }}
        className="
          relative
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-[0_8px_32px_rgba(0,0,0,0.35)]
        "
      >

        {/* glowing background */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-gradient-to-r
            from-cyan-500/10
            to-purple-500/10
            blur-xl
          "
        />

        {/* logo */}
        <motion.div
          whileHover={{ rotate: 8, scale: 1.08 }}
          className="
            relative
            w-11
            h-11
            rounded-full
            flex
            items-center
            justify-center
            font-black
            text-lg
            bg-gradient-to-br
            from-cyan-400
            to-purple-500
            text-black
            shadow-lg
          "
        >
          IW
        </motion.div>

        {/* nav items */}
        <div className="flex items-center gap-2 relative">

          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative"
              >

                {/* active pill */}
                {active && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{
                      type: "spring",
                      duration: 0.6,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-white/10
                      border
                      border-white/10
                    "
                  />
                )}

                <motion.div
                  whileHover={{
                    y: -2,
                  }}
                  className="
                    relative
                    px-5
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    text-white/80
                    hover:text-white
                    transition
                  "
                >
                  {item.name}
                </motion.div>

              </Link>
            );
          })}

        </div>

      </motion.div>

    </div>
  );
}