import { RateStars } from "../indicators/RateStars"
export const ProductCards = ({name, price, imgUrl, rating, deliveryDays, active } :  productCard) => {
    const deliveryDate = new Date(deliveryDays)
    const dayName = deliveryDate.toLocaleDateString("es-ES", {weekday: "long"})
    const monthName = deliveryDate.toLocaleDateString("es-ES", {month: "long"})

    return(
    <article className="w-full h-full flex flex-col items-center gap-3 shadow-xl rounded-2xl py-5 px-5 hover:-translate-y-2 duration-100 ease-in border border-gray-200">
        <img src={imgUrl} alt={`Image of ${name}`} className="w-full max-h-60 object-cover"/>
        <h2 className="text-xl text-center flex-1">{name}</h2>
        <RateStars rate={rating} />
        <h2 className="text-center text-sm">Recíbelo a partir del <strong>{dayName}</strong>, {deliveryDate.getDate()} de {monthName}</h2>
        <h1 className="text-xl text-white text-center font-bold bg-gray-950 w-fit px-6 py-2 rounded-2xl">{`${price.toFixed(2)}€`}</h1>
    </article>
)}