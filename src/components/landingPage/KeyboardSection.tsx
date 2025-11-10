import { useState } from "react"

export const KeyboardSection = () => {
    const [writedText, setWritedText] = useState(" ");
    console.log(writedText)
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
                <input type="text" className="absolute opacity-0 h-full w-full" onChange={(e) => setWritedText(e.target.value)}/>
                <div className="flex">
                    {writedText.split("").map((char, index) => (
                        char === " "
                        ?
                        
                        :
                        }

                        <p key={index} className="text-4xl font-mono">{char === " " ? "\u00A0" : char}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}