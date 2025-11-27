"use client";
import { motion } from "framer-motion";

const libraries = [
  {
    name: "@trackpilots/searchable-select-dropdown",
    description: "A searchable dropdown with clean UI and keyboard support.",
    tags: ["React", "Dropdown"],
    github: "https://github.com/trackpilots/searchable-select-dropdown",
    npm: "https://www.npmjs.com/package/@trackpilots/searchable-select-dropdown",
    installNpm: "npm install @trackpilots/searchable-select-dropdown",
    installYarn: "yarn add @trackpilots/searchable-select-dropdown",
  },
  {
    name: "random-hex-color-generator",
    description: "Generate random hex colors instantly for UI and testing.",
    tags: ["JavaScript", "Utility"],
    github: "https://github.com/Sakthivelgovindan/random-hex-color-generator",
    npm: "https://www.npmjs.com/package/random-hex-color-generator",
    installNpm: "npm install random-hex-color-generator",
    installYarn: "yarn add random-hex-color-generator",
  },
  {
    name: "@trackpilots/date-picker",
    description: "A customizable date picker with smooth animations.",
    tags: ["React", "Calendar"],
    github: "https://github.com/trackpilots/date-picker",
    npm: "https://www.npmjs.com/package/@trackpilots/date-picker",
    installNpm: "npm install @trackpilots/date-picker",
    installYarn: "yarn add @trackpilots/date-picker",
  },
  {
    name: "@trackpilots/single-select-date-picker",
    description: "A minimal single-date selector with clean UI.",
    tags: ["React", "Minimal"],
    github: "https://github.com/trackpilots/single-select-date-picker",
    npm: "https://www.npmjs.com/package/@trackpilots/single-select-date-picker",
    installNpm: "npm install @trackpilots/single-select-date-picker",
    installYarn: "yarn add @trackpilots/single-select-date-picker",
  },
  {
    name: "@trackpilots/week-picker",
    description: "Pick entire weeks at once — perfect for scheduling apps.",
    tags: ["React", "Week Picker"],
    github: "https://github.com/trackpilots/week-picker",
    npm: "https://www.npmjs.com/package/@trackpilots/week-picker",
    installNpm: "npm install @trackpilots/week-picker",
    installYarn: "yarn add @trackpilots/week-picker",
  },
];

export default function LibrariesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="libraries" className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Open-Source Libraries
          </h2>
          <p className="text-gray-600 mt-1">
            Reusable and production-ready UI components.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-[2px] bg-gradient-to-r from-pink-300 via-pink-200 to-yellow-200 mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        {/* Libraries Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {libraries.map((lib, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition border-2 border-transparent hover:border-gradient-to-r hover:from-pink-300 hover:via-pink-200 hover:to-yellow-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {lib.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                {lib.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {lib.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-white font-medium bg-gray-600 hover:bg-gray-800 shadow-sm shadow-black/30 transition-all duration-300 flex items-center gap-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 mt-5">
                <a
                  href={lib.github}
                  target="_blank"
                  className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:underline transition-all duration-300"
                >
                  GitHub →
                </a>
                <a
                  href={lib.npm}
                  target="_blank"
                  className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:underline transition-all duration-300"
                >
                  NPM →
                </a>
              </div>

              {/* Install commands */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-gray-500 mb-1">NPM:</p>
                <code className="block text-gray-800 dark:text-gray-200 bg-gray-100 p-2 rounded text-xs overflow-x-auto">
                  {lib.installNpm}
                </code>

                <p className="text-xs font-semibold text-gray-500 mt-3 mb-1">Yarn:</p>
                <code className="block text-gray-800 dark:text-gray-200 bg-gray-100 p-2 rounded text-xs overflow-x-auto">
                  {lib.installYarn}
                </code>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
