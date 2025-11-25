import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import enkyhero from '../assets/enkyhero.png';
import connectedhero from '../assets/connectedhero.png';
import cylchero from '../assets/cylchero.png';

const Projects = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger text/links vs grid
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger individual cards
        delayChildren: 0.4, // Wait for text to finish mostly
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 }, // Slide in from left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full w-full pt-[6vh] flex flex-col overflow-hidden"
    >
      {/* Text Group */}
      <motion.div variants={textVariants} className="w-full flex flex-col items-end">
        <h1 className="font-serif text-[5vw] min-[1480px]:text-[4vw] text-jerry-green pr-[6vw] mt-[12vh] min-[1480px]:mt-[7vh] -mb-[.75vh]">
          Projects
        </h1>
        <p className="text-jerry-green pr-[6vw]"
        style={{ fontFamily: '"Inter", sans-serif', fontWeight: 300 }}>
          A display of personal and professional projects
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="w-full">
        <motion.div
          variants={gridVariants}
          className="grid grid-cols-3 gap-[3vw] mx-[6vw] mt-[-6vh]"
        >
          {/* Dummy Data for Projects */}
          {[
            {
              title: "Connected Care",
              description: "A full-stack scheduling platform built with Vue and Nuxt.js. Replaced Excel workflows with automated intake forms and secure role-based authentication.",
              tags: ["Vue.js", "Nuxt.js", "SQLite", "Prisma"],
              image: connectedhero,
            },
            {
              title: "CYLC",
              description: "A modern website designed in Figma and built with React and Chakra UI. Replaced a WordPress backend to revitalize user engagement and improve scalability.",
              tags: ["React", "CloudFlare", "Chakra UI", "JavaScript"],
              image: cylchero,
            },
            {
              title: "Enky",
              description: "Engineered a responsive front-end using TypeScript and Tailwind CSS. Led the UI design process to create a sleek, user-centered interface that enhanced user engagement.",
              tags: ["TypeScript", "Tailwind CSS", "Vite", "React"],
              image: enkyhero,
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`
                h-full
                ${index === 0 ? '-translate-y-[8vh] min-[1480px]:-translate-y-[6vh]' : ''}
                ${index === 2 ? 'translate-y-[8vh] min-[1480px]:translate-y-[6vh]' : ''}
              `}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Links Group */}
      <motion.div variants={textVariants} className="w-full pl-[6vw] flex flex-col items-start space-y-[0.5vh]">
        {['GitHub', 'LinkedIn', 'Resume'].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="font-serif text-[1.5vw] min-[1480px]:text-[1vw] text-jerry-blue hover:opacity-60 transition-opacity"
          >
            {item}
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
