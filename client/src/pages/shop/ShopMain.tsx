import { useEffect, useState } from "react";
import { getProducts } from "src/api/getProducts";
import { ProductCards } from "src/components/cards/ProductCards";

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
         <main className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] gap-5">
            {   
                productData.map((prod) => (
                <ProductCards name={prod.name} price={prod.price} imgUrl={prod.imgUrl} desc={prod.description} active={prod.active}/>
            ))}
            

        </main>


    )
}