import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// import AnimatedSphere from '../components/AnimatedSphere'

function AnimatedSphere() {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005; // rotate on Y axis
      sphereRef.current.rotation.x += 0.002; // slight X tilt
    }
  });

  return (
    <group ref={sphereRef}>
      {/* Main glowing sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial
          color="#3b82f6"
          emissive="#1e40af"
          emissiveIntensity={0.7}
          shininess={100}
        />
      </mesh>

      {/* Wireframe overlay to make rotation visible */}
      <mesh>
        <sphereGeometry args={[1.51, 32, 32]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}
{
  /* <AnimatedSphere/> */
}

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-screen h-screen p-10 overflow-hidden text-center"
    >
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </div>

      <div className="absolute inset-0 z-0 bg-black/70" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center px-4 mt-16 text-white max-w-7xl"
      >
        <h1 className="mb-6 text-5xl font-bold md:text-8xl ">
          AI-Powered Mining
        </h1>
        <h1 className="mb-6 text-5xl font-bold md:text-8xl ">Solutions</h1>
        <p className="max-w-xl mb-8 text-lg text-gray-200 md:text-xl">
          AI-powered rockfall prediction system for open-pit mines. Helping you
          prevent risks before they become disasters.
        </p>
        <div className="flex justify-center gap-6 m-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#features"
            className="px-8 py-3 font-semibold text-black uppercase rounded-full bg-accent"
          >
            Watch a Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#features"
            className="px-8 py-3 font-semibold text-black uppercase rounded-full bg-accent"
          >
            Dashboard
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;