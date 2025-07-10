import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa'
import HeroSection from '../components/HeroSection'
import FeaturedProjects from '../components/FeaturedProjects'

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Welcome to My Portfolio
            </h2>
            <p className="text-lg text-primary-300 mb-8 leading-relaxed">
              I'm a Year 2 Computer Engineering student at NUS with a minor in Physics. 
              I'm passionate about embedded systems, game development, and creating 
              innovative solutions that bridge hardware and software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="btn-primary inline-flex items-center justify-center">
                View My Projects
                <FaArrowDown className="ml-2" />
              </Link>
              <Link to="/about" className="btn-secondary inline-flex items-center justify-center">
                Learn More About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Skills Section */}
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
              Technical Skills
            </h2>
            <p className="text-lg text-primary-300">
              Here are some of the technologies and skills I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { category: 'Hardware', skills: ['FPGA', 'Arduino', 'LiDAR', 'UART'] },
              { category: 'Software', skills: ['Unity', 'C#', 'JavaScript', 'React'] },
              { category: 'Web Dev', skills: ['HTML/CSS', 'TypeScript', 'Tailwind', 'Node.js'] },
              { category: 'Tools', skills: ['Git', 'VS Code', 'Figma', 'Postman'] },
            ].map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <h3 className="text-lg font-semibold mb-4 text-accent-400">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill} className="text-primary-300 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Let's Connect!
            </h2>
            <p className="text-lg text-primary-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together or just say hello!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://sg.linkedin.com/in/thaw-tun-zan-b25370205"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                <FaLinkedin className="mr-2" />
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/ThawTunZan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <FaGithub className="mr-2" />
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 