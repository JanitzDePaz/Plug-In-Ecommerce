import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductDetails } from "src/api/getProductDetails";
import { productSummaryStorage } from "src/stores/shopStore";
import { Link } from "react-router";
import { RateStars } from "src/components/indicators/RateStars";
import { GrayButton } from "src/components/buttons/GrayButton";
import { BlueButton } from "src/components/buttons/BlueButton";

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

    const deliveryDate = new Date(product.estimateDeliveryDays)
    const dayName = deliveryDate.toLocaleDateString("es-ES", {weekday: "long"})
    const monthName = deliveryDate.toLocaleDateString("es-ES", {month: "long"})

   
    return(
        <main className="flex flex-col gap-5 justify-around min-h-[85vh] my-5 w-9/10 m-auto">
            <Link to="/Tienda"><GrayButton text="← Volver a la tienda" customCSS=""/></Link>
            <span className="flex justify-evenly flex-1 gap-5">
                <section className="flex flex-col gap-5 w-5/15">
                    <img src={`/public/${mainImg}`} alt={`Main img for ${product.name}`} className="w-full"/>
                    <span className="flex-center gap-4">
                            {product.imgUrl.map((url, i) => (
                                <button className="bg-transparent border-2 border-gray-300 rounded-lg aspect-square w-20 overflow-hidden">
                                    <img onMouseOver={() => changeMainImg(url)} src={`${url}`} key={i} alt={`Imagen ${i+1} del ${product.category} ${product.name}`} className="w-full h-full p-2"></img>
                                </button>
                            ))}
                    </span>
                </section>
                <section className="flex flex-col gap-8 py-5 w-4/15 px-8">
                    <h2 className="text-2xl text-center font-medium">{product.name}</h2>
                    <p className="text-[1.2rem]">{product.longDescription}</p>
                    <ul className="flex-1 flex flex-col gap-4 list-disc list-inside">
                        {
                        product.specifications.map((spec, i) => (
                            <li className="text-[1.2rem]" key={i}>{spec}</li>
                        ))
                        }
                    </ul>
                    <div className="flex flex-col gap-5">
                        <p>Opiniones de los usuarios</p>
                        <RateStars rate={product.rate} />
                        <GrayButton text="Mira las opiniones" customCSS={""} /> 
                    </div>
                </section>
                <section className="bg-gray-200  h-fit flex flex-col gap-5 py-5 w-3/15 px-8 rounded-lg">
                        <div className="flex justify-between">
                            <h2 className="text-2xl text-red-600 font-bold">{product.price}€</h2>
                            {product.discount > 0 ? <p className="text-[0.7rem] font-extrabold bg-blue-700 p-2 rounded-lg w-fit h-fit text-white">{product.discount}% de descuento</p> : null  }
                        </div>

                        <p>Recibe el pedido a partir del {dayName}, {deliveryDate.getDay()} de {monthName}</p>
                        
                        <BlueButton text="Añadir al carrito" customCSS={""}/>
                </section>
            </span>
            
        </main>
    )
}