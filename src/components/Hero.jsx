import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#00f5d4"
        metalness={0.4}
        roughness={0.3}
        wireframe
      />
    </mesh>
  );
}

const Hero = () => {
  return (
    <section id="home" className="h-screen relative flex items-center justify-center text-center">
      {/* Three.js background */}
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-white max-w-3xl px-4"
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
