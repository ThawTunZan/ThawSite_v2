import { FaGithub } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  technologies: string[]
  category: string
  github: string
  demo: string
  demoIcon: any
  date: string
  featured: boolean
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/400x200/1e293b/64748b?text=Project+Image'
          }}
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-4 left-4 bg-primary-800/80 text-primary-300 px-2 py-1 rounded text-xs">
          {project.date}
        </div>
      </div>

      {/* Project Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-accent-400">
            {project.title}
          </h3>
          <p className="text-sm text-primary-400 mb-3">
            {project.subtitle}
          </p>
          <p className="text-primary-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary-700 text-primary-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex gap-3 pt-4 border-t border-primary-700">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-300 hover:text-accent-400 transition-colors text-sm"
            >
              <FaGithub size={16} />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-300 hover:text-accent-400 transition-colors text-sm"
            >
              <project.demoIcon size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 