import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import projectsData from '../Data/ProjectsData';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // const allProjects = [
  //   {
  //     id: 1,
  //     title: 'EE2026 Digital Design',
  //     subtitle: 'FPGA Bomb Tag Game',
  //     description: 'A semester-long project developing a 4-player multiplayer game on FPGA boards. Features include UART communication between boards, physics animations with gravity effects, and real-time gameplay mechanics. Players must pass a bomb before it explodes, with the last player standing winning.',
  //     image: 'images/FPGABoard.png',
  //     technologies: ['FPGA', 'UART', 'VHDL', 'Hardware Design', 'Multiplayer'],
  //     category: 'hardware',
  //     github: '',
  //     demo: 'https://www.youtube.com/watch?v=5ip-X0AAwHc',
  //     demoIcon: FaYoutube,
  //     date: 'August 2023',
  //     featured: true
  //   },
  //   {
  //     id: 2,
  //     title: 'CP2106 (Orbital)',
  //     subtitle: 'NUqueSt Unity Game',
  //     description: 'Educational game inspired by Stardew Valley and Animal Crossing, designed to introduce NUS freshmen to university modules. Features AI pathfinding with obstacle avoidance, OOP architecture, comprehensive testing, and project management practices including agile methodologies.',
  //     image: 'images/nuquest.png',
  //     technologies: ['Unity', 'C#', 'AI', 'OOP', 'Testing', 'Game Development'],
  //     category: 'software',
  //     github: 'https://github.com/ThawTunZan/Thaw-and-Ryan-NUqueSt',
  //     demo: 'https://www.youtube.com/watch?v=FCb_FZp87ic',
  //     demoIcon: FaYoutube,
  //     date: 'April 2023',
  //     featured: true
  //   },
  //   {
  //     id: 3,
  //     title: 'CG2111A Engineering',
  //     subtitle: 'mBot Maze Navigation',
  //     description: '4-person project to develop a remote control robot capable of navigating through mazes. Utilizes Arduino programming, LiDAR for obstacle detection, communication protocols, and hardware peripherals for autonomous navigation and color identification.',
  //     image: 'images/cg2111a.png',
  //     technologies: ['Arduino', 'LiDAR', 'C++', 'Hardware', 'Robotics'],
  //     category: 'hardware',
  //     github: 'https://github.com/ThawTunZan/Alex-Bot',
  //     demo: '',
  //     demoIcon: FaExternalLinkAlt,
  //     date: 'January 2023',
  //     featured: true
  //   },
  //   {
  //     id: 4,
  //     title: 'Connect 4',
  //     subtitle: 'Web-based Game',
  //     description: 'Solo side project for initial exposure to web development. Features physics-based animations for piece dropping, responsive design, and smooth gameplay mechanics using vanilla JavaScript, HTML, and CSS.',
  //     image: 'images/connect4.png',
  //     technologies: ['JavaScript', 'HTML', 'CSS', 'Web Development'],
  //     category: 'web',
  //     github: 'https://github.com/ThawTunZan/Connect4',
  //     demo: '',
  //     demoIcon: FaExternalLinkAlt,
  //     date: 'December 2022',
  //     featured: false
  //   },
  //   {
  //     id: 5,
  //     title: 'Two Player Snake Game',
  //     subtitle: 'Offline Multiplayer',
  //     description: 'Web-based two-player snake game built with vanilla JavaScript. Features competitive gameplay, collision detection, score tracking, and responsive controls for both players on the same device.',
  //     image: 'images/snake.png',
  //     technologies: ['JavaScript', 'HTML', 'CSS', 'Game Development'],
  //     category: 'web',
  //     github: 'https://github.com/ThawTunZan/Two-Player-Snake',
  //     demo: '',
  //     demoIcon: FaExternalLinkAlt,
  //     date: 'December 2022',
  //     featured: false
  //   }
  // ]
  // Use imported projectsData instead
  const allProjects = projectsData;

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'software', label: 'Software' },
    { id: 'web', label: 'Web Development' }
  ]

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-16">
      <Helmet>
        <title>Projects - Thaw Tun Zan</title>
        <meta name="description" content="Explore my projects in hardware, software, and web development" />
      </Helmet>

      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              My Projects
            </h1>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              A collection of my work across hardware, software, and web development. 
              Each project represents different skills and learning experiences.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {/* Search Bar */}
              <div className="relative w-full max-w-md">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-accent-600 text-white'
                        : 'bg-primary-700 text-primary-300 hover:bg-primary-600'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-primary-800 rounded-lg shadow-lg p-6 flex flex-col">
                  <img
                    src={project.image ? `${import.meta.env.BASE_URL}${project.image}` : `${import.meta.env.BASE_URL}images/placeholder.png`}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded mb-4"
                    onError={(e) => {
                      e.currentTarget.src = `${import.meta.env.BASE_URL}images/placeholder.png`;
                    }}
                  />
                  <h2 className="text-xl font-bold text-accent-400 mb-1">{project.title}</h2>
                  <p className="text-primary-300 mb-2 font-semibold">{project.subtitle}</p>
                  <p className="text-primary-400 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex-1" />
                  <Link to={`/projects/${project.id}`} className="btn-primary mt-2 self-start">Read More</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-primary-400 text-lg">
                No projects found matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="mt-4 btn-secondary"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects 