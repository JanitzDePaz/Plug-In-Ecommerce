import clsx from "clsx"

export const ShopFilters = () => {

    return(
        <aside className="max-w-3/10 border">
            <h3 className="text-center text-2xl">Filtros</h3>
            <div className="flex-center flex-col px-5">
                <div className="flex justify-between">
                    <label htmlFor="minPrice" className="w-20 text-xs">Min price</label>
                    <label htmlFor="maxPrice" className="w-20 text-right text-xs">Max price</label>
                </div>
                <div className="flex justify-between gap-2 items-center ">
                    <input type="number" id="minPrice" placeholder="0" className="border w-20 no-spinner text-center"/>
                    <hr className="w-5"/>                      
                    <input type="number" id="maxPrice"  placeholder="2000" className="border w-20 no-spinner text-center"/>
                </div>  
            </div>
            
        </aside>
    )
}