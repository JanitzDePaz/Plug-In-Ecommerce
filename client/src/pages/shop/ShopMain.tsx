import { useEffect, useState } from "react";
import { getProducts } from "src/api/getProducts";
import { ProductCards } from "src/components/cards/ProductCards";
import { categoryFilterStorage } from "src/stores/shopStore";

export const ShopMain = () =>{
    const [productData, setProductData] = useState<productProp[]>([])
    const {categoryFilter} = categoryFilterStorage()
    useEffect( () => {
        const productsData = async() =>{
            const data = await getProducts()
            setProductData(data)
        }
        
       productsData()
    },[])

    const filteredData = categoryFilter === "Empty" ? productData : productData.filter(obj => obj.category === categoryFilter)
    return(
         <main className="w-full mx-auto grid grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] gap-5">
            {   
                filteredData.map((prod) => (
                <ProductCards name={prod.name} price={prod.price} imgUrl={prod.imgUrl} rating={prod.rate} deliveryDays={prod.deliveryDays} active={prod.active}/>
            ))}
            

        </main>


    )
}