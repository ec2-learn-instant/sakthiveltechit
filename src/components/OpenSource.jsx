import React from "react";

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
  return (
    <section className="bg-gray-50" id="libraries">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Open-Source Libraries</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Reusable and production-ready UI components.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraries.map((lib, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-lg text-gray-800 dark:text-gray-200 font-semibold">{lib.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{lib.description}</p>

              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {lib.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full"
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
                  className="text-blue-600 hover:underline text-sm"
                >
                  GitHub →
                </a>
                <a
                  href={lib.npm}
                  target="_blank"
                  className="text-blue-600 hover:underline text-sm"
                >
                  NPM →
                </a>
              </div>

              {/* Install commands */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-gray-500 mb-1">NPM:</p>
                <code className="block bg-gray-100 p-2 rounded text-xs overflow-x-auto">
                  {lib.installNpm}
                </code>

                <p className="text-xs font-semibold text-gray-500 mt-3 mb-1">
                  Yarn:
                </p>
                <code className="block bg-gray-100 p-2 rounded text-xs overflow-x-auto">
                  {lib.installYarn}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
