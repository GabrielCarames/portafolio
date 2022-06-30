import Card from "../components/Card"
import { projects } from "../jsFiles/projects"

export default function Projects() {
  return (
    <div className="projects">
      <h3 className="projects__title">Proyectos</h3>
      <ul className="projects-list">
        {projects.map(
          (project, index) => (
            console.log(project),
            (
              <Card
                title={project[0].title}
                image={project[1].image}
                technologies={project[2].technologies}
                description={project[3].description}
                links={project[4].links}
                key={index}
              />
            )
          )
        )}
      </ul>
    </div>
  )
}
