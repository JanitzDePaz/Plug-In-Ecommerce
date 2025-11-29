
import { ShopFilters } from "src/pages/shop/ShopFilters";
import { ShopMain } from "src/pages/shop/ShopMain";
export default function Tienda(){
   
    return(
        <div className="flex justify-center gap-10 w-8/10 mx-auto my-5">
            <ShopFilters />
            <ShopMain />
        </div>
            
    );
}