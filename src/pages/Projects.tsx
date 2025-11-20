import AnimatedPage from '../components/AnimatedPage';

const Projects = () => {
  return (
    <AnimatedPage>
      <h2 className="text-3xl font-display mb-8 text-primary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholders for projects */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white/5 border border-white/10 rounded-lg h-64 p-6 hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
            <p className="text-sm text-gray-400">Description of project {item} goes here.</p>
          </div>
        ))}
      </div>
    </AnimatedPage>
  );
};

export default Projects;
