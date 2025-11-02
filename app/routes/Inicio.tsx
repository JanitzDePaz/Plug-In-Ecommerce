import Headphone from "../../components/landingPage/Headphone";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls} from "@react-three/drei";
import { headsetColorControl } from "stores/menuStore";
import { Link } from "react-router";
import Tienda from "./Tienda";

export default function () {

    const {changeColorBlack, changeColorWhite} = headsetColorControl()
  return (
    <section className="LandingHeadsetBG py-[5vh] flex flex-col">
        <h1 className="landingTitle">Nuevo color disponible</h1>
        <div className="flex justify-center gap-[10vw] flex-col lg:flex-row py-30">
            <div className="flex-center flex-col items-center w-full lg:w-[30vw] min-h-full">
                <Canvas className="h-full w-full" camera={{ position: [0, 0, 4] }} frameloop="demand">
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.8}/>
                        <directionalLight position={[30, 10, 5]} intensity={1} />
                        <directionalLight position={[-30, 10, 5]} intensity={1} />
                        <Headphone scale={0.9} rotation={[0, Math.PI / Math.sin(50), 0]}/>
                        <OrbitControls enableZoom={false} enableDamping={false} enablePan={false} enableRotate={false} autoRotate={false}/>
                    </Suspense>
                </Canvas>
                <div className="px-3 py-2 rounded-full flex-center gap-2 bg-[#615E74]">
                    <button className="rounded-full bg-[#A28C7F] w-10 h-10" onClick={changeColorBlack}></button>
                    <button className="rounded-full bg-[#E8E6E6] w-10 h-10" onClick={changeColorWhite}></button>
                </div>
            </div>
            <div className="w-full p-10 lg:p-0 lg:w-[25vw] flex-center flex-col gap-10">
                <h2 className="landingSubtitle">NeoSound</h2>
                <p className="landingParagraph">
                    Cada nota cobra vida con una nitidez que te envuelve. 
                    Los graves potentes y los agudos definidos te hacen sentir la música tal y como fue creada. 
                    No escuchas, vives la experiencia.
                </p>
                <div className="flex-center flex-col gap-5">
                    <Link to={"/tienda"}>
                        <button className="landingSecondaryButton">Leer más</button>
                    </Link>
                    <Link to={"/tienda"}>
                        <button className="landingPrimaryButton">Comprar ahora</button>
                    </Link>
                </div>
            </div>
        </div>
        
      
    </section>
  );
}
