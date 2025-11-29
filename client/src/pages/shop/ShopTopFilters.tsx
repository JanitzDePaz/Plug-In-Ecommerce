import { shopTopFilterItems } from "src/constants/shopTopFilterItems"
export const ShopTopFilters = () => {
    return(
        <nav className="flex gap-5 py-5">
            {
                shopTopFilterItems.map((btn, i) => (
                    <button key={i} className="py-2 px-4 border border-gray-400 text-lg rounded-sm hover:bg-gray-200 hover:border-[#163461]">{btn.name}</button>

                ))
            }
        </nav>
    )
}