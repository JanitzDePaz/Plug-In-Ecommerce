import Headphone from "../../components/landingPage/Headphone";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls} from "@react-three/drei";
import { headsetColorControl } from "stores/menuStore";
import { Link } from "react-router";

export default function () {

    const {changeColorAquamarine, changeColorPurple, changeColorWhite} = headsetColorControl()
  return (
    <>
        <section className="LandingHeadsetBG py-[2vh] flex flex-col">
            <h1 className="landingTitle">Nuevo color disponible</h1>
            <div className="flex justify-center gap-[10vw] flex-col lg:flex-row py-10">
                <div className="flex-center flex-col items-center w-full lg:w-[30vw] min-h-full">
                    <Canvas className="h-full w-full" camera={{ position: [0, 0, 4] }}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.8}/>
                            <directionalLight position={[30, 10, 5]} intensity={1} />
                            <directionalLight position={[-30, 10, 5]} intensity={1} />
                            <Headphone scale={0.9} rotation={[0, Math.PI / Math.sin(50), 0]}/>
                            <OrbitControls enableZoom={false} enableDamping={false} enablePan={false} enableRotate={true} autoRotate={true}/>
                        </Suspense>
                    </Canvas>
                    <div className="px-3 py-2 rounded-full flex-center gap-2 bg-[#615E74]">
                        <button className="rounded-full bg-[#B0D6D9] w-10 h-10" onClick={changeColorAquamarine}></button>
                        <button className="rounded-full bg-[#C091CC] w-10 h-10" onClick={changeColorPurple}></button>
                        <button className="rounded-full bg-white w-10 h-10" onClick={changeColorWhite}></button>
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
        <section className="bg-[#1E1E1E] h-screen flex justify-around items-center gap-5">
            <div className="w-2/6 h-4/5 lg:grid lg:grid-rows-2 lg:grid-cols-2 hidden place-content-center bg-amber-50">
                <article className="screenData">HZ</article>
                <article className="screenData">Ms</article>
                <article className="screenData">Resolucion</article>
                <article className="screenData">Oled</article>
            </div> 
            <div className="w-3/6 h-4/5 bg-red-400">
                
            </div>
        </section>
    </>
  );
}
