import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Track Pilots (Employee Monitoring SaaS)",
      stack: "React, Node, RabbitMQ, Microservices",
      description:
        "Real-time employee monitoring with screenshots, activity logs, and app tracking.",
    },
    {
      name: "Quickzyo (E-commerce Platform)",
      stack: "Next.js, Node.js, MongoDB",
      description:
        "Full e-commerce solution with payments, admin panel, and product management.",
    },
  ];

  return (
    <section className="scroll-mt-32" id="projects">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-bold">{proj.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {proj.stack}
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {proj.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
