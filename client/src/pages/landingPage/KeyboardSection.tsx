import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { typingTestStorage } from "src/stores/menuStore";
import { startTypingTest } from "src/hooks/startTypingTest";
import { TypingTestResultCard } from "../../components/cards/TypingTestResultCard";
import { LandingPrimaryButton } from "../../components/buttons/LandingPrimaryButton";

export const KeyboardSection = () => {
  const [writedText, setWritedText] = useState<String>("");
  const cancelSpacing = useRef<String>("");
  const notPlayed = useRef<boolean>(true);
  const { textToWrite, activeTypingTest, wordPerMinute, writedWordsAccuracy } =
    typingTestStorage();
  const typingTestTimer = typingTestStorage((s) => s.typingTestTimer);
  const updateLastTextWrited = typingTestStorage((s) => s.updateLastTextWrited);

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

      if(event.key === " "){
        event.preventDefault();
      }

      //Deletes the las character of the writedText
      if (event.key === "Backspace") {
        setWritedText((prev) => prev.slice(0, -1));
      }

      if (
        event.key === "Enter" &&
        typingTestStorage.getState().activeTypingTest
      ) {
        typingTestStorage.getState().finishTest();
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <section className="min-h-screen py-5 sm:py-10 [80vh] gap-20 flex-center flex-col xl:flex-row items-center typingTestGradient text-white">
      <div className="w-5/6 xl:w-2/5 flex justify-center items-center flex-col gap-0">
        <h1 className="landingTitle">Teclado X60</h1>
        <img
          src="/landingPage/keyboard.png"
          alt="keyboard image"
          className="flex-1"
        />
        <LandingPrimaryButton text="Compra aquí" route="/Tienda" style=""/>
      </div>
      <div className="w-screen h-[60vh] hidden xl:w-[40vw] p-[10vh] xl:flex justify-center gap-15 items-center flex-col bg-[rgba(112,105,75,0.3)] rounded-4xl shadow-2xl text-white font-mono">
        {activeTypingTest ? (
          <>
            <section className="flex-center items-start w-full relative">
              <p className="w-10 text-center absolute bottom-0 right-0 translate-y-9 border border-white rounded-full">
                {typingTestTimer}
              </p>
              <div className="flex flex-wrap">
                {textToWrite.split(" ").map((word, i) => (
                  <div key={i} className="flex h-fit">
                    {word.split("").map((char, charIndex) => (
                      <p
                        className="text-sm sm:text-2xl"
                        key={charIndex}
                      >{`${char}`}</p>
                    ))}
                    <p className="text-2xl">&nbsp;</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="w-full flex flex-wrap content-start relative h-[35vh] overflow-y-scroll overflow-x-hidden bg-[rgba(0,0,0,0.48)] rounded-4xl p-5">
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
                                : ""
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
          </>
        ) : (
          <>
            <h3 className=" row-1 col-start-1 col-end-4 text-4xl font-extrabold">
              Typing test
            </h3>
            {notPlayed.current ? (
              <div className="w-full col-start-1 col-end-4 flex flex-col gap-4">
                <h4 className="text-2xl font-bold">
                  Manual del test
                </h4>
                <p>En este typing test se <strong>valorará</strong> las palabras por <strong>minuto, la duracion y la precision.</strong></p>
                <p>El test se puede parar pulsando la tecla<strong> Enter</strong> y se valorará con el texto escrito.</p>
                <p>El test corrige palabra por palabra y una palabra mal escrita<strong> no contará</strong> para los resultados.</p>
              </div>
            ) : (
              <div className="flex justify-around w-4/5 flex-wrap">
                <TypingTestResultCard
                  numberResult={wordPerMinute}
                  typingTestResultType="wpm"
                />
                <TypingTestResultCard
                  numberResult={typingTestTimer}
                  typingTestResultType="s"
                />
                <TypingTestResultCard
                  numberResult={writedWordsAccuracy}
                  typingTestResultType="%"
                />
              </div>
            )}

            <button
              onClick={() => {
                startTypingTest(60);
                setWritedText("");
                notPlayed.current = false;
              }}
              className="row-3 col-start-1 col-end-4 text-xl text-black bg-white rounded-4xl px-6 py-4 shadow-2xl hover:text-[rgb(93,93,93)]"
            >
              Empieza el typing test aqui
            </button>
          </>
        )}
      </div>
    </section>
  );
};