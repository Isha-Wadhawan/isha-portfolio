import { motion } from "framer-motion";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

const experiences = [
  {
    company: "Graphura India Pvt. Ltd.",
    role: "Backend Developer",
    duration: "December 2025 - April 2026",
    color: "from-cyan-400 to-blue-500",

    points: [
      "Designed and developed scalable RESTful APIs.",
      "Implemented authentication and security systems.",
      "Managed e-commerce business logic and state handling.",
      "Built robust backend architecture for modern applications.",
    ],

    link: "https://drive.google.com/file/d/1cNcN2C-7nKgu0SOilR32JJnVaO4m3v_u/view?usp=sharing",
  },

  {
    company: "Concentrix",
    role: "Research Analyst",
    duration: "July 2025 - Sep 2025",
    color: "from-purple-400 to-pink-500",

    points: [
      "Analyzed NFL subscription data and churn patterns.",
      "Generated insights to improve retention and growth.",
      "Collaborated with teams on reporting and dashboards.",
      "Maintained analytical accuracy across large datasets.",
    ],

    link: "https://drive.google.com/file/d/1Y8Z8ebToVYFy1Lj9_0mdVDMaHvgezUJP/view",
  },

  {
    company: "Maco InfoTech Pvt Ltd.",
    role: "React Intern",
    duration: "Jan 2024 - Feb 2024",
    color: "from-emerald-400 to-green-500",

    points: [
      "Developed responsive frontend interfaces using React.",
      "Integrated frontend libraries and reusable components.",
      "Worked on production-ready UI implementation.",
    ],

    link: "https://drive.google.com/file/d/1KKwkKSpHV9Ac3SEDfHoVyuUsXsP74qHV/view",
  },

  {
    company: "Amazon Development Centre",
    role: "Customer Service Associate",
    duration: "July 2024 - Jan 2025",
    color: "from-orange-400 to-red-500",

    points: [
      "Resolved customer queries across calls, chat, and email.",
      "Maintained high CSAT and performance metrics.",
      "Handled escalations with detailed CRM documentation.",
      "Recognized for strong problem-solving and communication.",
    ],
  },
];

export default function Experience() {
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
        rounded-full
        bg-cyan-500/20
        blur-3xl
      " />

      <div className="
        absolute
        bottom-10
        right-10
        w-72
        h-72
        rounded-full
        bg-purple-500/20
        blur-3xl
      " />

      {/* TITLE */}
      <SectionTitle
        title="Experience"
        center
      />

      {/* GRID */}
      <div className="
        max-w-5xl
        mx-auto
        grid
        md:grid-cols-2
        gap-5
        relative
        z-10
      ">

        {experiences.map((exp, index) => (

          <motion.div
            key={exp.company}

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: index * 0.08,
            }}

            whileHover={{
              y: -6,
              scale: 1.01,
            }}

            className="
              glass
              rounded-[22px]
              border
              border-white/10
              p-5
              relative
              overflow-hidden
              group
            "
          >

            {/* animated glow */}
            <div className={`
              absolute
              inset-0
              opacity-0
              group-hover:opacity-20
              transition
              duration-500
              bg-gradient-to-br
              ${exp.color}
            `} />

            <div className="relative z-10">

              {/* top row */}
              <div className="
                flex
                items-start
                justify-between
                gap-3
              ">

                <div>

                  <h2 className="
                    text-lg
                    font-black
                  ">
                    {exp.company}
                  </h2>

                  <h3 className="
                    text-sm
                    gradient-text
                    mt-1
                  ">
                    {exp.role}
                  </h3>

                </div>

                <span className="
                  text-[10px]
                  px-3
                  py-1
                  rounded-full
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  whitespace-nowrap
                ">
                  {exp.duration}
                </span>

              </div>

              {/* points */}
              <ul className="
                mt-5
                space-y-2
                text-sm
                text-gray-300
              ">

                {exp.points.map((point) => (

                  <li
                    key={point}
                    className="
                      flex
                      gap-2
                      leading-6
                    "
                  >
                    <span className="text-cyan-400">
                      ✦
                    </span>

                    {point}

                  </li>

                ))}

              </ul>

              {/* buttons */}
              <div className="
                flex
                flex-wrap
                gap-3
                mt-5
              ">

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-3
                      py-1
                      text-xs
                      rounded-full
                      bg-cyan-400/10
                      border
                      border-cyan-400/20
                      hover:bg-cyan-400/20
                      transition
                    "
                  >
                    Certificate →
                  </a>
                )}

                {exp.project && (
                  <a
                    href={exp.project}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-3
                      py-1
                      text-xs
                      rounded-full
                      bg-purple-400/10
                      border
                      border-purple-400/20
                      hover:bg-purple-400/20
                      transition
                    "
                  >
                    Project →
                  </a>
                )}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  </Layout>
);
}
