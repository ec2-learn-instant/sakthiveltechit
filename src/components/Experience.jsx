import { motion, AnimatePresence } from "framer-motion";
import { LuBriefcase, LuChevronDown, LuChevronUp } from "react-icons/lu";
import { useState } from "react";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  const experiences = [
    {
      role: "Software Developer",
      company: "DesignQube Architects & Interior Designers",
      duration: "Jan 2018 - Nov 2024",
      summary:
        "Built and maintained multiple internal and client-facing applications, delivering responsive UI, scalable backend services, and optimized database operations.",
      responsibilities: [
        "Built and maintained web applications supporting business workflows and client interaction",
        "Worked closely with UI/UX teams to deliver responsive and user-friendly interfaces",
        "Implemented backend services with Node.js, Express, and MongoDB",
        "Designed SQL queries to streamline data retrieval and reporting",
        "Contributed to requirement analysis, sprint planning, and testing in Agile projects",
      ],
    },
    {
      role: "Full Stack Engineer",
      company: "GetWorkfolio (SaaS)",
      duration: "Mar 2022 – Nov 2024 (Contract)",
      summary:
        "Led full stack development for a SaaS platform, focusing on real-time features, microservices, analytics dashboards, and distributed event-driven systems.",
      responsibilities: [
        "Served as a Full Stack Engineer, improving both frontend and backend platform functionality",
        "Built scalable, responsive UI dashboards using React.js and reusable component patterns",
        "Developed reusable components for analytics, activity timelines, charts, and real-time interfaces",
        "Designed microservices for activity tracking, logs, sessions, and analytics",
        "Built distributed event pipelines using RabbitMQ for high-frequency data processing",
        "Implemented REST & GraphQL APIs for dashboards, reports, and monitoring data",
        "Optimized database performance using indexing, caching, and query tuning",
        "Integrated WebSockets for real-time updates",
        "Enhanced backend reliability with validation, structured error handling, and monitoring",
      ],
    },
    {
      role: "Data Analyst",
      company: "WiseAnalytics.io, India",
      duration: "Oct 2022 - Mar 2024 (Contract)",
      summary:
        "Transformed raw datasets into actionable insights, enabling better decision-making through analytics and clear visual reports.",
      responsibilities: [
        "Converted unprocessed data into meaningful insights through analysis and visualization",
        "Created visual dashboards to present data clearly for better stakeholder understanding",
        "Produced reports summarizing insights and recommendations for business stakeholders",
      ],
    },
  ];

  return (
    <section className="scroll-mt-32 px-4 md:px-0" id="experience">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-center">Work Experience</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-1">
          My professional journey in software engineering and technology
        </p>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          >
            {/* Accordion Header */}
            <button
              className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                {/* Icon Left */}
              <LuBriefcase className="hidden md:block text-gray-600 dark:text-gray-300 text-3xl min-w-[32px]" />


                {/* Role + Company Right */}
                <div className="text-left sm:text-left">
                  <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
                    {exp.role}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {exp.company}
                  </div>
                </div>
              </div>

              {/* Duration + Up/Down Icon */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <span className="text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap">
                  {exp.duration}
                </span>

                {openIndex === index ? (
                  <LuChevronUp className="text-xl text-gray-700 dark:text-gray-300" />
                ) : (
                  <LuChevronDown className="text-xl text-gray-700 dark:text-gray-300" />
                )}
              </div>
            </button>

            {/* Accordion Body */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4"
                >
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {exp.summary}
                  </p>

                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {exp.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
