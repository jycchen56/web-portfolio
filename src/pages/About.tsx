import { motion } from 'framer-motion';
import { Github, FileText, Linkedin } from 'lucide-react';
import AboutButton from '../components/AboutButton';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="min-h-screen w-full flex flex-row items-center justify-between"
    >
      {/* Left Column: Text Content */}
      <div className="flex flex-col w-1/2 text-jerry-green mx-[10vw] my-[10vh]">
        <h1 className="text-[3vw] font-display leading-tight">
          Building meaningful, beautiful and well developed projects.
        </h1>

        <p className="text-[1.2vw] leading-tight" style={{ fontFamily: '"Inter", sans-serif' }}>
          Passionate and interested in learning about full-stack development. Has an eye for aesthetic design and functional composition. Student at The University of Texas at Dallas.
        </p>

        <div className="flex flex-col">
          <h2 className="text-[2vw] font-display">This website</h2>
          <p className="text-[1.2vw] leading-tight" style={{ fontFamily: '"Inter", sans-serif' }}>
            This website was designed in Figma. Developed using React, Next.js, TypeScript, Tailwind, etc. Site hosted on CloudFlare Pages/Workers.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-[2vw] font-display">Top skills</h2>
          <p className="text-[1.2vw] leading-tight" style={{ fontFamily: '"Inter", sans-serif' }}>
            React, Python, JavaScript, TypeScript, HTML, CSS, C, C++, Java, Angular, Vue, Figma.
          </p>
        </div>
      </div>

      {/* Right Column: Buttons */}
      <div className="flex flex-col gap-[6vh] w-7/12 items-center relative z-50">
        <AboutButton
          href="https://github.com/jycchen56"
          icon={Github}
          label="GitHub"
        />
        <AboutButton
          href="/resume.pdf"
          icon={FileText}
          label="Resume"
        />
        <AboutButton
          href="https://linkedin.com/in/jerry-chen-2b4143238"
          icon={Linkedin}
          label="LinkedIn"
        />
      </div>
    </motion.section>
  );
};

export default About;
