import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function Typewriter() {
  const words = [
    {
      text: "A",
      className: "text-blue-600 dark:text-blue-400"
    },
    {
      text: "Full-Stack",
      className: "text-indigo-600 dark:text-indigo-400"
    },
    {
      text: "Developer",
      className: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <div className="flex justify-start w-full">
      <TypewriterEffectSmooth 
        words={words}
        cursorClassName="bg-blue-500 dark:bg-blue-400"
      />
    </div>
  );
}