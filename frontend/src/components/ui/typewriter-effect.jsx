import { cn } from "../../lib/utils.js";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                key={`char-${index}`}
                className={cn(
                  `dark:text-white text-black opacity-0 hidden`,
                  word.className
                )}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn(
      "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold inline-flex items-center",
      className
    )}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-6 md:h-8 lg:h-10 bg-blue-500 ml-1",
          cursorClassName
        )}
      />
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => {
    return (
      <div className="inline-block">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block mr-3">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn(
                  `dark:text-white text-black`,
                  word.className
                )}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn(
      "flex items-center space-x-1",
      className
    )}>
      <motion.div
        className="overflow-hidden inline-block"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.5,
        }}
        viewport={{ once: true }}
      >
        <div className="text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-6 sm:h-8 md:h-10 bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};