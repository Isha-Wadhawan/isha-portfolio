import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,

} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const contacts = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/isha-wadhawan-62b71b232/",
    color: "from-blue-500 to-cyan-400",
  },

  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/isha-wadhawan",
    color: "from-gray-500 to-gray-300",
  },

  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/IshaWadhawan/",
    color: "from-yellow-400 to-orange-500",
  },

  {
    name: "Email",
    icon: <FaEnvelope />,
    link: "mailto:ishawadhawan3@gmail.com",
    color: "from-pink-500 to-red-400",
  },

  {
    name: "Phone",
    icon: <FaPhoneAlt />,
    link: "tel:+919354752206",
    color: "from-green-400 to-emerald-500",
  },


];

export default function Contact() {
  return (
    <Layout>

      <div className="relative min-h-screen overflow-hidden">

        {/* glows */}
        <div className="
          absolute
          top-20
          left-10
          w-72
          h-72
          bg-cyan-500/20
          rounded-full
          blur-3xl
        " />

        <div className="
          absolute
          bottom-10
          right-10
          w-72
          h-72
          bg-purple-500/20
          rounded-full
          blur-3xl
        " />

        <SectionTitle
          title="Contact Universe"
          center
        />

        <div className="
          max-w-5xl
          mx-auto
          grid
          grid-cols-2
          md:grid-cols-3
          gap-5
          relative
          z-10
        ">

          {contacts.map((item) => (

            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="block"
            >

              <div className="
                glass
                rounded-[24px]
                border
                border-white/10
                p-6
                text-center
                transition
                hover:-translate-y-2
                hover:border-cyan-400/30
                group
                relative
                overflow-hidden
              ">

                {/* glow */}
                <div className={`
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-20
                  transition
                  duration-500
                  bg-gradient-to-br
                  ${item.color}
                `} />

                <div className="relative z-10">

                  <div className="
                    text-4xl
                    mb-4
                    flex
                    justify-center
                    gradient-text
                  ">
                    {item.icon}
                  </div>

                  <h2 className="
                    text-lg
                    font-bold
                  ">
                    {item.name}
                  </h2>

                </div>

              </div>

            </a>

          ))}

        </div>

      </div>

    </Layout>
  );
}