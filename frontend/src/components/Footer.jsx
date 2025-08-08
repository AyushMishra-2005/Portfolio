import { motion } from 'framer-motion';

export default function Footer({ darkMode }) {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-100/50'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="text-xl font-bold">
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Dev</span>Portfolio
            </a>
          </motion.div>
          
          <motion.div 
            className={`text-center md:text-right ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            <p className="text-sm mt-1">Designed & Built with React and Tailwind CSS</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}