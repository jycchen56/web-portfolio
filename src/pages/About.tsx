import AnimatedPage from '../components/AnimatedPage';

const About = () => {
  return (
    <AnimatedPage>
      <section className="min-h-screen w-full pt-36 pb-20 px-6 flex items-center justify-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-display mb-8 text-primary">About Me</h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              Hello! I'm Jerry, a designer and developer based in Plano, TX. I have a passion for creating beautiful, functional, and immersive digital experiences.
            </p>
            <p>
              I am currently a student at The University of Texas at Dallas, where I am honing my skills in software engineering and UI/UX design.
            </p>
            <p>
              My approach combines clean code with creative design to build applications that not only work well but also look amazing.
            </p>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default About;
