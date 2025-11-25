import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
  return (
    <div className="border-2 border-jerry-green rounded-[40px] px-[2vw] py-[2vh] bg-[#FAF7F2] flex flex-col justify-between max-w-sm mx-auto">
      <div>
        <p className="font-serif text-[1.5vw] text-jerry-green">{title}</p>
        <p className=" text-jerry-blue text-[0.75vw] mt-[-1vw] ml-[1vw]"
        style={{ fontFamily: '"Inter", sans-serif', fontWeight: 300 }}>
          {description}
        </p>

        <div className="w-full border border-jerry-blue aspect-video rounded-[25px] mb-6 overflow-hidden mt-[2vh]">
          {image && <img src={image} alt={title} className="w-full h-full object-cover block" />}
        </div>

        <div className="flex flex-wrap gap-[0.5vw] mt-[1vh]">
          {tags.map((tag, index) => (
            <span key={index} className="bg-[#E1C8F1] text-jerry-blue px-[1vw] py-[.25vw] rounded-full text-[.75vw] font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <a
        href={link || '#'}
        className="text-jerry-green font-serif text-xl flex items-center my-[3vh] w-fit ml-auto  hover:opacity-60 transition-opacity"
      >
        Learn More <ChevronRight className="w-5 h-5" />
      </a>
    </div>
  );
};

export default ProjectCard;
