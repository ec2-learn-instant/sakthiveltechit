"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-32 py-10">
       <div className="text-center mb-6">
      <h2 className="text-2xl font-bold">Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-1">
        Interested in connecting? Feel free to reach out
      </p>
      </div>

      {/* ----------- BORDER WRAPPER ----------- */}
      <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 md:p-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ---------- LEFT SIDE ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Fill in the form to start a conversation.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-gray-500 mt-1" size={22} />
                <p className="text-gray-700 dark:text-gray-300">
                  Salem, Tamilnadu, India
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <FiMail className="text-gray-500 mt-1" size={22} />
                <p className="text-gray-700 dark:text-gray-500">
                  sakthiveltech@gmail.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* ---------- RIGHT SIDE (FORM) ---------- */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4"
          >
            {/* Name Input */}
            <div>
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Message Box */}
            <div>
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                rows={4}
                placeholder="Hi! Let's talk about..."
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              <FiSend size={18} />
              Send Message
            </button>
          </motion.form>
        </div>

      </div>
      {/* ----------- END BORDER WRAPPER ----------- */}
    </section>
  );
}
