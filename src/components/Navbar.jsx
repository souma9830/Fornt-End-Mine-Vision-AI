import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-lg bg-black/80 backdrop-blur-md">
      <div className="container flex items-center justify-between px-6 py-3 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="MineVision AI Logo" className="w-12 h-10" />
          <span className="text-xl font-bold text-white">
            MineVision. <span className="text-accent">AI</span>
          </span>
        </div>

        {/* Links */}
        <ul className="flex space-x-8 font-medium text-white">
          <li>
            <a href="#home" className="transition hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="transition hover:text-blue-400">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="transition hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;