import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa'

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'EE2026 Digital Design',
      subtitle: 'FPGA Bomb Tag Game',
      description: 'A 4-player multiplayer game with UART communication between FPGA boards, featuring physics animations and real-time gameplay.',
      image: 'images/FPGABoard.png',
      technologies: ['FPGA', 'UART', 'VHDL', 'Hardware Design'],
      github: '',
      demo: 'https://www.youtube.com/watch?v=5ip-X0AAwHc',
      demoIcon: FaYoutube,
      featured: true
    },
    {
      id: 2,
      title: 'CP2106 (Orbital)',
      subtitle: 'NUqueSt Unity Game',
      description: 'Educational game inspired by Stardew Valley, featuring AI pathfinding, OOP architecture, and comprehensive testing methodologies.',
      image: 'images/nuquest.png',
      technologies: ['Unity', 'C#', 'AI', 'OOP', 'Testing'],
      github: 'https://github.com/ThawTunZan/Thaw-and-Ryan-NUqueSt',
      demo: 'https://www.youtube.com/watch?v=FCb_FZp87ic',
      demoIcon: FaYoutube,
      featured: true
    },
    {
      id: 3,
      title: 'CG2111A Engineering',
      subtitle: 'mBot Maze Navigation',
      description: 'Remote control robot project using Arduino, LiDAR, and communication protocols for autonomous maze navigation.',
      image: 'images/cg2111a.png',
      technologies: ['Arduino', 'LiDAR', 'C++', 'Hardware'],
      github: 'https://github.com/ThawTunZan/Alex-Bot',
      demo: '',
      demoIcon: FaExternalLinkAlt,
      featured: true
    }
  ]

  return (
    <section className="section-padding bg-primary-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-primary-300">
            Here are some of my most recent and impactful projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
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
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-accent-400">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary-400 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-primary-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-700 text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4">
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
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="btn-primary inline-flex items-center justify-center"
          >
            View All Projects
            <FaExternalLinkAlt className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects 