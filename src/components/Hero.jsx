import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { useState, useEffect } from "react";

const Hero = () => {
  const newsItems = [
    " ALERT: High rockfall risk predicted in Sector B-12 today",
    " System Update: New prediction algorithm deployed with 95% accuracy",
    " Mine Vision AI wins Industry Innovation Award 2023",
    " Quarterly Report: 37% reduction in incidents since implementation",
  ];

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-JW8TcwRNs_dP90miTrZVLJzbVaJS5d4FQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszI12Ryn3zTRP_s6Av1w3AaAzUq4fK2cDhQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpr3dav9Nbsl2ZMW2hl_cBU0c010tecb5pg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9inUkXW9JFnhAhccRa62kfBSZUosZK0cNIQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-If76lxr6JjEFNyRITIoU-quCT5uiDtvzJQ&s",
  ];

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNewsTicker, setShowNewsTicker] = useState(true);

  // Rotate news
  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(newsInterval);
  }, [newsItems.length]);

  // Rotate images
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-screen h-screen p-10 text-center bg-gray-50"
    >
      {/* Hero Text */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center px-4 mt-16 text-gray-900 max-w-5xl"
      >
        <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-7xl">
          AI-Powered Mining
        </h1>
        <h1 className="mb-8 text-5xl font-extrabold leading-tight md:text-7xl text-blue-600">
          Solutions
        </h1>

        <p className="max-w-2xl mb-10 text-lg text-gray-600 md:text-xl">
          AI-powered rockfall prediction system for open-pit mines. Helping you
          prevent risks before they become disasters.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#features"
            className="px-8 py-3 font-semibold text-white uppercase rounded-full bg-blue-600 shadow-md"
          >
            Watch a Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#features"
            className="px-8 py-3 font-semibold text-blue-600 uppercase rounded-full border border-blue-600 shadow-md"
          >
            Dashboard
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
