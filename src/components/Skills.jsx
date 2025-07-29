import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiLayers, FiTrendingUp, FiUsers, FiMessageSquare, FiClock, FiZap } from 'react-icons/fi';

export default function Skills({ darkMode }) {
  const technicalSkills = [
    { name: "JavaScript", level: 90, icon: <FiCode /> },
    { name: "React", level: 85, icon: <FiLayers /> },
    { name: "Node.js", level: 80, icon: <FiCpu /> },
    { name: "MongoDB, SQL (Databases)", level: 75, icon: <FiDatabase /> },
    { name: "Tailwind CSS", level: 85, icon: <FiLayers /> },
    { name: "Python", level: 65, icon: <FiCode /> },
    { name: "JAVA", level: 75, icon: <FiCpu /> }
  ];

  const professionalSkills = [
    { title: "Communication", icon: <FiMessageSquare />, desc: "Clear and effective communication with teams and clients" },
    { title: "Teamwork", icon: <FiUsers />, desc: "Collaborative approach to problem solving" },
    { title: "Problem Solving", icon: <FiTrendingUp />, desc: "Analytical thinking to find optimal solutions" },
    { title: "Creativity", icon: <FiLayers />, desc: "Innovative approach to design and development" },
    { title: "Time Management", icon: <FiClock />, desc: "Efficient workflow and deadline adherence" },
    { title: "Adaptability", icon: <FiZap />, desc: "Quick learner of new technologies and methodologies" }
  ];

  return (
    <section id="skills" className={`py-24`}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Skills</span> & Expertise
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A combination of technical proficiency and professional skills that drive successful projects
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}
          >
            <div className="flex items-center mb-8">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mr-4`}>
                <FiCode className={`text-2xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
            
            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {skill.icon}
                      </span>
                      <span className="font-medium text-lg">{skill.name}</span>
                    </div>
                    <span className={`font-mono ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`w-full h-3 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <motion.div 
                      className={`h-full rounded-full ${darkMode ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-blue-500 to-blue-700'}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1.2, 
                        delay: index * 0.1,
                        type: "spring",
                        damping: 10
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-8">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mr-4`}>
                <FiUsers className={`text-2xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <h3 className="text-2xl font-bold">Professional Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <motion.div 
                  key={skill.title}
                  className={`p-6 rounded-xl transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                  whileHover={{ 
                    y: -8,
                    boxShadow: darkMode ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  <div className={`p-3 rounded-lg inline-flex ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'} mb-4`}>
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-xl mb-2">{skill.title}</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`absolute right-20 top-1/3 w-60 h-60 rounded-full blur-[20rem] opacity-30 -z-10 ${darkMode ? 'bg-blue-600' : 'bg-blue-400'}`}
        />
      </div>
    </section>
  );
}