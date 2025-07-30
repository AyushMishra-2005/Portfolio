import { motion } from 'framer-motion';
import { FiDownload, FiCode, FiCpu, FiDatabase, FiBook } from 'react-icons/fi';

export default function About({ darkMode }) {
  return (
    <section id="about" className={`py-24`}>
      <div className="container mx-auto w-full px-6">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Me</span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-2/5 flex justify-between"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`w-80 h-80 rounded-lg overflow-hidden shadow-xl ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-2`}>
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="About" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Aspiring <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>AI/ML Engineer</span>
            </motion.h3>
            
            <motion.p 
              className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I'm currently pursuing my BTech in Computer Science with specialization in Artificial Intelligence and Machine Learning at VIT-AP University. Passionate about building intelligent systems, I combine my academic knowledge with hands-on coding experience through personal projects and coursework.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <h4 className="font-bold text-xl mb-4 flex items-center">
                  <FiBook className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  Education
                </h4>
                <ul className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-start">
                    <span className={`inline-block w-3 h-3 rounded-full mt-1.5 mr-3 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                    <div>
                      <h5 className="font-semibold">BTech in Computer Science (AI/ML)</h5>
                      <p className="text-sm opacity-80">VIT-AP University • 2023-2027</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-3 h-3 rounded-full mt-1.5 mr-3 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                    <div>
                      <h5 className="font-semibold">Higher Secondary Education</h5>
                      <p className="text-sm opacity-80">SSVM Berhampur • 2020-2022</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-xl mb-4 flex items-center">
                  <FiCode className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  Skills & Interests
                </h4>
                <ul className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-start">
                    <span className={`inline-block w-3 h-3 rounded-full mt-1.5 mr-3 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                    <div>
                      <h5 className="font-semibold">Technical Skills</h5>
                      <p className="text-sm opacity-80">Python, JavaScript, React, TensorFlow, Machine Learning</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-3 h-3 rounded-full mt-1.5 mr-3 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                    <div>
                      <h5 className="font-semibold">Academic Projects</h5>
                      <p className="text-sm opacity-80">Machine Learning models, Web Development projects</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="#" 
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white shadow-lg`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV
                <FiDownload className="ml-2" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}