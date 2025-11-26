import clsx from "clsx"
import { filterMenu } from "src/stores/shopStore"
export const ShopFilters = () => {
    const { activeFilterMenu, openFilterMenu, closeFilterMenu} = filterMenu()

    return(
        <section className={clsx("border-black border-r relative transition-[1s]", activeFilterMenu  ? "translate-x" : "-translate-x-full")}>
            {activeFilterMenu 
                ?
                    (<button onClick={closeFilterMenu} className="rounded-full w-10 aspect-square text-2xl absolute right-0 top-0">&lt;</button>)
                :
                    (<button onClick={openFilterMenu} className="rounded-full w-10 aspect-square text-2xl absolute right-0 top-0 translate-x-full">&gt;</button>)
            }
            <div>
                <h3>Filtros</h3>
                
            </div>
            <div>

            </div>
            
        </section>
    )
}