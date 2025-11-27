"use client";
import { motion } from "framer-motion";

export default function WorkExperienceCard() {
  const workExperiences = [
    {
      year: "2018 - 2024",
      role: "Software Developer",
      company: "DesignQube Architects and Interior Designers",
      points: [
        "Engineered a custom CRM dashboard, providing end-to-end management for leads, clients, follow-ups, and workflows.",
        "Developed project management tools for task tracking and milestone monitoring.",
        "Built customer site-tracking mobile apps enabling real-time on-site updates.",
        "Integrated automated website inquiry capture into the CRM.",
        "Developed scalable backend services using Node.js, Express, SQL/NoSQL.",
        "Automated manual workflows, improving productivity drastically.",
        "Implemented secure authentication using JWT/OAuth.",
        "Digitized on-site workflows, reducing manual processes."
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">

      {/* Work Experience Header */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          My professional journey in software engineering and technology
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

      {workExperiences.map((exp, index) => (
        <motion.div
          key={index}
          className="
            bg-white dark:bg-gray-800 rounded-2xl shadow-md 
            border border-gray-100 dark:border-gray-700 
            p-5 sm:p-6 mt-6
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">

            {/* Left Content */}
            <motion.div
              className="flex-1 w-full"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Role + Year */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <span className="text-gray-500 dark:text-gray-400 font-semibold text-sm sm:text-base">
                  {exp.year}
                </span>
              </div>

              {/* Company + Link */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 mb-5">
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>

                <motion.a
                  whileHover={{ x: 4 }}
                  href="#"
                  className="text-gray-500 dark:text-gray-300 text-sm hover:text-pink-500 mt-2 sm:mt-0"
                >
                  View Company →
                </motion.a>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                {exp.points.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="text-sm sm:text-base"
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </motion.div>
      ))}
    </div>
  );
}
