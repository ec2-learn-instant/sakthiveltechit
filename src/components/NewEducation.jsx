"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="w-full mt-16 px-4 sm:px-6">

      {/* Section Title */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold">Education</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          My academic background and qualifications
        </p>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="w-full h-[2px] bg-gradient-to-r from-pink-300 via-pink-200 to-yellow-200 mt-3 mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      />

      {/* Education Card */}
      <motion.div
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 sm:p-6"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Title + Year */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">

          {/* Left Side */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              Bachelor of Information Technology
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mt-1">
              K.S.Rangasamy College of Technology, Namakkal
            </p>
          </div>

          {/* Year */}
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium sm:mt-1">
            2014 – 2018
          </p>
        </div>
      </motion.div>
    </div>
  );
}
