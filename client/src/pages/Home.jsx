import { motion } from "framer-motion";
import FloatingBlob from "../components/FloatingBlob";
import ProjectGallery from "../components/ProjectGallery";
import ishapicc from "../assets/ishapicc.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen relative overflow-hidden grid-bg">

            <FloatingBlob className="bg-purple-500 w-72 h-72 top-10 left-10" />

            <FloatingBlob className="bg-cyan-500 w-72 h-72 bottom-10 right-10" />

            {/* HERO SECTION */}
            <section className="
    min-h-screen
    flex
    items-center
    justify-center
    px-8
    relative
    z-10
">

                <div className="
        max-w-7xl
        w-full
        grid
        md:grid-cols-2
        gap-16
        items-center
    ">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >

                    

                        <h1
                            className="
                    text-5xl
                    md:text-8xl
                    font-black
                    leading-[0.95]
                    tracking-tight
                    hero-glow
                "
                        >
                            ISHA <br />

                            <span className="gradient-text">
                                WADHAWAN
                            </span>
                        </h1>

                        <p className="
                mt-8
                text-gray-400
                text-lg
                leading-8
                max-w-xl
            ">
                            I design immersive interfaces,
                            engineer scalable backend systems,
                            and build artistic digital experiences
                            that feel futuristic and alive.
                        </p>

                        <div className="flex gap-5 mt-10 flex-wrap">

                            <motion.button
                                onClick={() => navigate("/projects")}
                                whileHover={{
                                    scale: 1.08,
                                }}
                                whileTap={{
                                    scale: 0.96,
                                }}
                                className="
                        px-8
                        py-4
                        rounded-full
                        bg-cyan-400
                        text-black
                        font-bold
                        shadow-[0_0_40px_rgba(34,211,238,0.35)]
                    "
                            >
                                Explore Work
                            </motion.button>
<a
    href="/resume.pdf"
    download
>
    <motion.button
        whileHover={{
            scale: 1.05,
        }}
        whileTap={{
            scale: 0.96,
        }}
        className="
            px-8
            py-4
            rounded-full
            border
            border-white/10
            glass
            hover:border-cyan-400/40
            hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
            transition
        "
    >
        Download Resume
    </motion.button>
</a>

                        </div>

                    </motion.div>

                    {/* RIGHT IMAGE SECTION */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="
                relative
                flex
                justify-center
                items-center
            "
                    >

                        {/* outer glow */}
                        <div className="
                absolute
                w-[420px]
                h-[420px]
                rounded-full
                bg-cyan-500/20
                blur-3xl
            " />

                        {/* rotating border */}
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
                    w-[380px]
                    h-[380px]
                    rounded-full
                    border
                    border-dashed
                    border-cyan-400/30
                "
                        />

                        {/* profile container */}
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                            }}
                            className="
                    relative
                    w-[320px]
                    h-[420px]
                    rounded-[40px]
                    overflow-hidden
                    glass
                    border
                    border-white/10
                    shadow-2xl
                "
                        >

                            <img
                                src={ishapicc}
                                alt="Isha"
                                className="
                        w-full
                        h-full
                        object-cover
                    "
                            />

                            {/* overlay gradient */}
                            <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#050816]
                    via-transparent
                    to-transparent
                " />

                        </motion.div>

                        {/* floating badges */}

                    

                    </motion.div>

                </div>

            </section>

            {/* PROJECTS SECTION */}
            <section className="relative z-10 px-6 pb-24">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="
                        text-4xl
                        md:text-5xl
                        font-black
                        text-center
                        gradient-text
                        mb-16
                    "
                >
                    Featured Projects
                </motion.h2>

                <ProjectGallery />

            </section>

        </div>
    );
}