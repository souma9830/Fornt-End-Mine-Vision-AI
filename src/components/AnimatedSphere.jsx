import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function AnimatedSphere() {
  const sphereRef = useRef();


  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005;
      sphereRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={sphereRef}>
      {/* Core glowing sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial
          color="#3b82f6"           
          emissive="#1e40af"        
          emissiveIntensity={0.8}
          shininess={100}
        />
      </mesh>

     
      <mesh>
        <sphereGeometry args={[1.52, 32, 32]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

     
      <mesh>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshPhongMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={1.2}
          transparent
          opacity={0.15}          
        />
      </mesh>
    </group>
  );
}

export default AnimatedSphere;
