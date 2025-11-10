import { forwardRef } from "react";

type ScreenDataCardsProps = {
    header: String,
    ref: React.RefObject<HTMLHeadingElement> | null,
    svg: String,
    alt: String,
    value: String
}

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