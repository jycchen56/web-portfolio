import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Creative', path: '/creative' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="flex justify-center pt-6">
      <nav className="px-10 py-3 rounded-full border border-primary/40 bg-paper/70 backdrop-blur-md shadow-sm flex gap-10 text-sm tracking-wide">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `hover:text-accent transition-colors ${isActive ? 'text-accent' : ''}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
