import { RateStars } from "../indicators/RateStars"
export const ProductCards = ({name, price, imgUrl, rating, deliveryDays, active } :  productCard) => {
    const deliveryDate = new Date(deliveryDays)
    const dayName = deliveryDate.toLocaleDateString("es-ES", {weekday: "long"})
    const monthName = deliveryDate.toLocaleDateString("es-ES", {month: "long"})

    return(
    <article className="w-full h-full flex flex-col gap-3 shadow-xl rounded-2xl py-5 px-5 hover:-translate-y-2 duration-100 ease-in border border-gray-200">
        <img src={imgUrl} alt={`Image of ${name}`} className="w-full aspect-square object-contain"/>
        <p className="text-[0.9rem]">{name}</p>
        <p className="text-[1.3rem] text-red-600 font-bold">{`${price.toFixed(2)}€`}</p>
        <RateStars rate={rating} />
        <p className="text-sm text-gray-800 flex-1">Recíbelo a partir del <strong>{dayName}</strong> <br />{deliveryDate.getDate()} de {monthName}</p>
    </article>
)}