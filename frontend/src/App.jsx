import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import GitHubContributions from './components/GitHubContributions';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const mouseMove = (e) => {
      const offset = getCursorOffset(cursorVariant);
      mouseX.set(e.clientX - offset);
      mouseY.set(e.clientY - offset);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, [cursorVariant, mouseX, mouseY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCursorOffset = (variant) => {
    if (variant === 'text') return 75;
    if (variant === 'click') return 25;
    return 16;
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const clickEnter = () => setCursorVariant("click");
  const clickLeave = () => setCursorVariant("default");

  const cursorStyle = {
    width: cursorVariant === 'text' ? 150 : cursorVariant === 'click' ? 50 : 32,
    height: cursorVariant === 'text' ? 150 : cursorVariant === 'click' ? 50 : 32,
    borderRadius: '9999px',
    backgroundColor:
      cursorVariant === 'text'
        ? darkMode
          ? 'rgb(96 165 250)'
          : 'rgb(37 99 235)'
        : cursorVariant === 'click'
          ? darkMode
            ? 'rgb(236 72 153)'
            : 'rgb(219 39 119)'
          : 'rgb(59 130 246)',
    mixBlendMode: cursorVariant === 'text' ? 'difference' : 'normal',
    transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
  };

  return (
    <>
      <CustomCursor/>
      <div className={`relative min-h-screen transition-colors duration-500 ${darkMode ? 'text-gray-100' : 'text-gray-900'} w-[100vw] pr-3`}>
        <Background darkMode={darkMode} />


        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeSection={activeSection}
          textEnter={textEnter}
          textLeave={textLeave}
        />

        <main className='flex-col items-center justify-center px-5 md:px-15 lg:px-25'>
          <Hero darkMode={darkMode} textEnter={textEnter} textLeave={textLeave} />
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <GitHubContributions darkMode={darkMode}/>
          <Projects darkMode={darkMode} textEnter={textEnter} textLeave={textLeave} />
          <Contact darkMode={darkMode} />
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}
