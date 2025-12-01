import { RateStars } from "../indicators/RateStars"
export const ProductCards = ({name, price, imgUrl, rating, deliveryDays, active } :  productCard) => {

    const deliveryDate = new Date(deliveryDays)
    const dayName = deliveryDate.toLocaleDateString("es-ES", {weekday: "long"})
    const monthName = deliveryDate.toLocaleDateString("es-ES", {month: "long"})

    return(
    <article className="w-full flex flex-col items-center gap-3 shadow-xl rounded-2xl h-full py-5 px-5 hover:-translate-y-2 transition-[1s] border border-gray-200">
        <img src={imgUrl} alt={`Image of ${name}`}/>
        <h2 className="text-lg text-center flex-1">{name}</h2>
        <RateStars rate={rating} />
        <h2 className="text-center">Recíbelo a partir del {dayName}, {deliveryDate.getDay()} de {monthName}</h2>
        <h1 className="text-xl text-white text-center font-bold bg-gray-950 w-fit px-4 py-2 rounded-2xl">{`${price.toFixed(2)}€`}</h1>
    </article>
)}