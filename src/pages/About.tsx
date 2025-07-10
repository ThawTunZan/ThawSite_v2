import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub, FaChevronDown, FaChevronUp, FaBriefcase, FaGraduationCap } from 'react-icons/fa'

interface ContactForm {
  name: string
  email: string
  message: string
}

interface WorkExperience {
  id: number
  title: string
  company: string
  duration: string
  location: string
  summary: string
  description: string
  achievements: string[]
  technologies?: string[]
}

const WorkExperienceTimeline = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const workExperiences: WorkExperience[] = [
    {
      id: 1,
      title: "Software Engineering Intern @ Govtech",
      company: "",
      duration: "May 2024 – Dec 2024",
      location: "",
      summary: "Developed APIs, backend tools, and documentation for a hardware-integrated dashboard system.",
      description: "Worked on integrating data from external hardware (e.g., Automated AI coffee machine) into a frontend dashboard using custom JavaScript APIs. Integrated with Apache Camel for routing and messaging, and used Postman, Java, and Apache Camel for development and testing. Queried and transformed database records using Python (MSSQL) for accurate frontend display. Built and deployed backend server tools for server account management using shell scripting in a Linux environment. Authored developer documentation.",
      achievements: [
        "Developed custom APIs using JavaScript to integrate data from external hardware into a frontend dashboard. Integrated with Apache Camel for routing and messaging (Postman, Java, Apache Camel)",
        "Queried and transformed database records into structured formats for accurate frontend display using Python (MSSQL)",
        "Built and deployed backend server tools to manage server accounts using shell scripting in a Linux environment",
        "Documentation for developer manual"
      ],
      technologies: ["JavaScript", "Python", "MSSQL", "Shell Scripting", "Linux", "Postman", "Java", "Apache Camel"]
    },
    {
      id: 2,
      title: "NUS Teaching Assistant @ NUS",
      company: "",
      duration: "April 2024 – Aug 2024",
      location: "",
      summary: "Teaching Assistant and Advisor for NUS Software Engineering project (Orbital).",
      description: "Served as a Teaching Assistant and Advisor for the NUS Software Engineering project called Orbital. Taught and advised 12 teams, each consisting of two members, and was nominated for the Advisor award.",
      achievements: [
        "Teaching Assistant and Advisor for a NUS Software Engineering project called Orbital",
        "Taught and advised 12 teams, each consisting of two members",
        "Nominated for Advisor award"
      ],
      technologies: []
    }
  ]

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-600"></div>
      
      <div className="space-y-8">
        {workExperiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-6 w-4 h-4 bg-accent-500 rounded-full border-4 border-primary-800 z-10"></div>
            
            {/* Content */}
            <div className="ml-16">
              <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => toggleExpanded(experience.id)}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <FaBriefcase className="text-accent-400" size={16} />
                      <h3 className="text-lg font-semibold text-primary-100">
                        {experience.title}
                      </h3>
                    </div>
                    {experience.company && <p className="text-accent-400 font-medium mb-1">{experience.company}</p>}
                    <div className="flex items-center gap-4 text-sm text-primary-400">
                      <span>{experience.duration}</span>
                      {experience.location && <><span>•</span><span>{experience.location}</span></>}
                    </div>
                  </div>
                  <button className="text-primary-400 hover:text-accent-400 transition-colors">
                    {expandedId === experience.id ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                  </button>
                </div>

                {/* Summary */}
                <p className="text-primary-300 text-sm mb-4">{experience.summary}</p>

                {/* Expanded Details */}
                {expandedId === experience.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-primary-700 pt-4"
                  >
                    {/* Description */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-accent-400 mb-2">Description</h4>
                      <p className="text-primary-300 text-sm leading-relaxed">{experience.description}</p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-accent-400 mb-2">Key Roles</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-primary-300 text-sm flex items-start gap-2">
                            <span className="text-accent-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {experience.technologies && experience.technologies.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-accent-400 mb-2">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-primary-700 text-primary-300 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

interface Education {
  id: number
  institution: string
  degree: string
  duration: string
  location: string
  summary: string
  description: string
  achievements: string[]
  gpa?: string
  relevantCourses?: string[]
}

const EducationTimeline = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const educationHistory: Education[] = [
    {
      id: 1,
      institution: "National University of Singapore (NUS)",
      degree: "Computer Engineering with minor in Physics",
      duration: "2022 - 2026",
      location: "Singapore",
      summary: "Pursuing a comprehensive engineering education with focus on hardware-software integration and physics applications.",
      description: "Currently in my third year of Computer Engineering, specializing in embedded systems and digital design. The program combines theoretical knowledge with practical applications, preparing me for careers in both hardware and software development.",
      achievements: [
        "Varsity player for NUS Esports (LoL and Super Smash Bros)",
        "Member of International Relations, College of Design and Engineering Club",
        "Completed core modules in Digital Design, Programming, and Physics",
        "Participated in various hackathons and engineering competitions"
      ],
      gpa: "4.16/5.0",
      relevantCourses: ["Digital Design", "Computer Programming", "Physics", "Mathematics", "Data Structures"]
    },
    {
      id: 2,
      institution: "Eunior JC",
      degree: "PCMG (Physics, Chemistry, Math, Geography)",
      duration: "2018 - 2019",
      location: "Singapore",
      summary: "Completed pre-university education with focus on science and mathematics.",
      description: "Studied a combination of Physics, Chemistry, Mathematics, and Geography, developing strong analytical and problem-solving skills. Participated in various extracurricular activities and leadership roles.",
      achievements: [
        "Secretary, Environmental Club",
        "Developed strong foundation in scientific principles",
        "Enhanced analytical and critical thinking skills",
        "Participated in environmental awareness campaigns"
      ],
      relevantCourses: ["Physics", "Chemistry", "Mathematics", "Geography"]
    }
  ]

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-600"></div>
      
      <div className="space-y-8">
        {educationHistory.map((education, index) => (
          <motion.div
            key={education.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-6 w-4 h-4 bg-accent-500 rounded-full border-4 border-primary-800 z-10"></div>
            
            {/* Content */}
            <div className="ml-16">
              <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => toggleExpanded(education.id)}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <FaGraduationCap className="text-accent-400" size={16} />
                      <h3 className="text-lg font-semibold text-primary-100">
                        {education.institution}
                      </h3>
                    </div>
                    <p className="text-accent-400 font-medium mb-1">{education.degree}</p>
                    <div className="flex items-center gap-4 text-sm text-primary-400">
                      <span>{education.duration}</span>
                      <span>•</span>
                      <span>{education.location}</span>
                      {education.gpa && (
                        <>
                          <span>•</span>
                          <span>GPA: {education.gpa}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <button className="text-primary-400 hover:text-accent-400 transition-colors">
                    {expandedId === education.id ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                  </button>
                </div>

                {/* Summary */}
                <p className="text-primary-300 text-sm mb-4">{education.summary}</p>

                {/* Expanded Details */}
                {expandedId === education.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-primary-700 pt-4"
                  >
                    {/* Description */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-accent-400 mb-2">Description</h4>
                      <p className="text-primary-300 text-sm leading-relaxed">{education.description}</p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-accent-400 mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {education.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-primary-300 text-sm flex items-start gap-2">
                            <span className="text-accent-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Courses */}
                    {education.relevantCourses && (
                      <div>
                        <h4 className="text-sm font-semibold text-accent-400 mb-2">Relevant Courses</h4>
                        <div className="flex flex-wrap gap-2">
                          {education.relevantCourses.map((course, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-primary-700 text-primary-300 text-xs rounded-full"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const About = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>()

  const onSubmit = (data: ContactForm) => {
    // Handle form submission (you can integrate with a service like Formspree or your own backend)
    console.log('Form submitted:', data)
    // For now, just show an alert
    alert('Thank you for your message! I will get back to you soon!')
    reset()
  }

  return (
    <div className="pt-16">
      <Helmet>
        <title>About - Thaw Tun Zan</title>
        <meta name="description" content="Learn more about Thaw Tun Zan - Computer Engineering student and developer" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h1>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              Get to know me better - my background, interests, and what drives me in the world of technology.
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          >
            {/* Profile Image */}
            <div className="text-center lg:text-left">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-accent-500 shadow-2xl mb-6">
                <img
                  src="images/me.jpg"
                  alt="Thaw Tun Zan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/256x256/3B82F6/FFFFFF?text=TT'
                  }}
                />
              </div>
            </div>

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-accent-400">Hello, I'm Thaw!</h2>
              <p className="text-primary-300 mb-6 leading-relaxed">
                I'm a second-year Computer Engineering student at the National University of Singapore (NUS) 
                with a minor in Physics. I'm passionate about bridging the gap between hardware and software, 
                creating innovative solutions that make a real impact.
              </p>
              <p className="text-primary-300 mb-6 leading-relaxed">
                When I'm not coding or working on projects, you can find me playing video games, 
                watching horror movies, or playing badminton. I believe in continuous learning and 
                pushing the boundaries of what's possible with technology.
              </p>
              
              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-800 rounded-lg">
                  <div className="text-2xl font-bold text-accent-400">3rd</div>
                  <div className="text-sm text-primary-400">Year Student</div>
                </div>
                <div className="text-center p-4 bg-primary-800 rounded-lg">
                  <div className="text-2xl font-bold text-accent-400">5+</div>
                  <div className="text-sm text-primary-400">Projects</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-accent-400">Education</h2>
              <EducationTimeline />
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-accent-400">Work Experience</h2>
              <WorkExperienceTimeline />
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Get In Touch
            </h2>
            <p className="text-lg text-primary-300">
              I'm always open to new opportunities and collaborations. Let's connect!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-300 mb-2">
                    Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-primary-700 border border-primary-600 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-300 mb-2">
                    Email
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-primary-700 border border-primary-600 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-300 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-primary-700 border border-primary-600 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:border-accent-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent-400">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-accent-400" />
                    <a href="mailto:thawtunzan@gmail.com" className="text-primary-300 hover:text-accent-400 transition-colors">
                      thawtunzan@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-accent-400" />
                    <a href="tel:+6594572153" className="text-primary-300 hover:text-accent-400 transition-colors">
                      (+65) 9457 2153
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-accent-400" />
                    <span className="text-primary-300">Singapore</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent-400">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://sg.linkedin.com/in/thaw-tun-zan-b25370205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-300 hover:text-accent-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/thawo_0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-300 hover:text-accent-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://github.com/ThawTunZan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-300 hover:text-accent-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 