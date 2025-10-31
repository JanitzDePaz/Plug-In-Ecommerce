import Headphone from "../../components/landingPage/Headphone";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { headsetColorControl } from "stores/menuStore";

export default function () {

    const {changeColorBlack, changeColorWhite} = headsetColorControl()
  return (
    <section className="LandingHeadsetBG max-h-full flex">
        <div className="flex flex-col justify-center items-center">
            <Canvas style={{ width: '50vw', height: '80vh' }} camera={{ position: [0, 0, 5] }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[20, 15, -5]} intensity={1} />
                    <directionalLight position={[-20, 15, 5]} intensity={1} />
                    <Headphone scale={0.9} rotation={[0, Math.PI / Math.sin(50), 0]}/>
                    <OrbitControls enableZoom={false} />
                </Suspense>
            </Canvas>
            <div className="px-3 py-2 rounded-full flex justify-center gap-2 bg-[#615E74]">
                <button className="rounded-full bg-[#3B3939] w-10 h-10" onClick={changeColorBlack}></button>
                <button className="rounded-full bg-[#cacaca] w-10 h-10" onClick={changeColorWhite}></button>
            </div>
        </div>
      
    </section>
  );
}
