import React from "react";

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
  return (
    <section id="linkedin" className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Top LinkedIn Posts</h2>
          <p className="text-gray-600 mt-1">
            Highlights from my most engaged posts on LinkedIn.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {linkedinPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
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
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
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

                {/* Button */}
                <a
                  href={post.link}
                  target="_blank"
                  className="inline-block mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View on LinkedIn →
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
