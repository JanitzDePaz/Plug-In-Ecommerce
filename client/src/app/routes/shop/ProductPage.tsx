import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProducts } from "src/api/getProducts";

export default function ProductPage(){
    const { productName } = useParams();
    const [ product, setProduct ] = useState<productProp | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const products: productProp[] = await getProducts();
            const foundProduct = products.find((prod) => prod.name === productName);
            setProduct(foundProduct || null);
        }

        fetchProduct();
    }, [productName]);
    return(
        <div>
             <div>{product?.name}</div>
            <div>{product?.price}</div>
            <div>{product?.rate}</div>
            <div>{product?.category}</div>
            <div>{product?.deliveryDays}</div>
        </div>
       
    )
}