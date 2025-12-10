import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductDetails } from "src/api/getProductDetails";

export default function ProductPage(){
    const { slug } = useParams();
    const [ product, setProduct ] = useState<ShowProductDetailsProp | null>(null);
    const mainImg = productSummaryStorage((e) => e.mainImg)
    const changeMainImg = productSummaryStorage((e) => e.changeMainImg)


    useEffect(() => {
        const fetchProduct = async () => {
            const product: ShowProductDetailsProp = await getProductDetails(slug!);
            setProduct(product);
        }

        fetchProduct();
        
    }, [slug]);

    useEffect(() => {
        if(product){
            changeMainImg(product.mainImg);
        }
    }, [product, changeMainImg]);

    if(!product){
        return <div>Loading...</div>
    }
    console.log(product)
    return(
        <main className="flex w-5/6 h-screen m-auto bg-gray-50">
            <div className="flex flex-col w-1/2 p-4">
                <img src={`/public/${product.mainImg}`} alt={`Main img for ${product.name}`} />
                <div className="flex">
                    {product.imgUrl.map((url, i) => (
                        <img src={`${url}`} key={i} alt={`Imagen ${i} del ${product.category} ${product.name}`} className="w-full h-full "></img>
                    ))}
                </div>
            </div>
        </main>
    )
}