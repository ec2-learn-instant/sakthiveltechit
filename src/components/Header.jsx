import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header({ darkMode, setDarkMode }) {
  const menuItems = ["About", "Skills", "Experience", "Education", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md py-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
      >
        {/* LEFT — NAME */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold tracking-wide text-gray-700 dark:text-gray-300">
            Sakthivel Govinthan
          </h1>
        </div>

        {/* CENTER — MENU */}
        <nav className="hidden md:flex space-x-6 text-lg">
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* RIGHT — DARK/LIGHT MODE */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? (
            <FiSun className="text-gray-400 text-2xl" />
          ) : (
            <FiMoon className="text-gray-800 text-2xl" />
          )}
        </motion.button>
      </motion.div>
    </header>
  );
}
