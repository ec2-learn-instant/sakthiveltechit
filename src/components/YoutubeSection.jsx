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
  return (
    <section className="" id="youtube">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-center">YouTube Content</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-1">
            I regularly teach and upload tutorials on my YouTube channel.
          </p>
          <a
            href="https://www.youtube.com/@Ec2-Instant-Learning"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 font-semibold mt-2 mb-5 inline-block hover:underline"
          >
            🎥 Ec2 Instant Learning →
          </a>
        </div>

        {/* Playlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

          {playlists.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              
              {/* Thumbnail */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-44 object-cover"
              />

              <div className="p-6">

                {/* Title - 1 line */}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 line-clamp-1">
                  {item.title}
                </h3>

                {/* Description - 2 lines */}
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                  {item.description}
                </p>

                {/* 🎯 Differentiated Video Count Badge */}
                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full">
                  {item.count}
                </span>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Playlist link */}
                <a
                  href={item.link}
                  target="_blank"
                  className="inline-block text-blue-600 dark:text-blue-400 mt-4 text-sm font-medium hover:underline"
                >
                  View playlist →
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
