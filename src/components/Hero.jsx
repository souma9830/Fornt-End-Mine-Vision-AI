import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

// Custom Sphere
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
    <section
      id="home"
      className="relative h-screen w-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Fullscreen Three.js Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Hero Content */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-white max-w-3xl px-4 flex flex-col gap-5"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          AI-Powered Mining Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          AI-powered rockfall prediction system for open-pit mines. Helping you
          prevent risks before they become disasters.
        </p>
        <div className="flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#services"
            className="bg-accent px-8 py-3 rounded-full text-black font-semibold uppercase"
          >
            Dashboard
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#services"
            className="bg-accent px-8 py-3 rounded-full text-black font-semibold uppercase"
          >
            Watch a Demo
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
