import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-20 mt-20">
        <About />
        <Skills />
        <Experience />
        <Education />
        {/* <Projects /> */}
        <Contact />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
