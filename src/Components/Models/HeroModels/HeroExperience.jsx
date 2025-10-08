import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Iles } from "./Iles";
import { Particles } from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={isTablet ? { position: [10, 10, -30], fov:60} :{ position: [15, 10, -15], fov:60} }>
      <ambientLight intensity={1} color="white" />
      <directionalLight
        position={[10, 10, 5]}
        color={"#BBB390"}
        intensity={5}
      />

      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Particles count={200} />

      <group scale={isMobile ? 0.7 : 0.9 } position={[-3, 1, 5]}>
        <Iles />
      </group>
    </Canvas>
  );
};

export { HeroExperience };
