export const getProductDetails = async (productSlug : string) => {
    const res = await fetch(`http://localhost:8080/products/${productSlug}`)

    if(!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const productDetails = await res.json()
    return productDetails
}