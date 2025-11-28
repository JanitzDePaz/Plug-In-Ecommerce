import { useEffect, useState } from "react";
import { getProducts } from "src/api/getProducts";
import { ProductCards } from "src/components/cards/ProductCards";
import { ShopFilters } from "./ShopFilters";

    

export const ShopMain = () =>{
    const [productData, setProductData] = useState<productProp[]>([])

    useEffect( () => {
        const productsData = async() =>{
            const data = await getProducts()
            setProductData(data)
        }
        
       productsData()
    },[])
        console.log(productData)
    return(
        <>
            <ShopFilters />
            <main className="mx-auto my-10 w-[90vw] grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-10">
                {   
                    productData.map((prod) => (
                    <ProductCards name={prod.name} price={prod.price} imgUrl={prod.imgUrl} desc={prod.description} active={prod.active}/>
                ))}
                

            </main>
            
        </>

    )
}