import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProducts } from "src/api/getProducts";

export default function ProductPage(){
    const { productName } = useParams();
    const [ product, setProduct ] = useState<ShowProductProp | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const products: ShowProductProp[] = await getProducts();
            const foundProduct = products.find((prod) => prod.name === productName);
            setProduct(foundProduct || null);
        }

        fetchProduct();
    }, [productName]);
    return(
        <main className="flex w-5/6 h-screen m-auto bg-gray-50">
            <div className="flex aspect-square h-2/3">
                <img src={`/public/${product?.imgUrl}`} alt="" />
                <div></div>
            </div>
        </main>
    )
}