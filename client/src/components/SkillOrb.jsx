import { motion } from "framer-motion";

export default function SkillOrb({ name }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="w-36 h-36 rounded-full glass flex items-center justify-center text-xl font-bold"
    >
      {name}
    </motion.div>
  );
}