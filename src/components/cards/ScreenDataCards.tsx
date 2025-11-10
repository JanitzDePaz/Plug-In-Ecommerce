import { forwardRef } from "react";

export const ScreenDataCards = forwardRef<HTMLHeadingElement, ScreenDataCardsProps> (({header,
    svg,
    alt,
    value}, ref) =>{
    return(
        <article className="screenData">
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