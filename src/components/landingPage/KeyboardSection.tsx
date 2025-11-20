import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { typingTestStorage } from "src/stores/menuStore";
import { startTypingTest } from "src/hooks/startTypingTest";
import { TypingTestResultCard } from "../cards/TypingTestResultCard";
import { LandingPrimaryButton } from "../buttons/LandingPrimaryButton";

export const KeyboardSection = () => {
  const [writedText, setWritedText] = useState<String>("");
  const cancelSpacing = useRef<String>("");
  const notPlayed = useRef<boolean>(true)
  const {textToWrite, activeTypingTest, wordPerMinute, writedWordsAccuracy} =
    typingTestStorage();
  const typingTestTimer = typingTestStorage(s => s.typingTestTimer)
  const updateLastTextWrited = typingTestStorage(s => s.updateLastTextWrited);

  let compareCharIndex = 0;

  //takes the last character the user typed
  useEffect(() => {
    updateLastTextWrited(writedText);
    cancelSpacing.current =
      writedText.length > 0 ? writedText[writedText.length - 1] : "";
  }, [writedText]);

  //this manage the keydown with a listener
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (!typingTestStorage.getState().activeTypingTest) {
        return;
      }
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

      if(event.key === "Enter" && typingTestStorage.getState().activeTypingTest){
        typingTestStorage.getState().finishTest()
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <section className="min-h-screen py-10 xl:h-[80vh] flex-center flex-col xl:flex-row gap-30 items-center typingTestGradient text-white">
      <div className=" h-[70vh] w-5/6 xl:w-2/5 flex justify-center items-center flex-col gap-0">
        <h1 className="landingTitle">Teclado X60</h1>
        <img src="/landingPage/keyboard.png" alt="keyboard image"/>
        <LandingPrimaryButton text="Compra aquí" route="/Tienda"/>
      </div>

      {activeTypingTest ? (
        <>
          <div className="w-[90vw] lg:w-[60vw] xl:w-[40vw] h-[80vh] lg:h-[50vh] p-[5vh] flex-center items-center flex-col gap-10 bg-gray-200 rounded-2xl border-2 border-black">
            <section className="flex-center items-start w-full relative">
              <p className="w-10 text-center absolute bottom-0 right-0 translate-y-9 border border-black text-black  rounded-full">{typingTestTimer}</p>
              <div className="flex flex-wrap">
                
                {textToWrite.split(" ").map((word, i) => (
                  <div key={i} className="flex h-fit">
                    {word.split("").map((char, charIndex) => (
                      <p className="text-sm sm:text-2xl font-mono text-black" key={charIndex}>{`${char}`}</p>
                    ))}
                    <p className="text-2xl">&nbsp;</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="w-full flex flex-wrap content-start relative h-[35vh] overflow-y-scroll overflow-x-hidden border-2 border-gray-400">
              {writedText.length < 1 ? (
                <p className="text-2xl text-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  Escribe para empezar...
                </p>
              ) : (
                  writedText.split(" ").map((word, i) => {
                    
                    compareCharIndex++;
                    return (
                      <>
                        <div key={i} className="flex h-fit">
                          {word.split("").map((char, i) => {
                            return (
                              <p
                                key={i}
                                className={clsx(
                                  "text-2xl font-mono",
                                  writedText.split(" ")[compareCharIndex - 1] ===
                                    textToWrite.split(" ")[compareCharIndex - 1]
                                    ? "text-green-500"
                                    : "text-black"
                                )}
                              >{`${char}`}</p>
                            );
                          })}
                          <p className="text-2xl">&nbsp;</p>
                        </div>
                      </>
                    );
                  })
              )}
            </section>
          </div>
        </>
      ) : (
        <div className="w-[90vw] sm:w-[65vw] lg:w-[60vw] xl:w-[40vw] min-h-[65vh] lg:h-[65vh] 2xl:h-[60vh] p-4 xl:p-[5vh] border-2 border-black flex flex-col gap-10 items-center justify-items-center rounded-2xl bg-gray-300">
          <h3 className=" row-1 col-start-1 col-end-4 text-black text-4xl font-light font-mono">Typing test</h3>
          {
            notPlayed.current 
            ? 
              <article className="w-full col-start-1 col-end-4">
                <h4 className="lg:text-2xl text-black font-mono sm:text-xl text-lg font-medium">Manual del test</h4>
                <p className="text-black font-mono text-lg sm:text-xl lg:text-xl">
                  En este typing test se <strong>valorará</strong> las palabras por <strong>minuto, la duracion y la precision.</strong> <br />
                  El test se puede parar pulsando la tecla <strong>Enter</strong> y se valorará con el texto escrito. <br />
                  El test corrige palabra por palabra y una palabra mal escrita <strong>no contará</strong> para los resultados.
                </p>
              </article>
            :
              <>
                <TypingTestResultCard numberResult={wordPerMinute} typingTestResultType="wpm"/>
                <TypingTestResultCard numberResult={typingTestTimer} typingTestResultType="s"/>
                <TypingTestResultCard numberResult={writedWordsAccuracy} typingTestResultType="%"/>
              </>
          }
          
          <button onClick={() => {startTypingTest(60); setWritedText(""); notPlayed.current = false}} className="row-3 col-start-1 col-end-4 text-xl lg:text-2xl font-mono bg-gray-500 rounded-2xl border-2 border-black px-5 py-2">
            Empieza el typing test aqui
          </button>
        </div>
      )}
    </section>
  );
};
