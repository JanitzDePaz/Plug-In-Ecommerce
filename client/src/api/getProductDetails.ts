export const getProductDetails = async (productSlug : string) => {
    const res = await fetch(`http://localhost:8080/products/${productSlug}`)

    if(!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const productDetails = await res.json()
    const deliveryDate = new Date(productDetails.estimateDeliveryDays)
    

    const cleanProductDetails : ShowProductDetailsProp = {
        id: productDetails.id,
        slug: productDetails.slug,
        name: productDetails.name,
        description: productDetails.description,
        longDescription: productDetails.longDescription,
        price: productDetails.price,
        category: productDetails.category,
        rate: productDetails.rate,
        estimatedDate: deliveryDate,
        dayName: deliveryDate.toLocaleDateString("es-ES", {weekday: "long"}),
        monthName: deliveryDate.toLocaleDateString("es-ES", {month: "long"}),
        imgUrl: productDetails.imgUrl,
        mainImg: productDetails.mainImg,
        active: productDetails.active,
        stock: productDetails.stock,
        brand: productDetails.brand,
        discount: productDetails.discount,
        specifications: productDetails.specifications,
    }
    return cleanProductDetails
}