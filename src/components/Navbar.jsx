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
          className="fixed inset-0 z-40 transition-opacity duration-500 bg-black/75 backdrop-blur-md lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed top-5 left-5 right-5 z-50 w-[calc(100%-2.5rem)] rounded-3xl border border-white/10 shadow-xl transition-all duration-700 backdrop-filter backdrop-blur-3xl ${
          isScrolled
            ? "bg-gradient-to-r from-blue-900/70 via-indigo-900/60 to-cyan-900/60 py-2"
            : "bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-cyan-900/30 py-4"
        }`}
        style={{
          boxShadow:
            "0 12px 40px rgba(0, 0, 0, 0.8), inset 0 0 60px rgba(255, 255, 255, 0.05)",
          border: "1.5px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="container flex items-center justify-between px-8 mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-4 cursor-default select-none">
            <div className="relative h-12 w-14">
              <div className="absolute inset-0 rounded-full bg-gradient-to-accent from-accent to-accent blur-2xl opacity-60 animate-pulse-slow"></div>
              <img
                src={logo}
                alt="MineVision AI Logo"
                className="relative z-10 object-contain h-12 transition-transform duration-300 ease-in-out w-14 hover:scale-110"
                draggable={false}
                loading="eager"
              />
            </div>
            <h1 className="text-2xl font-extrabold tracking-wide text-transparent select-text bg-clip-text bg-gradient-to-r from-accent accent to-accent drop-shadow-lg">
              MineVision.<span className="text-accent">AI</span>
            </h1>
          </div>

          {/* Desktop Links */}
          <ul className="hidden space-x-10 font-semibold tracking-wide text-white select-none lg:flex">
            {["home", "features", "about", "contact"].map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item}`}
                  onClick={() => handleSetActive(item)}
                  className={`relative z-10 px-2 py-1 transition-colors duration-300 ${
                    activeLink === item
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
                <span
                  className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-accent rounded-full transition-all duration-400 group-hover:w-full ${
                    activeLink === item ? "w-full" : ""
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <div className="items-center hidden lg:flex">
            <button
              className="relative z-20 px-5 py-2 text-sm font-extrabold text-white transition-transform transform rounded-full shadow-lg bg-gradient-to-r from-accent to-accent hover:accent hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
              aria-label="Login"
            >
              <span className="relative z-10 drop-shadow-lg">Login</span>
              <span className="absolute inset-0 bg-white rounded-full opacity-10 blur animate-pulse-slow"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white transition-transform duration-300 lg:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="px-8 py-6 mt-4 text-white border shadow-inner rounded-2xl bg-gradient-to-b from-blue-900/80 to-cyan-900/70 backdrop-blur-md border-white/20">
            <ul className="flex flex-col space-y-5 font-semibold tracking-wide">
              {["home", "features", "about", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => handleSetActive(item)}
                    className={`block w-full py-3 px-4 rounded-lg border-l-4 transition-all duration-300 ${
                      activeLink === item
                        ? "text-cyan-400 border-cyan-400 bg-cyan-400/20"
                        : "text-white border-transparent hover:text-cyan-400 hover:border-cyan-400/40"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
              <li className="pt-4 mt-4 border-t border-white/10">
                <button
                  className="relative w-full px-5 py-2 text-sm font-extrabold text-white transition-transform transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                  aria-label="Login"
                >
                  <span className="relative z-10 drop-shadow-lg">Login</span>
                  <span className="absolute inset-0 bg-white rounded-full opacity-10 blur animate-pulse-slow"></span>
                </button>
              </li>
            </ul>
          </div>
        </div>

      </nav>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
