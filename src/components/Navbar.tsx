// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Creative', path: '/creative' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav
      className="
        bg-[#FAF7F2]
        border-2 border-jerry-green
        rounded-full
        px-[4vw] py-[1.2vh]
        flex justify-center items-center gap-[8vw]
        w-[50vw] min-w-[300px] max-w-[800px]
        text-jerry-blue font-serif text-[clamp(14px,1.2vw,20px)]
      "
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="text-jerry-blue hover:opacity-60 transition-opacity"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
