import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./heatmap.css";
import { motion } from "framer-motion";

export default function GitHubContributions({ darkMode }) {
  const [values, setValues] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/github-contributions")
      .then(res => res.json())
      .then(data => {
        const mapped = data.weeks.flatMap(week =>
          week.contributionDays.map(day => ({
            date: day.date,
            count: day.contributionCount
          }))
        );
        setValues(mapped);
        setTotalContributions(mapped.reduce((sum, day) => sum + day.count, 0));
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative w-[85vw] mx-auto rounded-xl`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h2 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
          GitHub Contributions
        </h2>
        <div
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            darkMode ? "bg-slate-800/50 text-gray-200" : "bg-white/70 text-gray-700"
          }`}
        >
          {totalContributions.toLocaleString()} contributions
        </div>
      </div>

      {/* Apply theme class dynamically */}
      <div className={`${darkMode ? "dark" : "light"} w-[85vw] mx-auto`}>
        <CalendarHeatmap
          startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
          endDate={new Date()}
          values={values}
          showWeekdayLabels={true}
          gutterSize={3}
          classForValue={(value) => {
            if (!value) return "color-empty";
            if (value.count < 2) return "color-scale-1";
            if (value.count < 4) return "color-scale-2";
            if (value.count < 6) return "color-scale-3";
            return "color-scale-4";
          }}
        />
      </div>

      {/* Legend */}
      <div className={`flex items-center justify-end mt-3 text-xs ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        <span className="mr-2">Less</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-sm color-scale-1" />
          <div className="w-3 h-3 rounded-sm color-scale-2" />
          <div className="w-3 h-3 rounded-sm color-scale-3" />
          <div className="w-3 h-3 rounded-sm color-scale-4" />
        </div>
        <span className="ml-2">More</span>
      </div>
    </motion.div>
  );
}
