import { useEffect } from "react";
import { getProducts } from "src/api/getProducts";
export default function Tienda(){
    useEffect(() => {
        getProducts()
    },[])
    
    return(
        <div>Tienda</div>
    );
}