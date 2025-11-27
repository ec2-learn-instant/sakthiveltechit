"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerList = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-6"
      >
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Building scalable, real-time, and data-driven applications across domains.
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

      {/* ------------ Project 1 ------------ */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 
                   dark:border-gray-700 p-5 sm:p-6 mt-10"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          
          {/* Text Left */}
          <motion.div variants={fadeUp} className="max-w-full">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              GetWorkfolio (SaaS)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Full Stack Engineer</p>

            <p className="text-sm italic text-gray-500 dark:text-gray-400 mt-2 max-w-full">
              Key Technologies: Figma, Bootstrap, React.js, Next.js, Context API, Apollo Client,
              Vite.js, Socket.io, Node.js, Express.js, GraphQL, JWT, OAuth, RabbitMQ, WebSocket,
              PostgreSQL (TimescaleDB), Redis, Microservice Architecture, Git, Bitbucket, Nginx,
              PM2, Prometheus, Grafana, GoAccess, AWS (EC2, S3), Hetzner
            </p>
          </motion.div>

          {/* Button Right */}
          <motion.a
            whileHover={{ x: 4 }}
            href="#"
            className="text-gray-500 dark:text-gray-300 text-sm hover:text-pink-500 
                       sm:mt-0 mt-2 whitespace-nowrap"
          >
            View Project →
          </motion.a>

        </div>

        {/* List */}
        <motion.ul
          variants={staggerList}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-3 text-gray-700 dark:text-gray-300 mt-4"
        >
          {[
            "Developed interactive admin dashboards using React, Next.js, Bootstrap, Context API, and Apollo Client.",
            "Built real-time activity visualization with Socket.io-client for improved performance.",
            "Implemented role-based dashboards for personalized productivity insights.",
            "Created reusable UI layouts and responsive components.",
            "Integrated REST & GraphQL APIs for high-frequency rendering.",
            "Engineered microservices for sessions, logs, and screenshots using Node.js & Express.",
            "Designed distributed architecture with RabbitMQ for high-volume event processing.",
            "Built scalable pipelines handling millions of events with zero data loss.",
            "Improved backend performance using DB indexing, caching, and query optimization.",
            "Ensured scalable monitoring with Prometheus & Grafana."
          ].map((item, index) => (
            <motion.li key={index} variants={listItem}>
              • {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* ------------ Project 2 ------------ */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 
                   dark:border-gray-700 p-5 sm:p-6 mt-6"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          
          {/* Text Left */}
          <motion.div variants={fadeUp}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              WiseAnalytics
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Frontend Developer</p>

            <p className="text-sm italic text-gray-500 dark:text-gray-400 mt-2 max-w-full">
              Key Technologies: Ant Design, ShadcnUI, React.js, Next.js, Redux, REST API, JWT,
              OAuth, MySQL, Power BI, Looker Studio
            </p>
          </motion.div>

          {/* Button Right */}
          <motion.a
            whileHover={{ x: 4 }}
            href="#"
            className="text-gray-500 dark:text-gray-300 text-sm hover:text-pink-500 
                       sm:mt-0 mt-2 whitespace-nowrap"
          >
            View Project →
          </motion.a>
        </div>

        <motion.ul
          variants={staggerList}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-3 text-gray-700 dark:text-gray-300 mt-4"
        >
          {[
            "Developed dashboards to visualize real-time analytics and KPIs.",
            "Built role-based dashboard views based on user permissions.",
            "Integrated dynamic data sources into interactive dashboards.",
            "Created responsive UI components for analytics and reporting.",
            "Deployed dashboards using Looker Studio and Power BI.",
            "Converted complex datasets into intuitive insights."
          ].map((item, index) => (
            <motion.li key={index} variants={listItem}>
              • {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
