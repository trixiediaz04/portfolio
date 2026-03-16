import ProjectCard from "./ProjectCard.jsx"
import {PROJECT_LIST} from "../projectList.js";

export default function Projects() {

  return (
    <section id="projects" className="py-20">

      <h2 className="text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">

        {PROJECT_LIST.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

      </div>

    </section>
  )
}