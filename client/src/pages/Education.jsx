import { motion } from "framer-motion";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

import echl from "../assets/echl.jpg";
import jims from "../assets/jims.jpg";

import coding from "../assets/coding.jpg";
import gc from "../assets/gc.jpg";

const education = [
    {
        image: echl,
        degree: "Masters in Computer Applications",
        duration: "September 2024 - Present",
        subjects: [
            "Big Data",
            "C#",
            "Cloud Computing",
            "Foundation Of Algorithms",
        ],
    },

    {
        image: jims,
        degree: "Bachelors in Computer Applications",
        duration: "November 2021 - July 2024",
        subjects: [
            "Data Structures & Algorithms",
            "Database Management Systems",
            "Full Stack Development",
            "Operating System",
        ],
    },
];

const certifications = [
    {
        image: coding,
        title: "Coding Development",
        link: "https://drive.google.com/file/d/10CMltchfwMtrY0jzBzRMCZehpDsgrdGz/view",
    },

    {
        image: gc,
        title: "Introduction to Large Language Models",
        link: "https://www.skills.google/public_profiles/451e3db2-ca6c-4da7-a65f-22e7e9920069/badges/6374157",
    },
];

export default function Education() {
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
          bottom-20
          right-10
          w-72
          h-72
          rounded-full
          bg-purple-500/20
          blur-3xl
        " />

                {/* TITLE */}
                <SectionTitle
                    title="Education"
                    center
                />

                {/* EDUCATION */}
                <div className="
          grid
          md:grid-cols-2
          gap-4
          max-w-4xl
          mx-auto
          relative
          z-10
        ">

                    {education.map((item, index) => (

                        <motion.div
                            key={item.degree}

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
                                y: -6,
                                scale: 1.01,
                            }}

                            className="
                glass
                rounded-[20px]
                overflow-hidden
                border
                border-white/10
                group
                max-w-[420px]
                mx-auto
              "
                        >

                            {/* image */}
                            <div className="
                h-40
                overflow-hidden
              ">

                                <img
                                    src={item.image}
                                    alt={item.degree}
                                    className="
                    w-full
                    h-full
                    object-contain bg-black/20
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                                />

                            </div>

                            {/* content */}
                            <div className="p-4">

                                <h2 className="
                  text-lg
                  font-black
                  gradient-text
                ">
                                    {item.degree}
                                </h2>

                                <p className="
                  text-cyan-300
                  mt-2
                  tracking-wide
                  text-sm
                ">
                                    {item.duration}
                                </p>

                                <div className="
                  flex
                  flex-wrap
                  gap-2
                  mt-4
                ">

                                    {item.subjects.map((subject) => (

                                        <span
                                            key={subject}
                                            className="
                        px-2
                        py-1
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-[10px]
                      "
                                        >
                                            {subject}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

                {/* CERTIFICATIONS */}
                <div className="mt-24 relative z-10">

                    <SectionTitle
                        title="Certifications"
                        center
                    />

                    <div className="
            grid
            md:grid-cols-2
            gap-4
            max-w-4xl
            mx-auto
            mt-10
          ">

                        {certifications.map((cert, index) => (

                            <motion.a
                                href={cert.link}
                                target="_blank"
                                rel="noreferrer"

                                key={cert.title}

                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                transition={{
                                    delay: index * 0.1,
                                }}

                                whileHover={{
                                    y: -6,
                                    scale: 1.01,
                                }}

                                className="
                  glass
                  rounded-[20px]
                  overflow-hidden
                  border
                  border-white/10
                  group
                  max-w-[420px]
                  mx-auto
                "
                            >

                                {/* image */}
                                <div className="
                  h-40
                  overflow-hidden
                ">

                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="
                      w-full
                      h-full
                      object-contain bg-black/20
                      group-hover:scale-110
                      transition
                      duration-700
                    "
                                    />

                                </div>

                                {/* content */}
                                <div className="p-4">

                                    <h2 className="
                    text-lg
                    font-bold
                  ">
                                        {cert.title}
                                    </h2>

                                    <p className="
                    mt-3
                    text-cyan-400
                    text-sm
                  ">
                                        View Certificate →
                                    </p>

                                </div>

                            </motion.a>

                        ))}

                    </div>

                </div>

            </div>

        </Layout>
    );
}