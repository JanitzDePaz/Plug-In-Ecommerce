import { filterStorage } from "../../stores/shopStore"
import { useRef } from "react"

export const ShopFilters = () => {
    const maxPrice = filterStorage((e) => e.maxPrice)
    const changeMinPrice = filterStorage((e) => e.changeMinPrice)
    const changeMaxPrice = filterStorage((e) => e.changeMaxPrice)

    const minPriceRef = useRef<HTMLInputElement>(null)
    const maxPriceRef = useRef<HTMLInputElement>(null)

    console.log(minPriceRef.current?.value)
    console.log(maxPriceRef.current?.value)

    return(
        <aside className="max-w-3/10 border">
            <h3 className="text-center text-2xl">Filtros</h3>
            <div className="flex-center flex-col px-5">
                <div className="flex justify-between">
                    <label htmlFor="minPrice" className="w-20 text-xs">Min price</label>
                    <label htmlFor="maxPrice" className="w-20 text-right text-xs">Max price</label>
                </div>
                <div className="flex justify-between gap-2 items-center ">
                    <input ref={minPriceRef} type="number" id="minPrice" placeholder="0" onBlur={(e) => changeMinPrice(e.target.value)} onKeyDown={(e) => {if(e.key == "Enter"){changeMinPrice(minPriceRef.current?.value)}}} className="border w-20 no-spinner text-center"/>
                    <hr className="w-5"/>                      
                    <input ref={maxPriceRef} type="number" id="maxPrice"  placeholder={`${maxPrice}`} onBlur={(e) => changeMaxPrice(e.target.value)} onKeyDown={(e) => {if(e.key == "Enter"){changeMaxPrice(maxPriceRef.current?.value)}}} className="border w-20 no-spinner text-center"/>
                </div>  
            </div>
            
        </aside>
    )
}