import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export function Typewriter() {
  const sentences = [
    ["Full-Stack", "Developer."],
    ["AI/ML", "Enthusiast."],
    ["Tech", "Explorer."]
  ];

  const colorPalette = [
    "text-blue-900 dark:text-blue-500",
    "text-emerald-900 dark:text-emerald-500",
    "text-amber-900 dark:text-amber-500",
    "text-rose-900 dark:text-rose-500",
    "text-violet-900 dark:text-violet-500"
  ];

  const [displayText, setDisplayText] = useState([]);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const cursorOpacity = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorOpacity = useTransform(cursorOpacity, [0, 1], [0.3, 1]);

  useEffect(() => {
    const cursorAnimation = animate(cursorOpacity, [0, 1, 0], {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    });

    const bounceAnimation = animate(cursorY, [0, -3, 0], {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    });

    return () => {
      cursorAnimation.stop();
      bounceAnimation.stop();
    };
  }, []);

  useEffect(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    const currentSentence = sentences[sentenceIndex];
    const currentWord = currentSentence[wordIndex];
    const currentColor = colorPalette[wordIndex % colorPalette.length];

    const typeSpeed = 80; 
    const deleteSpeed = 60;
    const pauseDuration = 1500; 

    let timeout;

    if (!deleting) {
      if (wordIndex < currentSentence.length) {
        if (charIndex <= currentWord.length) {
          timeout = setTimeout(() => {
            const newDisplay = [...displayText];
            newDisplay[wordIndex] = {
              text: currentWord.slice(0, charIndex),
              color: currentColor
            };
            setDisplayText(newDisplay);
            setCharIndex(prev => prev + 1);
            setIsAnimating(false);
          }, typeSpeed);
        } else {
          setTimeout(() => {
            setWordIndex(prev => prev + 1);
            setCharIndex(0);
            setIsAnimating(false);
          }, 150); 
        }
      } else {
        timeout = setTimeout(() => {
          setDeleting(true);
          setWordIndex(currentSentence.length - 1);
          setCharIndex(currentSentence[currentSentence.length - 1].length);
          setIsAnimating(false);
        }, pauseDuration);
      }
    } else {
      if (wordIndex >= 0) {
        if (charIndex >= 0) {
          timeout = setTimeout(() => {
            const newDisplay = [...displayText];
            newDisplay[wordIndex] = {
              text: currentSentence[wordIndex].slice(0, charIndex),
              color: colorPalette[wordIndex % colorPalette.length]
            };
            setDisplayText(newDisplay);
            setCharIndex(prev => prev - 1);
            setIsAnimating(false);
          }, deleteSpeed);
        } else {
          const newDisplay = [...displayText];
          newDisplay.pop();
          setDisplayText(newDisplay);
          
          setTimeout(() => {
            setWordIndex(prev => prev - 1);
            if (wordIndex > 0) {
              setCharIndex(currentSentence[wordIndex - 1].length);
            }
            setIsAnimating(false);
          }, 120); 
        }
      }
      if (wordIndex < 0) {
        setTimeout(() => {
          setDeleting(false);
          setSentenceIndex(prev => (prev + 1) % sentences.length);
          setWordIndex(0);
          setCharIndex(0);
          setDisplayText([]);
          setIsAnimating(false);
        }, 300); 
      }
    }

    return () => {
      clearTimeout(timeout);
      setIsAnimating(false);
    };
  }, [charIndex, deleting, sentenceIndex, wordIndex, displayText]);

  return (
    <div className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium min-h-[3rem] flex flex-wrap justify-center items-center">
      {displayText.map((word, i) => (
        <motion.span
          key={i}
          className={`${word.color} mr-2`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              type: "spring",
              damping: 12,
              stiffness: 100
            }
          }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.4 }}
        >
          {word.text}
        </motion.span>
      ))}
      <motion.span
        className="text-blue-800 dark:text-blue-400 ml-1"
        style={{ 
          opacity: smoothCursorOpacity,
          y: cursorY
        }}
      >
        |
      </motion.span>
    </div>
  );
}