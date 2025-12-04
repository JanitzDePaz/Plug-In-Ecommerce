import { useEffect, useState } from "react";
import { getProducts } from "src/api/getProducts";
import { ProductCards } from "src/components/cards/ProductCards";
import { categoryFilterStorage } from "src/stores/shopStore";
import { filterStorage } from "src/stores/shopStore";
import { sortStorage } from "src/stores/shopStore";

export const ShopMain = () => {
  const [productData, setProductData] = useState<productProp[]>([]);
  const categoryFilter = categoryFilterStorage((e) => e.categoryFilter);
  const changeMaxPrice = filterStorage((e) => e.changeMaxPrice);
  const minPrice = filterStorage((e) => e.minPrice);
  const maxPrice = filterStorage((e) => e.maxPrice);
  const sortBy = sortStorage((e) => e.sortBy);
  useEffect(() => {
    const productsData = async () => {
      const data = await getProducts();
      setProductData(data);
    };

    productsData();
  }, []);

  useEffect(() => {
    if(productData.length > 1){
      const newMaxPrice = Math.max(...productData.map((prod) => prod.price));
      changeMaxPrice(newMaxPrice);
    }
          
  }, [productData]);

  const filteredData = productData.filter((obj) => {
    const filteredByCategory =
      categoryFilter === "Empty" ? true : obj.category === categoryFilter;
    const filteredByPrice = obj.price >= minPrice && obj.price <= maxPrice;
    return filteredByCategory && filteredByPrice;
  });

  //Sort alphabetically
  if(sortBy === "Alphabetical"){
      filteredData.sort((a, b) => a.name.localeCompare(b.name));
  }


  return (
    <main className="w-full mx-auto grid grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] gap-5">
      {filteredData.map((prod, key) => (
        <ProductCards
          key={key}
          name={prod.name}
          price={prod.price}
          imgUrl={prod.imgUrl}
          rating={prod.rate}
          deliveryDays={prod.deliveryDays}
          active={prod.active}
        />
      ))}
    </main>
  );
};
