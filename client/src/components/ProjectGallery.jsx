import DraggableCard from "./DraggableCard";
import vrandsons from "../assets/vrandsons.jpeg";
import mandalaKart from "../assets/mandalaKart.jpeg";

const projects = [
  {
    title: "VR And Sons",
    description:
      "Brick inquiry platform with backend APIs and deployment.",
    tech: ["NodeJS", "MongoDB", "Express"],
    image : vrandsons,
        live: "https://www.vrandsons.in/",

  },
  {
    title: "Clothing Brand",
    description:
      "Backend + deployment for fashion e-commerce platform.",
    tech: ["Backend", "Deployment", "JWT"],
    live: "https://github.com/Connectwithashirwadkumar/Clothing-Brand-E-Commerce-Website",
  },
  {
    title: "MandalaKart",
    description:
      "E-commerce platform for artistic products with custom backend.",
    tech: ["React", "Express", "MongoDB"],
    image : mandalaKart,
    live: "https://mandala-kart.vercel.app/",
  },
];

export default function ProjectGallery() {
  return (
    <div className="flex flex-wrap gap-8 justify-center mt-20">
      {projects.map((project) => (
        <DraggableCard
          key={project.title}
          {...project}
        />
      ))}
    </div>
  );
}