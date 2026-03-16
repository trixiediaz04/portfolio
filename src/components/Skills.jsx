export default function Skills() {

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "PHP",
    "MySQL",
    "MongoDB",
    "Git"
  ]

  return (
    <div className="p-10 text-center">

      <h2 className="text-3xl font-bold mb-6">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-3">

        {skills.map(skill => (
          <div className="badge badge-lg badge-outline">
            {skill}
          </div>
        ))}

      </div>

    </div>
  )
}