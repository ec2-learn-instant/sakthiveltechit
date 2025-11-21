import { useState } from "react";
import { LuGraduationCap, LuChevronDown, LuChevronUp } from "react-icons/lu";
import { motion } from "framer-motion";

export default function Education() {
  const [openIndex, setOpenIndex] = useState(0);

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) - Information Technology",
      institution: "KSR College of Technology",
      duration: "2014 - 2018",
      details: (
        <>
          <p>CGPA: <strong>8 out 0f 10</strong></p>
          <p>Department: Computer Science & Engineering</p>
        </>
      ),
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sri Vidhya Mandir School",
      duration: "2012 - 2014",
      details: (
        <>
          <p>CGPA: <strong>84% out of 100</strong></p>
          <p>Department: Mathematics and Biology</p>
        </>
      ),
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sri Vidhya Mandir School",
      duration: "2010 - 2012",
      details: (
        <>
          <p>CGPA: <strong>82% out of 100</strong></p>
          {/* <p>Department: Computer Science</p> */}
        </>
      ),
    },
  ];

  return (
    <section className="scroll-mt-32" id="education">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">Education</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          My academic background and qualifications
        </p>
      </div>

      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
          >
            {/* Accordion Header */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-5 flex flex-col md:flex-row md:justify-between items-start md:items-center text-left"
            >
              {/* Icon + Degree + Institution */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <LuGraduationCap className="hidden md:block text-gray-600 text-3xl" />
                <div className="flex flex-col md:flex-row md:items-center md:gap-4 w-full justify-between">
                  <div className="text-lg md:text-base lg:text-lg font-bold text-gray-700 dark:text-gray-300">
                    {edu.degree}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mt-1 md:mt-0">
                    {edu.institution}
                  </div>
                </div>
              </div>

              {/* Duration + Up/Down Icon */}
              <div className="flex items-center gap-3 mt-2 md:mt-0">
                <span className="text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap">
                  {edu.duration}
                </span>
                {openIndex === index ? (
                  <LuChevronUp className="text-xl text-gray-700 dark:text-gray-300" />
                ) : (
                  <LuChevronDown className="text-xl text-gray-700 dark:text-gray-300" />
                )}
              </div>
            </button>

            {/* Accordion Body */}
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                {edu.details}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
