import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import ProjectGallery from "../components/ProjectGallery";

export default function Projects() {
  return (
    <Layout>

      <div className="min-h-screen">

          <div className="flex justify-center">
        <SectionTitle title="Projects" />
                </div>

        <ProjectGallery />

      </div>

    </Layout>
  );
}