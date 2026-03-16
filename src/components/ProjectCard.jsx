export default function ProjectCard({ title, description, tech, github, demo, image }) {
  return (
    <div className="card bg-base-100 shadow-xl">

      {image && (
        <figure>
          <img src={image} alt={title} />
        </figure>
      )}

      <div className="card-body">

        <h2 className="card-title">{title}</h2>

        <p>{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t, index) => (
            <span key={index} className="badge badge-outline">
              {t}
            </span>
          ))}
        </div>

        <div className="card-actions justify-end mt-4">

          {github && (
            <a href={github} className="btn btn-outline btn-sm">
              GitHub
            </a>
          )}

          {demo && (
            <a href={demo} className="btn btn-primary btn-sm">
              Live Demo
            </a>
          )}

          {!github && !demo && (
            <span className="badge badge-warning">
              Private Project
            </span>
          )}

        </div>

      </div>

    </div>
  )
}