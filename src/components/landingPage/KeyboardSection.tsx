import { useEffect, useState } from "react";
import clsx from "clsx";
import { texts } from "../../constants/typingText";

  const stringToCompare = texts[Math.floor(Math.random()*10+1)]
  const screenText = stringToCompare

export const KeyboardSection = () => {
    const [writedText, setWritedText] = useState <String>("")

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
       if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]$/.test(event.key)) {
        setWritedText(prev => prev + event.key);
      } else if (event.key === "Backspace") {
        setWritedText(prev => prev.slice(0, -1));
      }
    };

    addEventListener("keydown", handleKeydown);

    return () => {
      removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <section className="max-h-screen flex-center gap-30 items-center bg-amber-600">
      <div className="">
        <h1 className="landingTitle">Teclado ...</h1>
        <img src="" alt="" />
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="w-[40vw] min-h-[70vh] flex relative">
        <div className="flex flex-wrap gap-6 h-fit p-10 absolute">
          //Hacer el typing test con el mismo array siempre
          {
            screenText.split(" ").map((word, wordIndex) =>(
              <div key={wordIndex} className="flex">
                  {
                    word.split("").map((char, charIndex) => (
                      <p>{char}</p>
                    ))
                  }
              </div>
            ))

          }
        </div>
      </div>
    </section>
  );
};
