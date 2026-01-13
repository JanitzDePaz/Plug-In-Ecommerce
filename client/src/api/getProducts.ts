export const getProducts = async () => {
  const res = await fetch("http://localhost:8080/products");

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const productsData = await res.json();

  const cleanProducts: ShopProductCardProp[] = [];

  productsData.forEach((prod : ShopProductCardPropDTO) => {
    const deliveryDate = new Date(prod.estimateDeliveryDays);

    const cleanProd = {
      id: prod.id,
      name: prod.name,
      slug: prod.slug,
      price: prod.price,
      imgUrl: prod.imgUrl,
      rate: prod.rate,
      category: prod.category,
      estimatedDate: deliveryDate,
      dayName: deliveryDate.toLocaleDateString("es-ES", { weekday: "long" }),
      monthName: deliveryDate.toLocaleDateString("es-ES", { month: "long" }),
      active: prod.active,
      discount: prod.discount,
    };

    cleanProducts.push(cleanProd);
  });

  return cleanProducts;
};
