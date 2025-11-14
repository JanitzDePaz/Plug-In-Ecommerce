import { useEffect, useState } from "react";
import clsx from "clsx";
import { texts } from "../../constants/typingText";

  const textToCompare = texts[Math.floor(Math.random()*10+1)]
  const screenText = textToCompare
  

export const KeyboardSection = () => {
    const [writedText, setWritedText] = useState <String>("")
    const writedTextSplited = writedText.split("")
    const textToCompareSplited = textToCompare.split("")
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
       if (/^[\p{L} ,.]$/u.test(event.key)) {
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
      <div className="w-[40vw] min-h-[70vh] flex flex-col">
        <section className="flex">
          {screenText.split("").map((char , i) => {
            const charsWithSpaces = char === " " ? "\u00A0" : char
           return(
            <p key={i} className="text-2xl w-6 inline-block">{`${charsWithSpaces}`}</p>
          )})}
        </section>

        <section className="flex">
          {writedText.split("").map((char, i) => {
            const charsWithSpaces = char === " " ? "\u00A0" : char
            return(
            <p key={i} className={clsx("text-2xl", textToCompareSplited[i] === writedTextSplited[i] ? "text-green-400" : "text-red-500")}>{charsWithSpaces}</p>
          )})}
        </section>
      </div>
    </section>
  );
};
