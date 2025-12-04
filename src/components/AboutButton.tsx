import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface AboutButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const AboutButton: React.FC<AboutButtonProps> = ({ href, icon: Icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-[1.5vw] px-[1.5vw] py-[2vh] bg-[#FAF7F2] border-2 border-jerry-green rounded-[40px] text-jerry-green hover:bg-jerry-green transition-colors duration-300 group w-fit min-[1480px]:gap-[1.2vw] min-[1480px]:px-[1.2vw] min-[1480px]:py-[1.6vh]"
    >
      <Icon className="w-[2vw] h-[2vw] min-[1480px]:w-[1.6vw] min-[1480px]:h-[1.6vw]" />
      <span className="text-[2vw] font-display min-[1480px]:text-[1.6vw]">{label}</span>
    </a>
  );
};

export default AboutButton;
