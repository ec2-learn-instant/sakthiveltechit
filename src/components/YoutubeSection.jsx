"use client";
import { motion } from "framer-motion";
import React from "react";

const playlists = [
  {
    title: "React JS Basics in Tamil",
    count: "7 videos",
    link: "https://www.youtube.com/playlist?list=PL7vRi_3TNp_4J3gXibH7Gkxn91xpzpoqT",
    img: "https://i.ytimg.com/vi/2oLZ0Mxv1oU/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBZtuaVjxkRFWGGcN6pnJBYaQ6u6A",
    description: "Learn the fundamentals of React JS step-by-step in Tamil.",
    tags: ["ReactJS", "Basics"],
  },
  {
    title: "React Hooks in Tamil",
    count: "9 lessons",
    link: "https://www.youtube.com/playlist?list=PL7vRi_3TNp_6FQ-I7NVBFbQj2TCyEEEUW",
    img: "https://i.ytimg.com/vi/9ZiZ8d2s8Cg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC0aF7BC2b-yjOIenUHg6dSw3wlGg",
    description: "Master all core React Hooks with real-world examples.",
    tags: ["ReactJS", "Hooks"],
  },
  {
    title: "React Google Charts in Tamil",
    count: "1 video",
    link: "https://www.youtube.com/watch?v=5rNsVxLNLGk&list=PL7vRi_3TNp_6waTPblyc6qJi2pkE5wnHT",
    img: "https://i.ytimg.com/vi/5rNsVxLNLGk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCdUtHMv9SP5HmlbFoPTGbZMtNeqA",
    description: "A simple guide to using Google Charts in React apps.",
    tags: ["ReactJS", "Google Charts"],
  },
];

export default function YoutubeSection() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="" id="youtube">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center">YouTube Content</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-1">
            I regularly teach and upload tutorials on my YouTube channel.
          </p>
        <a
  href="https://www.youtube.com/@Ec2-Instant-Learning"
  target="_blank"
  className="mt-3 inline-block text-sm font-bold
             bg-clip-text text-transparent
             bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
             hover:underline transition-all duration-300"
>
  🎥 Ec2 Instant Learning →
</a>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full h-[2px] bg-gradient-to-r from-pink-300 via-pink-200 to-yellow-200 mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        {/* Playlist Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {playlists.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Thumbnail */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-44 object-cover"
              />

              <div className="p-6 flex flex-col h-full">
                {/* Muted Title & Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400 line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 dark:text-gray-500 text-sm mt-1 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags & Video Count */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full 
                                   bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400
                                   font-medium shadow-sm transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  
                  </div>
                </div>

                {/* Highlighted Playlist Link */}
                <a
                  href={item.link}
                  target="_blank"
                  className="mt-4 inline-block text-sm font-bold text-center
                             text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
                             px-3 py-1 rounded-full shadow-lg shadow-purple-500/40
                             hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  View Playlist →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
