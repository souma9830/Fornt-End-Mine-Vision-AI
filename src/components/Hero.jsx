import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

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
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Fullscreen Three.js background */}
      <Canvas
        className="absolute top-0 left-0 w-full h-full"
        camera={{ position: [0, 0, 5], fov: 60 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-white max-w-3xl px-6 flex flex-col gap-5"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          AI-Powered Mining Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          AI-powered rockfall prediction system for open-pit mines. Helping you
          prevent risks before they become disasters.
        </p>
        <div className="flex justify-center gap-6 mt-6">
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
