import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { texts } from "../../constants/typingText";
import { add } from "three/tsl";

export const KeyboardSection = () => {
  const writedText: string[] = [];
  let addWords: string = "";

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      console.log(event.key);
      if (event.key == " ") {
        writedText.push(addWords);
        addWords = "";
        console.log(writedText);
      } else if(/^[a-zA-Z]$/.test(event.key)){
        addWords += event.key;
      }
    };

    addEventListener("keydown", handleKeydown);

    return () => {
      removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const expectedText = texts[0].split("");

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
        <div className="flex flex-wrap gap-6 h-fit p-10">
          {writedText.map((char, index) =>
            char === " " ? (
              <span
                key={index}
                className="bg-white w-4 h-8 inline-block"
              ></span>
            ) : (
              <span
                key={index}
                className={clsx(
                  "text-2xl font-mono",
                  char === expectedText[index]
                    ? "text-green-500"
                    : "text-red-500"
                )}
              >
                {char}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};
