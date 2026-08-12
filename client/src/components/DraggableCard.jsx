import { motion } from "framer-motion";


export default function DraggableCard({
  title,
  description,
  tech,
  image,
  live
}) {
  return (
    <a
  href={live}
  target="_blank"
  rel="noreferrer"
  className="block"
>

    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 1,
      }}
      className="glass p-6 rounded-3xl w-[320px] cursor-grab active:cursor-grabbing"
    >
        {/* Project Image */}
        <img
          src={image}
          alt={`${title} project preview`}
          className="w-full h-48 object-cover rounded-2xl mb-5"
        />
        
      <h2 className="text-2xl font-bold gradient-text">
        {title}
      </h2>

      <p className="text-gray-300 mt-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full bg-white/10 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>

</a>
  );
}