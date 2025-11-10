import { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { texts } from "../../constants/typingText"

export const KeyboardSection = () => {

    const [writedText, setWritedText] = useState(" ");
    const writeOnFinal = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (writeOnFinal.current) {
        const len = writeOnFinal.current.value.length;
        writeOnFinal.current.focus();
        writeOnFinal.current.setSelectionRange(len, len);
  }
}, [writedText]);
    
    const writedTextCompare = writedText.split("")
    const expectedText = texts[0].split("")

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
                <input type="text" className="absolute opacity-0 h-full w-full" ref={writeOnFinal} onChange={(e) => setWritedText(e.target.value)}/>
                <div className="flex flex-wrap gap-6 h-fit p-10">
                    {writedText.split(" ").map((word, index) => (
                        <div key={index} className="flex flex-wrap">
                            {word.split("").map((char, charIndex) => (
                                <p key={charIndex} className={clsx("text-4xl font-mono", writedTextCompare[charIndex]==expectedText[charIndex] ? "bg-green-500" : "bg-red-600")}>{char}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}