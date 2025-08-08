import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { Typewriter } from './TypeWrite.jsx';
import { ProfilePicCard } from './ProfilePicCard.jsx';
import { Typewriter2 } from './TypeWrite2.jsx';

export default function Hero({ darkMode, textEnter, textLeave }) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-14 sm:pt-16 justify-center w-full px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-16 py-6 md:py-10">
        
        <motion.div
          className="w-full md:w-1/2 order-2 md:order-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <ProfilePicCard />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-3 whitespace-nowrap mt-10"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Hi, I'm <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Ayush.</span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-5 min-h-[2rem] sm:min-h-[2.5rem] flex flex-wrap justify-center md:justify-start items-center gap-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            {/* <p className="whitespace-nowrap">I'm a</p> */}
            <Typewriter2 />
          </motion.h2>

          <motion.div
            className="flex sm:flex-nowrap gap-4 items-center justify-center md:justify-start lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              whileHover={{ y: -2 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Contact Me
            </motion.a>

            <motion.a
              href="#projects"
              className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              whileHover={{ y: -2 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              View Work
            </motion.a>
          </motion.div>
          
          <motion.div
            className="flex justify-center md:justify-start mt-4 md:mt-6 space-x-2 sm:space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: <FiGithub size={16} className="sm:w-5 sm:h-5" />, url: "https://github.com" },
              { icon: <FiTwitter size={16} className="sm:w-5 sm:h-5" />, url: "https://twitter.com" },
              { icon: <FiLinkedin size={16} className="sm:w-5 sm:h-5" />, url: "https://linkedin.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 sm:p-2 rounded-full ${darkMode ? 'bg-gray-800 text-gray-100 hover:text-blue-400' : 'bg-gray-200 text-gray-700 hover:text-blue-600'}`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}