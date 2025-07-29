import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Header({ darkMode, setDarkMode, activeSection, textEnter, textLeave }) {
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];
  
  return (
    <header className={`fixed w-full z-20 ${darkMode ? 'bg-gray-900/90' : 'bg-white/95'} backdrop-blur-lg shadow-xs`}>
      <motion.div 
        className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo with subtle floating animation */}
        <motion.a 
          href="#home"
          className="flex items-center text-2xl font-bold"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <motion.span 
            className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
            animate={{
              textShadow: darkMode ? '0 0 8px rgba(96, 165, 250, 0.6)' : '0 0 8px rgba(37, 99, 235, 0.4)'
            }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          >
            Dev
          </motion.span>
          <span className={`${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Portfolio</span>
        </motion.a>
        
        {/* Navigation with smooth hover effects */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className={`capitalize px-4 py-2 rounded-lg transition-all duration-200 ${
                darkMode 
                  ? activeSection === item 
                    ? 'text-blue-400 bg-gray-800/50' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                  : activeSection === item 
                    ? 'text-blue-600 bg-gray-100' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.1 * index,
                ease: "backOut"
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        
        {/* Action buttons with glow effect */}
        <div className="flex items-center space-x-3">
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode 
                ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            whileHover={{ 
              scale: 1.1,
              rotate: darkMode ? 20 : -20,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: darkMode 
                ? '0 0 10px rgba(234, 179, 8, 0.3)' 
                : '0 0 10px rgba(55, 65, 81, 0.2)'
            }}
            transition={{ duration: 0.5 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>
          
          <motion.a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`p-2 rounded-full ${
              darkMode 
                ? 'bg-gray-800 text-gray-100 hover:bg-gray-700' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            whileHover={{ 
              scale: 1.1,
              y: -2,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: darkMode 
                ? '0 0 10px rgba(156, 163, 175, 0.2)' 
                : '0 0 10px rgba(55, 65, 81, 0.1)'
            }}
            transition={{ duration: 0.5 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <FiGithub size={20} />
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
}