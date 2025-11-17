import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { typingTestStorage } from "src/stores/menuStore";
import { startTypingTest } from "src/hooks/startTypingTest";

export const KeyboardSection = () => {
  const [writedText, setWritedText] = useState<String>("");
  const cancelSpacing = useRef<String>("");
  const { typingTestTimer, textToWrite } = typingTestStorage();

  let compareCharIndex = 0;

  //takes the las character the user typed
  useEffect(() => {
    cancelSpacing.current =
      writedText.length > 0 ? writedText[writedText.length - 1] : "";
  }, [writedText]);

  //this manage the keydown with a listener
  useEffect(() => {
    
    const handleKeydown = (event: KeyboardEvent) => {
      if(!typingTestStorage.getState().activeTypingTest){return}
      //If is a unicode key adds to a writed list
      if (/^[\p{L} ,.]$/u.test(event.key)) {
        setWritedText((prev) => prev + event.key);
      }

      //Uses the useRef cancelSpacing to quit double space in the typing test
      if (event.key === " " && cancelSpacing.current == " ") {
        setWritedText((prev) => prev.slice(0, -1));
      }

      //Deletes the las character of the writedText
      if (event.key === "Backspace") {
        setWritedText((prev) => prev.slice(0, -1));
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <section className="max-h-screen flex-center gap-30 items-center bg-gray-700 text-white">

      
      <div className="min-h-[60vh] w-2/5 xl:flex hidden">
        <h1 className="landingTitle">Teclado X</h1>
        <img src="" alt="" />
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>


      <div className="w-2/3 xl:w-[40vw] min-h-[70vh] flex-center flex-col gap-20">
        <section className="flex-center items-start w-full">
          <div className="flex flex-wrap">
            {textToWrite.split(" ").map((word, i) => (
              <div key={i} className="flex h-fit">
                {word.split("").map((char, charIndex) => (
                  <p className="text-2xl" key={charIndex}>{`${char}`}</p>
                ))}
                <p className="text-2xl">&nbsp;</p>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-wrap content-start relative h-[35vh] overflow-y-auto overflow-x-hidden border-2 border-gray-400">
          {writedText.length < 1 ? (
            <p className="text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              Escribe para empezar...
            </p>
          ) : (
            writedText.split(" ").map((word, i) => {
              compareCharIndex++;
              return (
                <div key={i} className="flex h-fit">
                  {word.split("").map((char, i) => {
                    return (
                      <p
                        key={i}
                        className={clsx(
                          "text-2xl",
                          writedText.split(" ")[compareCharIndex - 1] ===
                            textToWrite.split(" ")[compareCharIndex - 1]
                            ? "text-green-500"
                            : "text-white"
                        )}
                      >{`${char}`}</p>
                    );
                  })}
                  <p className="text-2xl">&nbsp;</p>
                </div>
              );
            })
          )}
        </section>
        <button onClick={() => startTypingTest(60)}>{typingTestTimer}</button>
      </div>
    </section>
  );
};
