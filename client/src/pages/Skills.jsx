import { motion } from "framer-motion";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

const skills = [
  {
    name: "React",
    icon: "⚛️",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "NodeJS",
    icon: "🟢",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "from-green-500 to-lime-400",
  },
  {
    name: "Express",
    icon: "🚀",
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "Tailwind",
    icon: "🌊",
    color: "from-cyan-300 to-sky-500",
  },
  {
    name: "Framer Motion",
    icon: "✨",
    color: "from-pink-400 to-purple-500",
  },
  {
    name: "Python",
    icon: "🐍",
    color: "from-yellow-300 to-blue-500",
  },
  {
    name: "Java",
    icon: "☕",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "C++",
    icon: "💻",
    color: "from-indigo-400 to-blue-700",
  },
];

export default function Skills() {
  return (
    <Layout>

      <div className="min-h-screen relative overflow-hidden">

        {/* background glow */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

        <div className="flex justify-center">
          <SectionTitle title="Skills Universe" />
        </div>


        <div className="
          flex
          flex-wrap
          justify-center
          gap-10
          relative
          z-10
        ">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}

              drag

              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}

              initial={{
                opacity: 0,
                y: 80,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.08,
                type: "spring",
              }}

              whileHover={{
                scale: 1.08,
                rotate: 2,
                y: -10,
              }}

              className="
                relative
                group
                w-52
                h-60
                rounded-[32px]
                overflow-hidden
                cursor-grab
                active:cursor-grabbing
              "
            >

              {/* animated border */}
              <div className={`
                absolute
                inset-0
                bg-gradient-to-br
                ${skill.color}
                opacity-80
              `} />

              {/* inner glass */}
              <div className="
                absolute
                inset-[2px]
                rounded-[30px]
                bg-[#0b1023]/90
                backdrop-blur-xl
                flex
                flex-col
                items-center
                justify-center
                p-6
              ">

                {/* glow */}
                <div className={`
                  absolute
                  w-40
                  h-40
                  rounded-full
                  blur-3xl
                  opacity-20
                  bg-gradient-to-br
                  ${skill.color}
                `} />

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="text-6xl relative z-10"
                >
                  {skill.icon}
                </motion.div>

                <h2 className="
                  text-2xl
                  font-black
                  mt-8
                  relative
                  z-10
                ">
                  {skill.name}
                </h2>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </Layout>
  );
}