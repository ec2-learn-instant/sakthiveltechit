"use client";
import { motion } from "framer-motion";

export default function AchievementsCard() {
  const achievements = [
    "Contributed to scaling a product generating over $100K ARR through backend innovation & reliability.",
    "Engineered a custom CRM dashboard enhancing operational efficiency for DesignQube.",
    "Automated workflows at DesignQube, improving productivity & project turnaround time.",
    "Designed and implemented a distributed architecture with RabbitMQ for high-volume event processing."
  ];

  return (
    <div className="mt-10">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold">Notable Achievements</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Key achievements that shaped my professional journey
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


      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6 pt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ul className="space-y-5 text-gray-700 dark:text-gray-300">
          {achievements.map((item, index) => (
            <motion.li
              key={index}
              className="flex gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-pink-400 text-xl">★</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
