import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-lg z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-accent">MineVisionAI</h1>
        <ul className="hidden md:flex gap-8 text-lg">
          <li><a href="#home" className="hover:text-accent">Home</a></li>
          <li><a href="#about" className="hover:text-accent">About</a></li>
          <li><a href="#features" className="hover:text-accent">Features</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        </ul>
        <button className="md:hidden text-white">☰</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

