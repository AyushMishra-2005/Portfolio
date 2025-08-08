import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import TalkzillaPic from '../assets/TalkzillaPic.png'
import PrepversePic from '../assets/PrepversePic.png'
import WanderlustPic from '../assets/WanderLustPic.png'

export default function Projects({ darkMode, textEnter, textLeave }) {
  const projects = [
    {
      id: 1,
      title: "Prepverse.AI",
      description: "AI-powered interview platform with smart Q&A, resume building, face detection, and ATS-based resume scoring.",
      tags: ["React","Gemini API","Node.js", "MongoDB", "Flask"],
      image: `${PrepversePic}`,
      github: "https://github.com/AyushMishra-2005/Prepverse.AI",
      live: "https://prepverse-ai.onrender.com"
    },
    {
      id: 2,
      title: "Talkzilla",
      description: "All-in-one communication platform with chat, voice/video calling, group meetings, and secure file sharing for teams.",
      tags: ["React", "Agora", "Socket.io", "MongoDB"],
      image: `${TalkzillaPic}`,
      github: "https://github.com/AyushMishra-2005/Talkzilla",
      live: "https://talkzilla-frontend.onrender.com/"
    },
    {
      id: 3,
      title: "WanderLust",
      description: "Travel platform for exploring destinations, booking hotels, and navigating with integrated map support.",
      tags: ["EJS", "Node.js", "MongoDB"],
      image: `${WanderlustPic}`,
      github: "https://github.com/AyushMishra-2005/WanderLust",
      live: "#"
    }
  ];

  return (
    <section id="projects" className={`py-24`}>
      <div className="container mx-auto w-full px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Projects</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Here are some of my recent projects built with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl hover:shadow-2xl`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02
              }}
            >
              <div className="relative h-60 overflow-hidden perspective-[1000px]">
                <motion.div
                  className="w-full h-full relative"
                  initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
                  whileHover={{
                    rotateX: -5,
                    rotateY: 5,
                    scale: 1.05,
                    transition: { duration: 0.5, ease: 'easeInOut' }
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-gray-900/80' : 'from-white/10'} via-transparent to-transparent`} />

                  <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-2xl p-3 rounded-full backdrop-blur-md hover:scale-110 transition-transform ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-2xl p-3 rounded-full backdrop-blur-md hover:scale-110 transition-transform ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}`}
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </motion.div>
              </div>


              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-600'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className={`inline-flex items-center px-8 py-3.5 rounded-xl font-medium transition-all ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white shadow-lg hover:shadow-xl`}
            whileHover={{
              y: -3,
              scale: 1.02
            }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}