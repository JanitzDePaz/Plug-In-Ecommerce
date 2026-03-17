import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Headphone from "../models/HeadsetModel";
import { OrbitControls } from "@react-three/drei";

export default function () {
  const [canInteract, setCanInteract] = useState(false)

  useEffect(() => {
    const checkWidth = () => {
      setCanInteract(window.innerWidth >= 1024)
    }

    checkWidth()
    window.addEventListener("resize", checkWidth)

    return () => window.removeEventListener("resize", checkWidth)
  })
  return (
    <Canvas className="h-full w-full" camera={{ position: [0, 0, 4] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[30, 10, 5]} intensity={1} />
        <directionalLight position={[-30, 10, 5]} intensity={1} />
        <Headphone scale={0.9} rotation={[0, Math.PI / Math.sin(50), 0]} />
        <OrbitControls
          enableZoom={false}
          enableDamping={false}
          enablePan={false}
          enableRotate={canInteract}
          autoRotate={true}
          autoRotateSpeed={1.5}
        />
      </Suspense>
    </Canvas>
  );
}