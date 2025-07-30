import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiDownload } from 'react-icons/fi';
import { Typewriter } from './TypeWrite.jsx';
import {ProfilePicCard} from './ProfilePicCard.jsx'

export default function Hero({ darkMode, textEnter, textLeave }) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 justify-center w-full">
      <div className="container mx-auto px-6 py-20 md:py-0 flex justify-between flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Hi, I'm <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Ayush</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6 h-12 md:h-14 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <Typewriter />
          </motion.h2>

          <motion.p
            className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build exceptional digital experiences with modern technologies.
            Focused on creating clean, efficient code and intuitive user interfaces.
          </motion.p>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className={`px-6 py-3 rounded-lg font-medium flex items-center ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              whileHover={{ y: -2 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Contact Me
            </motion.a>

            <motion.a
              href="#projects"
              className={`px-6 py-3 rounded-lg font-medium flex items-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              whileHover={{ y: -2 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              View Work
            </motion.a>
          </motion.div>

          <motion.div
            className="flex mt-8 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: <FiGithub size={24} />, url: "https://github.com" },
              { icon: <FiTwitter size={24} />, url: "https://twitter.com" },
              { icon: <FiLinkedin size={24} />, url: "https://linkedin.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-gray-100 hover:text-blue-400' : 'bg-gray-200 text-gray-700 hover:text-blue-600'}`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <ProfilePicCard/>
        </motion.div>
      </div>
    </section>
  );
}