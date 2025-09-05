import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      <nav
        className={`fixed top-4 left-4 right-4 z-50 w-[calc(100%-2rem)] transition-all duration-500 rounded-2xl ${
          isScrolled
            ? "bg-gradient-to-br from-gray-900/40 to-gray-800/30 backdrop-blur-2xl py-2"
            : "bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-xl py-3"
        }`}
        style={{
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(255, 255, 255, 0.1) inset, 0 -1px 1px rgba(0, 0, 0, 0.2) inset",
          border: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        <div className="container flex items-center justify-between px-6 mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-md animate-pulse-slow"></div>
              <img
                src={logo}
                alt="MineVision AI Logo"
                className="relative z-10 w-12 h-10 transition-transform duration-300 hover:scale-110"
              />
            </div>
            <span className="text-xl font-bold text-white transition-colors duration-300">
              MineVision.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                AI
              </span>
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden space-x-8 font-medium text-white lg:flex">
            {["home", "features", "about", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`relative transition-all duration-300 group ${
                    activeLink === item ? "text-blue-400" : "hover:text-blue-400"
                  }`}
                  onClick={() => handleSetActive(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full ${
                      activeLink === item ? "w-full" : ""
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Login */}
          <div className="items-center hidden lg:flex">
            <div className="relative px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse-slow"></div>
              <span className="relative drop-shadow-md">Login</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="text-white lg:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-6 py-4 mt-2 border shadow-inner rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-800/40 backdrop-blur-xl border-white/5">
            <ul className="flex flex-col space-y-4">
              {["home", "features", "about", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={`block py-2 transition-all duration-300 pl-2 border-l-2 ${
                      activeLink === item 
                        ? "text-blue-400 border-blue-400 bg-blue-400/10" 
                        : "text-white hover:text-blue-400 border-transparent hover:border-blue-400/30"
                    }`}
                    onClick={() => handleSetActive(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
              <li className="pt-2 mt-2 border-t border-white/10">
                <div className="relative inline-block px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm">
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse-slow"></div>
                  <span className="relative drop-shadow-md">Login</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;