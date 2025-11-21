import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Header({ darkMode, setDarkMode }) {
  const menuItems = ["About", "Skills", "Experience", "Education", "Contact"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md py-4 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* LEFT — NAME */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300">
          Sakthivel Govinthan
        </h2>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium"
            >
              {item}
            </a>
          ))}
          {/* Dark mode button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            {darkMode ? (
              <FiSun className="text-gray-400 text-2xl" />
            ) : (
              <FiMoon className="text-gray-800 text-2xl" />
            )}
          </button>
        </nav>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            {darkMode ? (
              <FiSun className="text-gray-400 text-2xl" />
            ) : (
              <FiMoon className="text-gray-800 text-2xl" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            {isMobileMenuOpen ? (
              <FiX className="text-gray-800 dark:text-gray-200 text-2xl" />
            ) : (
              <FiMenu className="text-gray-800 dark:text-gray-200 text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 w-full shadow-md mt-2 absolute left-0 top-full z-40 rounded-b-xl overflow-hidden"
          >
            <ul className="flex flex-col py-4">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={handleNavClick}
                    className="block px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
