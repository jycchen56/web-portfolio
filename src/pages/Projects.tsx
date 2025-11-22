import AnimatedPage from '../components/AnimatedPage';

const Projects = () => {
  return (
    <AnimatedPage>
      {/* min-h-screen allows growth, pt-36 adds breathing room for floating navbar */}
      <section className="min-h-screen w-full pt-36 pb-20 px-6 flex flex-col items-center">
        <div className="max-w-6xl w-full">
          <h2 className="text-6xl font-display mb-12 text-right text-primary">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholders for projects */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white/5 border border-white/10 rounded-lg h-64 p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                <p className="text-sm text-gray-400">Description of project {item} goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Projects;
