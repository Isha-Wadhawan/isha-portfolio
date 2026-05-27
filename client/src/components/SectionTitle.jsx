import { motion } from "framer-motion";

export default function SectionTitle({ title }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-6xl font-black gradient-text mb-14"
    >
      {title}
    </motion.h1>
  );
}