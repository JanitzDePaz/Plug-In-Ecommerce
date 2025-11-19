import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { typingTestStorage } from "src/stores/menuStore";
import { startTypingTest } from "src/hooks/startTypingTest";
import { TypingTestResultCard } from "../cards/TypingTestResultCard";

export const KeyboardSection = () => {
  const [writedText, setWritedText] = useState<String>("");
  const cancelSpacing = useRef<String>("");
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
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <section className="h-[80vh] flex-center gap-30 items-center typingTestGradient text-white">
      <div className="h-[70vh] w-2/5 xl:flex justify-center flex-col hidden ">
        <h1 className="landingTitle">Teclado X60</h1>
        <img src="/landingPage/keyboard.png" alt="keyboard image" className="h-2/3"/>
      </div>

      {activeTypingTest ? (
        <>
          <div className="w-2/3 xl:w-[40vw] h-[50vh] p-[5vh] flex-center flex-col gap-10 bg-gray-200 rounded-2xl border-2 border-black">
            <section className="flex-center items-start w-full relative">
              <p className="w-10 text-center absolute bottom-0 right-0 translate-y-9 border border-black text-black  rounded-full">{typingTestTimer}</p>
              <div className="flex flex-wrap">
                
                {textToWrite.split(" ").map((word, i) => (
                  <div key={i} className="flex h-fit">
                    {word.split("").map((char, charIndex) => (
                      <p className="text-2xl text-black" key={charIndex}>{`${char}`}</p>
                    ))}
                    <p className="text-2xl">&nbsp;</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="flex flex-wrap content-start relative h-[35vh] overflow-y-scroll overflow-x-hidden border-2 border-gray-400">
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
                                  "text-2xl",
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
        <section className="w-[40vw] h-[50vh] p-[5vh] border-2 border-black grid grid-cols-3 grid-rows-2 items-center justify-items-center rounded-2xl bg-gray-300">
          <TypingTestResultCard numberResult={wordPerMinute} typingTestResultType="wpm"/>
          <TypingTestResultCard numberResult={typingTestTimer} typingTestResultType="s"/>
          <TypingTestResultCard numberResult={writedWordsAccuracy} typingTestResultType="%"/>
          <button onClick={() => {startTypingTest(60); setWritedText("")}} className="row-2 col-start-1 col-end-4 text-2xl bg-gray-500 rounded-2xl border-2 border-black px-5 py-2">
            Empieza el typing test aqui
          </button>
        </section>
      )}
    </section>
  );
};
