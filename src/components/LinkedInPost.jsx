"use client";
import { motion } from "framer-motion";

const linkedinPosts = [
  {
    title: "A Moment That Feels Like a Dream — Trackpilots is Now Live! 💙",
    description: "Today is not just a launch. It’s a memory. A feeling. A moment we’ll hold close forever ✨.",
    img: "../linkedIn/image-1.png",
    reactions: "199",
    comments: "10",
    link: "https://www.linkedin.com/posts/sakthivelgovinthan_trackpilots-saasproduct-quickappstudio-activity-7326232012258709505-du-V?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAB_UZ_MBL7ZkQtfZLrkrdynJjMAoBSE3L1c",
  },
  {
    title: "🌟 Investing in the Future! 🎯",
    description: "🚀 Yesterday, I had the incredible opportunity to engage with my college students at K.S.Rangasamy College of Technology —young minds eagerly waiting to achieve more in the coming years!💡✨",
    img: "../linkedIn/image-2.png",
    reactions: "109",
    comments: "7",
    link: "https://www.linkedin.com/posts/sakthivelgovinthan_ksrct-quickappstudio-studentempowerment-activity-7313766384889434112-6bg7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAB_UZ_MBL7ZkQtfZLrkrdynJjMAoBSE3L1c",
  },
  {
    title: "🌟 Quick App Studio’s First Workspace at KSR EDUCATIONAL INSTITUTIONS 🌟",
    description: "Today marks a special milestone as we initiated our first workspace at K.S.Rangasamy College of Technology with my amazing team! 🎉",
    img: "../linkedIn/image-3.png",
    reactions: "182",
    comments: "14",
    link: "https://www.linkedin.com/posts/sakthivelgovinthan_quickappstudio-teamwork-innovation-activity-7283146735458164736-32n1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAB_UZ_MBL7ZkQtfZLrkrdynJjMAoBSE3L1c",
  },
];

export default function LinkedInPosts() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="linkedin" className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900">Top LinkedIn Posts</h2>
          <p className="text-gray-600 mt-1">
            Highlights from my most engaged posts on LinkedIn.
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

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {linkedinPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-semibold line-clamp-1 text-gray-900 dark:text-gray-100">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 line-clamp-2">
                  {post.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-3 mt-3">
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                    👍 {post.reactions}
                  </span>
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                    💬 {post.comments}
                  </span>
                </div>

                 {/* <motion.a
            whileHover={{ x: 4 }}
            href="#"
            className="text-gray-500 dark:text-gray-300 text-sm hover:text-pink-500"
          >
            View Company →
          </motion.a> */}

                {/* Link */}
              <a
  href={post.link}
  target="_blank"
  className="inline-block mt-4 mb-2 text-sm text-center
             text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
             px-3 py-1 rounded-full shadow-lg shadow-purple-500/40
             hover:scale-105 hover:shadow-xl transition-all duration-300"
>
  View on LinkedIn →
</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
