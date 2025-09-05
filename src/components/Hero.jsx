import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center relative"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-white max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          AI-Powered Mining Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Revolutionizing mining with computer vision and artificial intelligence
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#services"
          className="bg-accent px-8 py-3 rounded-full text-black font-semibold"
        >
          Explore Services
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
