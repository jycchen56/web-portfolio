
import { Github, Linkedin, FileText } from 'lucide-react';

const MobileWarning = () => {
  return (
    <div className="fixed inset-0 bg-jerry-bg flex flex-col items-center justify-center p-[10vw] text-center">
      <h1 className="font-display text-4xl text-jerry-green mb-4">
        Please view on a larger screen
      </h1>
      <p className="font-sans text-jerry-blue text-lg mb-12">
        This portfolio is designed for laptop, desktop, or tablet viewing.
      </p>

      <h2 className="font-display text-2xl text-jerry-green mb-4">
        Quick Links
      </h2>

      <div className="flex flex-col gap-[4vh] w-full max-w-xs">
        <a
          href="https://github.com/jycchen56"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-[2vw] px-6 py-[2vh] bg-[#FAF7F2] border-2 border-jerry-green rounded-full text-jerry-green hover:bg-jerry-green hover:text-[#FAF7F2] transition-colors duration-300"
        >
          <Github className="w-5 h-5" />
          <span className="font-display text-xl">GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/jerry-chen-2b4143238"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-[2vw] px-6 py-[2vh] bg-[#FAF7F2] border-2 border-jerry-green rounded-full text-jerry-green hover:bg-jerry-green hover:text-[#FAF7F2] transition-colors duration-300"
        >
          <Linkedin className="w-5 h-5" />
          <span className="font-display text-xl">LinkedIn</span>
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-[2vw] px-6 py-[2vh] bg-[#FAF7F2] border-2 border-jerry-green rounded-full text-jerry-green hover:bg-jerry-green hover:text-[#FAF7F2] transition-colors duration-300"
        >
          <FileText className="w-5 h-5" />
          <span className="font-display text-xl">Resume</span>
        </a>
      </div>
    </div>
  );
};

export default MobileWarning;
