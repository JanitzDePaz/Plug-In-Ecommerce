import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { texts } from "../../constants/typingText";

let wordCount = 0;
export const KeyboardSection = () => {
    const [currentWord, setCurrentWord] = useState<string>("");
    const [writedText, setWritedText] = useState<string[]>([]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      console.log(event.key);
      if (event.key == " ") {
        setCurrentWord(prev => {
          const word = prev.trim();
          if (word) setWritedText(arr => [...arr, word]);
          return "";
        });

      }
       if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]$/.test(event.key)) {
        setCurrentWord(prev => prev + event.key);
      } else if (event.key === "Backspace") {
        setCurrentWord(prev => prev.slice(0, -1));
      }
    };

    addEventListener("keydown", handleKeydown);

    return () => {
      removeEventListener("keydown", handleKeydown);
    };
  }, [currentWord]);

  const expectedText = texts[0].split(" ");

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
          {writedText.map((word, index) =>
            <span className="flex" key={index}>
                {word.split("").map((char, i) => (
                    <p className={clsx("text-2xl", char === expectedText[i] ? "text-green-500" : "text-black")} key={i}>
                        {char}
                    </p>
                ))}
            </span>
          )}
          {currentWord.length > 0 
            ? 
                <span className="flex">
                    {currentWord.split("").map((char, i) => {
                    const compareNumber = writedText.join("").length
                    return (
                        <p className={clsx("text-2xl", char === expectedText[compareNumber+i] ? "text-green-500" : "text-black")} key={i}>
                            {char}
                        </p>
                    )})}
                </span>
            :
                null
            }
        </div>

        <div className="flex flex-wrap gap-6 h-fit p-10 absolute">
          {expectedText.map((word, index) =>
            <span className="flex" key={index}>
                {word.split("").map((char, i) => (
                    <p className="text-gray-400 text-2xl" key={i}>
                        {char}
                    </p>
                ))}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};
