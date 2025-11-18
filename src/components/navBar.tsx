const Navbar = () => {
  return (
    <header className="flex justify-center pt-6">
      <nav className="px-10 py-3 rounded-full border border-primary/40 bg-paper/70 backdrop-blur-md shadow-sm flex gap-10 text-sm tracking-wide">
        {['Home', 'Projects', 'Creative', 'About'].map((item) => (
          <button
            key={item}
            className="hover:text-accent transition-colors"
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
