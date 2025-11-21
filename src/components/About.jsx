import { motion } from "framer-motion";
import { FiLinkedin, FiMail } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-32 flex justify-center items-center py-16 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 pt-20 w-full"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-16 transform left-[10%] md:left-[42%] md:-translate-x-1/2"
        >
          <img
            src="/profile.png"
            alt="Your Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
        </motion.div>

        {/* Content Wrapper */}
        <div className="mt-4 text-left md:text-center">
          {/* Name */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300">
  Sakthivel Govinthan
</h2>


          {/* Description */}
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed px-0 sm:px-8">
            Full Stack Engineer with 6+ years of experience architecting and
            developing scalable web applications, distributed event-driven
            systems, and real-time data dashboards for both startups and
            product-based organizations. Experienced in building robust
            microservices, optimizing backend performance, and delivering
            cloud-native solutions capable of handling large-scale workloads and
            high-frequency data streams.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-4">
            {/* LinkedIn Button */}
            <motion.a
              href="https://linkedin.com/in/sakthivelgovinthan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 flex items-center gap-2"
            >
              <FiLinkedin size={20} />
              Connect on LinkedIn
            </motion.a>

            {/* Contact Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-full shadow hover:bg-gray-700 dark:hover:bg-gray-600 flex items-center gap-2"
            >
              <FiMail size={20} />
              Get in Touch
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
