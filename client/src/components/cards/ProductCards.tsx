import { RateStars } from "../indicators/RateStars"
export const ProductCards = ({name, price, imgUrl, desc, active } :  productCard) =>(
    <article className="w-full flex flex-col items-center gap-5 shadow-xl rounded-2xl h-full py-5 px-5 hover:-translate-y-3 transition-[1s] border ">
        <img src={imgUrl} alt={`Image of ${name}`}/>
        <h2 className="text-xl text-center">{name}</h2>
        <RateStars />
        <p className="flex-1 border p-4 bg-gray-600 text-white rounded-2xl">{desc}</p>
        <h1 className="text-2xl text-white text-center font-bold bg-gray-950 w-fit px-4 py-2 rounded-2xl">{`${price.toFixed(2)}€`}</h1>
    </article>
)