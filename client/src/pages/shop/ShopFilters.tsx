import { filterStorage } from "../../stores/shopStore"
import { useRef } from "react"
import { SortButtons } from "src/components/buttons/SortButtoms"
import { sortStorage } from "../../stores/shopStore"

export const ShopFilters = () => {
    const maxPrice = filterStorage((e) => e.maxPrice)
    const changeMinPrice = filterStorage((e) => e.changeMinPrice)
    const changeMaxPrice = filterStorage((e) => e.changeMaxPrice)
    const changeSortBy = sortStorage((e) => e.changeSortBy)

    const minPriceRef = useRef<HTMLInputElement>(null)
    const maxPriceRef = useRef<HTMLInputElement>(null)


    return(
        <aside className="max-w-3/10 flex flex-col gap-5">
            <h3 className="text-center text-2xl">Filtros</h3>
            <div className="flex-center flex-col px-5 gap-2">
                <div className="flex justify-between">
                    <label htmlFor="minPrice" className="w-20 text-xs">Min price</label>
                    <label htmlFor="maxPrice" className="w-20 text-right text-xs ">Max price</label>
                </div>
                <div className="flex justify-between items-center gap-2">
                    <input ref={minPriceRef} type="number" id="minPrice" placeholder="0" onBlur={(e) => changeMinPrice(e.target.value)} onKeyDown={(e) => {if(e.key == "Enter"){changeMinPrice(minPriceRef.current?.value)}}} className="border w-20 no-spinner text-center rounded-lg"/>
                    <hr className="w-5"/>                      
                    <input ref={maxPriceRef} type="number" id="maxPrice"  placeholder={`${maxPrice}`} onBlur={(e) => changeMaxPrice(e.target.value)} onKeyDown={(e) => {if(e.key == "Enter"){changeMaxPrice(maxPriceRef.current?.value)}}} className="border w-20 no-spinner text-center rounded-lg"/>
                </div>  
            </div>

            <h3 className="text-center text-2xl mt-10">Ordenar</h3>
            <SortButtons text="Nombre: A-Z" changeSorting={() => {changeSortBy("Alphabetical")}}/>
            <SortButtons text="Nombre: Z-A" changeSorting={() => {changeSortBy("ReverseAlphabetical")}}/>
            <SortButtons text="Precio: Mayor a menor" changeSorting={() => {changeSortBy("DescendingPrice")}}/>
            <SortButtons text="Precio: Menor a mayor" changeSorting={() => {changeSortBy("AscendingPrice")}}/>
            <SortButtons text="Puntuación: Mayor a menor" changeSorting={() => {changeSortBy("DescendingRate")}}/>
            <SortButtons text="Puntuación: Menor a mayor" changeSorting={() => {changeSortBy("AscendingRate")}}/>
        </aside>
    )
}