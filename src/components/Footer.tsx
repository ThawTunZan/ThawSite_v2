import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://sg.linkedin.com/in/thaw-tun-zan-b25370205', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/thawo_0', label: 'Instagram' },
    { icon: FaGithub, href: 'https://github.com/ThawTunZan', label: 'GitHub' },
  ]

  return (
    <footer className="bg-primary-800 border-t border-primary-700">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-400">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-primary-400" />
                <a href="mailto:thawtunzan@gmail.com" className="text-primary-300 hover:text-accent-400 transition-colors">
                  thawtunzan@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-primary-400" />
                <a href="tel:+6594572153" className="text-primary-300 hover:text-accent-400 transition-colors">
                  (+65) 9457 2153
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/modules" className="text-primary-300 hover:text-accent-400 transition-colors">
                  Modules
                </a>
              </li>
              <li>
                <a href="/about" className="text-primary-300 hover:text-accent-400 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-400">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-accent-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-400">
            © 2024 Thaw Tun Zan. All rights reserved.
          </p>
          <p className="text-primary-500 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 