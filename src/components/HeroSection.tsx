import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(156,146,172,0.1)_1px,_transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-accent-500 shadow-2xl">
              <img
                src="images/me.jpg"
                alt="Thaw Tun Zan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/160x160/3B82F6/FFFFFF?text=TT'
                }}
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-gradient">Thaw Tun Zan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-primary-300 mb-6"
          >
            Computer Engineering Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-primary-400 mb-8 max-w-2xl mx-auto"
          >
            Year 4 NUS Student with minor in Physics • 
            Passionate about Embedded Systems & Game Development
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center justify-center text-lg px-8 py-3"
            >
              View Projects
              <FaArrowDown className="ml-2" />
            </Link>
            <Link
              to="/about"
              className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-3"
            >
              About Me
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/ThawTunZan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-accent-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://sg.linkedin.com/in/thaw-tun-zan-b25370205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-accent-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary-400"
        >
          <FaArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection 