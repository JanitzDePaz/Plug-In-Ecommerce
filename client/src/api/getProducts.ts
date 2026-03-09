export const getProducts = async () => {
  const url = import.meta.env.API_URL;

  const res = await fetch(`${url}/products`);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const productsData = await res.json();

  const cleanProducts: ProductCardsData[] = [];

  productsData.forEach((prod: ProductCardPropDTO) => {
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
