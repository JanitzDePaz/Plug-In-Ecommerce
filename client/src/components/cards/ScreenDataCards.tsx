import { forwardRef } from "react";
import { useEffect, useRef } from "react";
import { slideDown } from "src/animations/slideDown";

export const ScreenDataCards = forwardRef<HTMLHeadingElement, ScreenDataCardsProps> (({header,
    svg,
    alt,
    value}, ref) =>{
        const cardRef = useRef<HTMLElement | null>(null)

        useEffect(() =>{
            if(cardRef.current){
                slideDown(cardRef.current, 1)
            }
        })
    return(
        <article ref={cardRef} className="screenData">
            <h3>{header}</h3>
            <div className="flex-between">
            <h4 ref={ref}>{value}</h4>
            <img
                src={`landingPage/screenSection/${svg}`}
                alt={`${alt}`}
            />
            </div>
        </article>
    )
}
)