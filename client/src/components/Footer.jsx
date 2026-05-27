import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (

    <footer className="
      relative
      mt-24
      border-t
      border-white/10
      overflow-hidden
    ">

      {/* glow */}
      <div className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        w-[500px]
        h-[200px]
        bg-cyan-500/10
        blur-3xl
      " />

      <div className="
        max-w-6xl
        mx-auto
        px-6
        py-10
        relative
        z-10
      ">

        {/* top */}
        <div className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-8
        ">

          {/* logo/text */}
          <div>

            <h2 className="
              text-2xl
              font-black
              hero-glow
            ">
              ISHA <span className="gradient-text">
                WADHAWAN
              </span>
            </h2>

            <p className="
              text-gray-400
              mt-2
              max-w-md
              text-sm
              leading-6
            ">
              Building immersive interfaces,
              scalable backend systems,
              and futuristic digital experiences.
            </p>

          </div>

          {/* socials */}
          <div className="
            flex
            items-center
            gap-4
          ">

            {[
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/in/isha-wadhawan-62b71b232/",
              },

              {
                icon: <FaGithub />,
                link: "https://github.com/isha-wadhawan",
              },

              {
                icon: <SiLeetcode />,
                link: "https://leetcode.com/u/IshaWadhawan/",
              },

            ].map((item, index) => (

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
                  w-12
                  h-12
                  rounded-full
                  glass
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-lg
                  hover:scale-110
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
                  transition
                "
              >
                {item.icon}
              </a>

            ))}

          </div>

        </div>

        {/* bottom */}
        <div className="
          mt-10
          pt-6
          border-t
          border-white/10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          text-sm
          text-gray-500
        ">

          <p>
            © 2026 Isha Wadhawan. All rights reserved.
          </p>

          <p className="
            flex
            items-center
            gap-2
          ">
            Crafted with
            <FaHeart className="text-cyan-400" />
            and futuristic pixels
          </p>

        </div>

      </div>

    </footer>
  );
}