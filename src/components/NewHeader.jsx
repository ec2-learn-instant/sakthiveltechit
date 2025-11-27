"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillLinkedin,
  AiOutlineGlobal,
  AiFillYoutube,
  AiOutlineGithub,
} from "react-icons/ai";
import { FiMail, FiLinkedin } from "react-icons/fi";

export default function ProfileBanner() {
  return (
    <motion.div
      className="
        w-full min-h-[95vh] 
        flex flex-col items-center justify-center 
        px-4 sm:px-6 py-12 
        bg-gradient-to-r from-pink-300 via-pink-200 to-yellow-200
        text-center
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ------------------ Profile Image ------------------ */}
      <motion.img
        src="/Sakthivel-Govinthan.jpeg"
        alt="Sakthivel Govinthan"
        className="
          w-32 h-32 sm:w-40 sm:h-40 
          rounded-full border-4 border-white shadow-lg object-cover
        "
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* ------------------ Name ------------------ */}
      <motion.h1
        className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold text-gray-900"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Sakthivel Govinthan
      </motion.h1>

      {/* ------------------ Title ------------------ */}
      <motion.p
        className="text-base sm:text-lg text-gray-700 mt-2"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        viewport={{ once: true }}
      >
        Full Stack Engineer
      </motion.p>

      {/* ------------------ Social Links ------------------ */}
      <motion.div
        className="
          flex flex-col sm:flex-row 
          flex-wrap items-center justify-center 
          gap-4 sm:gap-6 mt-8 text-gray-700
        "
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        viewport={{ once: true }}
      >
        {[
          {
            icon: <AiOutlineMail size={20} />,
            label: "sakthiveltechit@gmail.com",
            href: "mailto:sakthiveltechit@gmail.com",
          },
          {
            icon: <AiOutlinePhone size={20} />,
            label: "+91-8667695017",
            href: "tel:+918667695017",
          },
          {
            icon: <AiFillLinkedin size={20} />,
            label: "linkedin.com/in/sakthivelgovinthan",
            href: "https://linkedin.com/in/sakthivelgovinthan",
          },
          {
            icon: <AiOutlineGlobal size={20} />,
            label: "sakthiveltechit.vercel.app",
            href: "https://sakthiveltechit.vercel.app",
          },
          {
            icon: <AiFillYoutube size={20} />,
            label: "youtube.com/@Ec2-Instant-Learning",
            href: "https://youtube.com/@Ec2-Instant-Learning",
          },
          {
            icon: <AiOutlineGithub size={20} />,
            label: "github.com/trackpilots",
            href: "https://github.com/trackpilots",
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            className="
              flex items-center justify-center gap-2
              text-sm sm:text-base
              hover:text-black transition
              break-all
            "
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {item.icon} {item.label}
          </motion.a>
        ))}
      </motion.div>

      {/* ------------------ Buttons ------------------ */}
      <motion.div
        className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {/* LinkedIn Button */}
        <motion.a
          href="https://www.linkedin.com/in/sakthivelgovinthan"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="
            px-5 py-2 sm:px-6 sm:py-3 
            rounded-full text-white font-medium text-sm sm:text-base
            bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
            shadow-lg shadow-purple-500/30
            hover:shadow-xl hover:shadow-purple-500/50
            transition-all duration-300
            flex items-center gap-2
          "
        >
          <FiLinkedin size={20} />
          Connect on LinkedIn
        </motion.a>

        {/* Get in Touch */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="
            px-5 py-2 sm:px-6 sm:py-3 
            rounded-full text-white font-medium text-sm sm:text-base
            bg-gray-900 hover:bg-gray-800
            shadow-lg shadow-black/30
            transition-all duration-300
            flex items-center gap-2
          "
        >
          <FiMail size={20} />
          Get in Touch
        </motion.a>
      </motion.div>

      {/* ------------------ Summary ------------------ */}
      <motion.div
        className="
          max-w-3xl sm:max-w-5xl 
          mt-8 sm:mt-10 
          bg-white/70 backdrop-blur-md 
          border border-white/40 
          rounded-2xl p-4 sm:p-6 shadow-md
        "
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
          Full Stack Engineer with 6+ years of experience architecting and
          developing scalable web applications, distributed event-driven
          systems, and real-time data dashboards for both startups and
          product-based organizations. Experienced in building robust
          microservices, optimizing backend performance, and delivering
          cloud-native solutions capable of handling large-scale workloads and
          high-frequency data streams.
        </p>
      </motion.div>

      {/* ---------- Light Gradient Scroll Icon (Web Only) ---------- */}
      <a
        href="#skills"
        className="
          hidden sm:flex
          absolute bottom-6 left-1/2 -translate-x-1/2
          w-12 h-12 
          flex items-center justify-center
          rounded-full 
          bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300
          text-gray-600 font-bold
          shadow-md shadow-pink-200/60
          hover:scale-110 transition-all duration-300
          animate-bounce
        "
      >
        ↓
      </a>
    </motion.div>
  );
}
