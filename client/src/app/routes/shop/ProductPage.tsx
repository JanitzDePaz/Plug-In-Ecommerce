import { useParams } from "react-router-dom"

export default function ProductPage(){
    const { productName } = useParams();

    if(!productName){
        return <div>No se ha encontrado el producto</div>
    }
    return(
        <div>{productName}</div>
)}