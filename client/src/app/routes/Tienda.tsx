import { useEffect } from "react";
import { getProducts } from "src/api/getProducts";
import { ShopFilters } from "src/pages/shop/ShopFilters";
export default function Tienda(){
    useEffect(() => {
        getProducts()
    },[])
    
    return(
        <ShopFilters />
    );
}