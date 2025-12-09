import { useEffect, useState } from "react";
import { getProducts } from "src/api/getProducts";
import { ProductCards } from "src/components/cards/ProductCards";
import { categoryFilterStorage } from "src/stores/shopStore";
import { filterStorage } from "src/stores/shopStore";
import { sortStorage } from "src/stores/shopStore";
import { Link } from "react-router-dom";

export const ShopMain = () => {
  const [productData, setProductData] = useState<ShopProductCardProp[]>([]);
  const categoryFilter = categoryFilterStorage((e) => e.categoryFilter);
  const changeMaxPrice = filterStorage((e) => e.changeMaxPrice);
  const minPrice = filterStorage((e) => e.minPrice);
  const maxPrice = filterStorage((e) => e.maxPrice);
  const changeMaxRate = filterStorage((e) => e.changeMaxRate);
  const minRate = filterStorage((e) => e.minRate);
  const maxRate = filterStorage((e) => e.maxRate);
  const sortBy = sortStorage((e) => e.sortBy);
  
  useEffect(() => {
    const productsData = async () => {
      const data = await getProducts();
      setProductData(data);
    };

    productsData();
  }, []);

  useEffect(() => {
    if (productData.length > 1) {
      const newMaxPrice = Math.max(...productData.map((prod) => prod.price));
      const newMaxRate = Math.max(...productData.map((prod) => prod.rate));
      changeMaxPrice(newMaxPrice);
      changeMaxRate(newMaxRate/2);
    }
  }, [productData]);

  

  const filteredData = productData.filter((obj) => {
    const filteredByCategory =
      categoryFilter === "Empty" ? true : obj.category === categoryFilter;
    const filteredByPrice = obj.price >= minPrice && obj.price <= maxPrice;
    const filteredByRate = obj.rate/2 >= minRate && obj.rate/2 <= maxRate;
    return filteredByCategory && filteredByPrice && filteredByRate;
  });

  console.log(productData)
  console.log(filteredData)

  switch (sortBy) {
    case "Alphabetical":
      filteredData.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "ReverseAlphabetical":
      filteredData.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "DescendingPrice":
      filteredData.sort((a, b) => b.price - a.price);
      break;
    case "AscendingPrice":
      filteredData.sort((a, b) => a.price - b.price);
      break;
    case "AscendingRate":
      filteredData.sort((a, b) => a.rate - b.rate);
      break;
    case "DescendingRate":
      filteredData.sort((a, b) => b.rate - a.rate);
      break;
  }
  
  return (
    <main className="w-full h-fit mx-auto grid grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] gap-5">
      {filteredData.map((prod, key) => {
        return(
        <Link to= {`/DetallesDelProducto/${prod.slug}`} key={key} >
          <ProductCards
            name={prod.name}
            price={prod.price}
            imgUrl={prod.imgUrl}
            rating={prod.rate}
            deliveryDays={prod.deliveryDays}
            active={prod.active}
          />
        </Link>
      )})}
    </main>
  );
};
