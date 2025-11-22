import AnimatedPage from '../components/AnimatedPage';

const Creative = () => {
  return (
    <AnimatedPage>
      <section className="min-h-screen w-full pt-36 pb-20 px-6 flex flex-col items-center">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl font-display mb-8 text-primary">Creative</h2>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {/* Placeholders for creative work */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className={`bg-white/5 border border-white/10 rounded-lg break-inside-avoid hover:bg-white/10 transition-colors ${item % 2 === 0 ? 'h-64' : 'h-96'} flex items-center justify-center`}>
                <span className="text-lg font-semibold">Creative Work {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Creative;
