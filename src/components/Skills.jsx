import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
  {
    title: "UI/UX & Design",
    skills: [
      { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Tailwind", img: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Material UI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
      { name: "Ant Design", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg" },
       { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
       { name: "Chakra UI", img: "https://www.vectorlogo.zone/logos/chakra-ui/chakra-ui-icon.svg" }
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", img: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
      { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Vite.js", img: "https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg"},
      { name: "Apollo Graphql", img: "https://static.cdnlogo.com/logos/a/47/apollo-graphql.svg"  }
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "REST APIs", img: "https://cdn-icons-png.flaticon.com/512/1575/1575620.png" },
      { name: "GraphQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
       { name: "RabbitMQ", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
      { name: "WebSockets", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" }
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      
    ],
  },

  // {
  //   title: "Real-Time",
  //   skills: [
  //     { name: "RabbitMQ", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
  //     { name: "WebSockets", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" }
  //   ],
  // },
];

  return (
    <section className="scroll-mt-32" id="skills">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-1 text-lg">
          Technologies and tools I work with
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
          >
            <h3 className="font-bold text-lg mb-4 text-gray-700 dark:text-gray-300">{cat.title}</h3>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-sm"
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-10 h-10 object-contain mb-2"
                  />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
