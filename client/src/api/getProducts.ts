export const getProducts = async () => {
    const res = await fetch("http://localhost:8080/products")

    if(!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const productsData = await res.json()

    console.log(productsData)
    return productsData
}