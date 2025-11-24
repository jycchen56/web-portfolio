import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import dummyrect from '../assets/dummyrect.png';

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
      className="h-screen w-full pt-[6vh] flex flex-col overflow-hidden"
    >
      {/* Text Group */}
      <motion.div variants={textVariants} className="w-full flex flex-col items-end">
        <h1 className="font-serif text-[5vw] text-jerry-green pr-[6vw] mt-[10vh] -mb-[.75vh]">
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
          className="grid grid-cols-3 gap-[3vw] items-center mx-[6vw] mt-[-6vh]"
        >
          {/* Dummy Data for Projects */}
          {[
            {
              title: "Portfolio V1",
              description: "My first portfolio website built with simple HTML and CSS. It features a clean layout and basic responsiveness.",
              tags: ["HTML", "CSS", "JavaScript"],
              image: dummyrect,
            },
            {
              title: "E-Commerce App",
              description: "A full-stack e-commerce application with user authentication, product catalog, and shopping cart functionality.",
              tags: ["React", "Node.js", "MongoDB", "Tailwind"],
              image: dummyrect,
            },
            {
              title: "Task Manager",
              description: "A productivity tool to help users organize their daily tasks. Includes drag-and-drop functionality and progress tracking.",
              tags: ["Vue.js", "Firebase", "Sass"],
              image: dummyrect,
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`
                ${index === 0 ? '-translate-y-[8vh]' : ''}
                ${index === 2 ? 'translate-y-[8vh]' : ''}
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
      <motion.div variants={textVariants} className="w-full mt-[-4vh] pl-[6vw] flex flex-col items-start space-y-[0.5vh]">
        {['GitHub', 'LinkedIn', 'Resume'].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="font-serif text-[1.5vw] text-jerry-green"
          >
            {item}
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
