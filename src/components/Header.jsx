import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSun,
  FiMoon,
  FiGithub,
  FiHome,
  FiUser,
  FiCode,
  FiLayers,
  FiMail,
  FiMenu,
  FiX
} from 'react-icons/fi';

export default function Header({ darkMode, setDarkMode, activeSection, textEnter, textLeave }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: <FiHome size={16} /> },
    { id: 'about', icon: <FiUser size={16} /> },
    { id: 'skills', icon: <FiCode size={16} /> },
    { id: 'projects', icon: <FiLayers size={16} /> },
    { id: 'contact', icon: <FiMail size={16} /> }
  ];

  return (
    <header className={`fixed w-[100vw] z-50 mt-4 flex justify-center items-center cursor-pointer`}>
      <motion.div
        className={`container mx-auto px-6 sm:px-8 py-4 flex justify-between items-center rounded-full shadow-lg w-[70vw] lg:w-[65vw] ${darkMode ? 'bg-gray-900/90' : 'bg-white/95'} backdrop-blur-lg`}
        style={{
          marginLeft: '1rem',
          marginRight: '1.8rem',
          border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: darkMode
            ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
            : '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
        }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center text-xl font-bold"
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
              textShadow: darkMode
                ? '0 0 12px rgba(96, 165, 250, 0.8)'
                : '0 0 12px rgba(37, 99, 235, 0.6)'
            }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          >
            Dev
          </motion.span>
          <motion.span
            className={`${darkMode ? 'text-gray-100' : 'text-gray-800'} ml-1`}
            whileHover={{
              x: [0, 2, 0, -2, 0],
              transition: { duration: 0.6 }
            }}
          >
            Portfolio
          </motion.span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: "backOut"
              }}
              whileHover={{
                y: -3,
                transition: { duration: 0.3 }
              }}
            >
              <motion.a
                href={`#${item.id}`}
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full`}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <motion.div
                  animate={{
                    color: activeSection === item.id
                      ? darkMode
                        ? '#60a5fa'
                        : '#2563eb'
                      : darkMode
                        ? '#d1d5db'
                        : '#4b5563',
                    scale: activeSection === item.id ? 1.15 : 1
                  }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  {item.icon}
                </motion.div>
              </motion.a>

              {activeSection === item.id && (
                <>
                  <motion.div
                    className={`absolute inset-0 rounded-full z-0 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100/50'}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      boxShadow: darkMode
                        ? '0 0 15px rgba(96, 165, 250, 0.5)'
                        : '0 0 15px rgba(37, 99, 235, 0.4)'
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 25
                    }}
                  />
                  <motion.div
                    className={`absolute inset-0 rounded-full border z-0 ${darkMode ? 'border-blue-400/40' : 'border-blue-500/40'}`}
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{
                      scale: 1.2,
                      opacity: 1,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 25,
                      delay: 0.15
                    }}
                  />
                </>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-2">
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full`}
            whileHover={{
              scale: 1.1,
              rotate: darkMode ? 20 : -20,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: darkMode
                ? '0 0 10px rgba(234, 179, 8, 0.4)'
                : '0 0 10px rgba(55, 65, 81, 0.3)'
            }}
            transition={{ duration: 0.5 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button>

          <motion.a
            href="https://github.com/AyushMishra-2005"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full`}
            whileHover={{
              scale: 1.1,
              y: -2,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: darkMode
                ? '0 0 10px rgba(156, 163, 175, 0.3)'
                : '0 0 10px rgba(55, 65, 81, 0.2)'
            }}
            transition={{ duration: 0.5 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <FiGithub size={18} />
          </motion.a>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-[90px] w-[80vw] rounded-xl p-4 z-40 backdrop-blur-md ${darkMode ? 'bg-gray-900/95 text-white' : 'bg-white/95 text-black'} shadow-xl cursor-pointer`}
          >
            <div className="flex flex-col items-center gap-4 cursor-pointer">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="capitalize">{item.id}</span>
                </a>
              ))}

              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 py-2 cursor-pointer"
              >
                {darkMode ? <FiSun /> : <FiMoon />}
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>

              <a
                href="https://github.com/AyushMishra-2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiGithub />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
