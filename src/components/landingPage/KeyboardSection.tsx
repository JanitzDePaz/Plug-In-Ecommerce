import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { texts } from "../../constants/typingText";

  const textToCompare = texts[Math.floor(Math.random()*10+1)]
  const screenText = textToCompare
  

export const KeyboardSection = () => {
    const [writedText, setWritedText] = useState <String>("")
    let counter = 0
    const cancelSpacing = useRef<String>("")
  

    //takes the las character the user typed
  useEffect(() => {
    cancelSpacing.current = writedText.length > 0 ? writedText[writedText.length-1] : "";
  }, [writedText])

  //this manage the keydown with a listener
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      
      //If is a unicode key adds to a writed list
      if (/^[\p{L} ,.]$/u.test(event.key)) {
        setWritedText(prev => prev + event.key);
      }

      //Uses the useRef cancelSpacing to quit double space in the typing test
      if(event.key === " " && cancelSpacing.current == " "){
        setWritedText(prev => prev.slice(0, -1));
      }
      
      //Deletes the las character of the writedText
      if (event.key === "Backspace") {
        setWritedText(prev => prev.slice(0, -1));
      }
    }
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    }
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
        <section className="flex justify-start items-start w-full flex-wrap">
          {screenText.split(" ").map((word , i) => (
            <div key={i} className="flex h-fit">{
              word.split("").map((char, charIndex) => (
                <p className="text-2xl">{`${char}`}</p>
              ))
            }
            <p className="text-2xl">&nbsp;</p>
            </div>
          ))}
        </section>

        <section className="flex flex-wrap content-start relative h-[50vh] overflow-y-auto overflow-x-hidden border-2 border-gray-400">
          {writedText.length < 1 ? <p className="text-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Esribe para empezar...</p> : writedText.split(" ").map((word, i) => {
              counter++
              return(
                <div className="flex h-fit">
                  {
                    word.split("").map((char, i) => {
                      return(
                        <p className={clsx("text-2xl" , writedText.split(" ")[counter-1] === textToCompare.split(" ")[counter-1] ? "text-green-500" : "text-black")}>{`${char}`}</p>
                      )
                    })
                  }
                  <p className="text-2xl">&nbsp;</p>
                </div>
                
              )})
          }
        </section>
      </div>
    </section>
  );
};
