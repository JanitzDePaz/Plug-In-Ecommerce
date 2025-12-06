import { ShopTopFilters } from "src/pages/shop/ShopTopFilters";
import { ShopFilters } from "src/pages/shop/ShopFilters";
import { ShopMain } from "src/pages/shop/ShopMain";
export default function Tienda(){
   
    return(
        <main className="flex flex-col items-center">
            <ShopTopFilters />
            <div className="flex justify-center gap-10 w-8/10 my-5">
                <ShopFilters />
                <ShopMain />
            </div>
        </main> 
    );
}