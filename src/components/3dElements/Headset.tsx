import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Headphone from "../landingPage/Headphone";
import { OrbitControls } from "@react-three/drei";

export default function () {
    return (
        <Canvas className="h-full w-full" camera={{ position: [0, 0, 4] }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[30, 10, 5]} intensity={1} />
                <directionalLight position={[-30, 10, 5]} intensity={1} />
                <Headphone
                    scale={0.9}
                    rotation={[0, Math.PI / Math.sin(50), 0]}
                />
                <OrbitControls
                    enableZoom={false}
                    enableDamping={false}
                    enablePan={false}
                    enableRotate={true}
                    autoRotate={true}
                />
            </Suspense>
        </Canvas>
    )
}