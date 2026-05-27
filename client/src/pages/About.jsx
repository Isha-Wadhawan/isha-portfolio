import { motion } from "framer-motion";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import ishapicc from "../assets/ishapicc.jpeg";

const interests = [
  {
    icon: "💻",
    title: "Software Development",
  },
  {
    icon: "🧠",
    title: "Natural Language Processing",
  },
  {
    icon: "⚙️",
    title: "Software Engineering",
  },
  {
    icon: "🚀",
    title: "Algorithms",
  },
];

export default function About() {
  return (
    <Layout>

      <div className="relative min-h-screen overflow-hidden">

        {/* background glows */}
        <div className="
          absolute
          top-20
          left-10
          w-72
          h-72
          bg-cyan-500/20
          blur-3xl
          rounded-full
        " />

        <div className="
          absolute
          bottom-10
          right-10
          w-72
          h-72
          bg-purple-500/20
          blur-3xl
          rounded-full
        " />

        {/* ABOUT TITLE */}
        <SectionTitle
          title="About Me"
          center
        />

        {/* MAIN CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            glass
            rounded-[40px]
            p-8
            md:p-14
            grid
            md:grid-cols-2
            gap-12
            items-center
            relative
            z-10
          "
        >

          {/* IMAGE SIDE */}
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="
              relative
              flex
              justify-center
            "
          >

            {/* rotating ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              className="
                absolute
                w-[320px]
                h-[320px]
                rounded-full
                border
                border-dashed
                border-cyan-400/30
              "
            />

            <div className="
              relative
              w-[280px]
              h-[360px]
              rounded-[32px]
              overflow-hidden
              border
              border-white/10
              shadow-2xl
            ">

              <img
                src={ishapicc}
                alt="Isha"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#050816]
                via-transparent
                to-transparent
              " />

            </div>

          </motion.div>

          {/* CONTENT SIDE */}
          <div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                text-gray-300
                text-lg
                leading-9
              "
            >
              Focused and enthusiastic developer
              with a strong interest in software
              development and artificial intelligence.

              I enjoy transforming ideas into
              immersive digital experiences through
              creative frontend design and scalable
              backend engineering.

              Passionate about solving real-world
              problems using algorithms, modern
              technologies, and artistic interaction.
            </motion.p>

            {/* INFO GRID */}
            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-5
              mt-10
            ">

              {[
                {
                  label: "Birthday",
                  value: "1 March 2004",
                },
                {
                  label: "City",
                  value: "Delhi",
                },
                {
                  label: "Email",
                  value: "ishawadhawan3@gmail.com",
                },
              ].map((item) => (

                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  key={item.label}
                  className="
                    glass
                    rounded-2xl
                    p-5
                  "
                >
                  <p className="
                    text-cyan-400
                    text-sm
                    uppercase
                    tracking-widest
                  ">
                    {item.label}
                  </p>

                  <h3 className="
                    mt-2
                    text-lg
                    font-bold
                  ">
                    {item.value}
                  </h3>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

        {/* INTERESTS */}
        <div className="mt-28 relative z-10">

          <SectionTitle
            title="Interests"
            center
          />

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            mt-14
          ">

            {interests.map((item, index) => (

              <motion.div
                key={item.title}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: index * 0.1,
                }}

                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}

                className="
                  glass
                  rounded-[28px]
                  p-8
                  text-center
                  border
                  border-white/10
                  relative
                  overflow-hidden
                  group
                "
              >

                {/* glow */}
                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-cyan-500/5
                " />

                <div className="
                  text-5xl
                  relative
                  z-10
                ">
                  {item.icon}
                </div>

                <h3 className="
                  mt-6
                  text-xl
                  font-bold
                  relative
                  z-10
                ">
                  {item.title}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </Layout>
  );
}