import Headphone from "../../components/landingPage/Headphone";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Box } from "@react-three/drei";

export default function () {
  return (
    <section className="LandingHeadsetBG max-h-full">
      <Canvas>
        <Suspense fallback={null}>
            <Box position={[1, 2, 3]} rotation={[0, Math.PI / 4, 0]}>
                <Headphone />
            </Box>
        </Suspense>
      </Canvas>
    </section>
  );
}
