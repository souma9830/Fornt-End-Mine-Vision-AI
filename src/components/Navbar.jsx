import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="MineVision AI Logo" className="h-10 w-12" />
          <span className="text-xl font-bold text-white">
            MineVision. <span className="text-accent">AI</span>
          </span>
        </div>

        {/* Links */}
        <ul className="flex space-x-8 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-blue-400 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
