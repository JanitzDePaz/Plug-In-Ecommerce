import { ShopTopFilters } from "src/pages/shop/ShopTopFilters";
import { ShopFilters } from "src/pages/shop/ShopFilters";
import { ShopMain } from "src/pages/shop/ShopMain";
export default function Tienda(){
   
    return(
        <main className="flex-center gap-20 w-[80vw] py-15 m-auto">
            <ShopFilters />
            <div className="flex flex-1 gap-10 flex-col min-h-[85vh]">
                <ShopTopFilters />
                <ShopMain />
            </div>
            
        </main> 
    );
}