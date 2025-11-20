import { motion } from "framer-motion";

export default function Sidebar() {
  const links = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 h-full w-48 bg-white dark:bg-gray-800 shadow-lg p-6 hidden md:block"
    >
      <nav className="space-y-4">
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            {item}
          </a>
        ))}
      </nav>
    </motion.aside>
  );
}
