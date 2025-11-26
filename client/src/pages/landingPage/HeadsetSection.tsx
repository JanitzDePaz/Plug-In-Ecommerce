import { Link } from "react-router";
import Headset from "src/three/viewers/HeadsetScene";
import { LandingPrimaryButton } from "src/components/buttons/LandingPrimaryButton";
import { ChangeColorButton } from "src/components/buttons/ChangeColorButton";
import { headsetColorControl } from "src/stores/menuStore";
import { slideDownHeadsetSection } from "src/animations/slideDownHeadsetSection"
import { useEffect, useRef } from "react";
export const HeadsetSection = () => {
    const {
        changeColorAquamarineContour,
        changeColorPurpleContour,
        changeColorWhiteContour,
        changeColorBlackContour,
        changeColorWhitePads,
        changeColorBlackPads,
        changeColorGrayPads,
        changeColorBrownPads,
      } = headsetColorControl();

      const firstRecharge = useRef<boolean>(false)
      useEffect(()=>{
        if(!firstRecharge.current){
          slideDownHeadsetSection(".slideAnimation")
          firstRecharge.current = true
        }
      }, [])

  return (
    <section className="LandingHeadsetBG py-[2vh] flex flex-col min-h-screen ">
        <h1 className="landingTitle slideAnimation">Nuevo color disponible</h1>
        <div className="flex justify-center gap-[10vw] flex-col lg:flex-row py-10">
          <div className="flex-center flex-col items-center w-full lg:w-[40vw] xl:w-[30vw] h-[60vh] slideAnimation">
            <Headset />
            <div className="flex-center gap-0 2xl:gap-5 flex-col 2xl:flex-row">
              <div className="flex-center flex-col">
                <h2 className="text-white text-center mt-5 mb-3 text-2xl">
                  Contorno
                </h2>
                <div className="px-3 py-2 rounded-full flex-center gap-2 bg-[#615E74]">
                  <ChangeColorButton color="bg-[#B0D6D9]" onClick={changeColorAquamarineContour} />
                  <ChangeColorButton color= "bg-[#C091CC]" onClick={changeColorPurpleContour} />
                  <ChangeColorButton color= "bg-white" onClick={changeColorWhiteContour} />
                  <ChangeColorButton color= "bg-[#3a3a3a]" onClick={changeColorBlackContour} />
                </div>
              </div>

              <div className="flex-center flex-col">
                <h2 className="text-white text-center mt-5 mb-3 text-2xl">
                  Almohadillas
                </h2>
                <div className="px-3 py-2 rounded-full flex-center gap-2 bg-[#615E74]">
                  <ChangeColorButton color="bg-[#C4C4C4]" onClick={changeColorGrayPads} />
                  <ChangeColorButton color="bg-white" onClick={changeColorWhitePads} />
                  <ChangeColorButton color="bg-[#2E2E2E]" onClick={changeColorBlackPads} />
                  <ChangeColorButton color="bg-[#574C44]" onClick={changeColorBrownPads} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-10 lg:p-0 lg:w-[40vw] xl:w-[25vw] flex-center flex-col gap-10">
            <h2 className="landingSubtitle slideAnimation">NeoSound</h2>
            <p className="landingParagraph slideAnimation">
              Cada nota cobra vida con una nitidez que te envuelve. Los graves
              potentes y los agudos definidos te hacen sentir la música tal y
              como fue creada. No escuchas, vives la experiencia.
            </p>
            <div className="flex-center flex-col gap-5">
              <Link to={"/tienda"}>
                <button className="landingSecondaryButton slideAnimation">Leer más</button>
              </Link>
              <LandingPrimaryButton text="Comprar ahora" route="/Tienda" style=".slide"/>
            </div>
          </div>
        </div>
      </section>
  );
};