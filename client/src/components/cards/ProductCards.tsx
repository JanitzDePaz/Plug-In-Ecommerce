export const ProductCards = ({name, price, imgUrl, active } :  productCard) =>(
    <article className="w-full flex flex-col gap-5 shadow-xl rounded-2xl h-full py-15 px-5 hover:-translate-y-3 transition-[1s]">
        <img src={imgUrl} alt="" className="flex-1"/>
        <h2 className="text-xl text-center">{name}</h2>
        <h1 className="text-2xl text-red-500 text-center font-bold">{`${price.toFixed(2)}€`}</h1>
    </article>
)