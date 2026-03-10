import { useEffect, useState } from "react";
import { getProducts } from "src/api/getProducts";
import { ProductCards } from "src/components/cards/ProductCards";
import { categoryFilterStorage } from "src/stores/shopStore";
import { filterStorage } from "src/stores/shopStore";
import { sortStorage } from "src/stores/shopStore";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { loading } from "src/animations/loadingAnimation";

export const ShopMain = () => {
  const [productData, setProductData] = useState<ProductCardsData[]>([]);
  const categoryFilter = categoryFilterStorage((e) => e.categoryFilter);
  const changeMaxPrice = filterStorage((e) => e.setMaxPrice);
  const changeAbsoluteMaxPrice = filterStorage((e) => e.setAbsoluteMaxPrice);
  const minPrice = filterStorage((e) => e.minPrice);
  const maxPrice = filterStorage((e) => e.maxPrice);
  const changeAbsoluteMaxRate = filterStorage((e) => e.setAbsoluteMaxRate);
  const changeMaxRate = filterStorage((e) => e.setMaxRate);
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
    if (productData.length < 1) {
      const loadingAni = loading("dot");
      return () => {
        loadingAni.kill();
      };
    }
  }, [productData.length]);

  useEffect(() => {
    if (productData.length > 1) {
      const newMaxPrice = Math.max(...productData.map((prod) => prod.price));
      const newMaxRate = Math.max(...productData.map((prod) => prod.rate));
      changeAbsoluteMaxPrice(newMaxPrice);
      changeMaxPrice(newMaxPrice);
      changeAbsoluteMaxRate(newMaxRate / 2);
      changeMaxRate(newMaxRate / 2);
    }
  }, [productData]);

  const filteredData = productData.filter((obj) => {
    const filteredByCategory =
      categoryFilter === "Empty" ? true : obj.category === categoryFilter;
    const filteredByPrice = obj.price >= minPrice && obj.price <= maxPrice;
    const filteredByRate = obj.rate / 2 >= minRate && obj.rate / 2 <= maxRate;
    return filteredByCategory && filteredByPrice && filteredByRate;
  });

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
    <main
      className={clsx(
        "w-full h-fit mx-auto",
        productData.length < 1
          ? "flex justify-center items-center min-h-[70vh]"
          : "grid grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] gap-5",
      )}
    >
      {productData.length < 1 ? (
        <div className="flex items-end gap-1">
          <h1 className="text-2xl font-semibold h-fit text-gray-700">
            Cargando
          </h1>
          <div className="flex gap-1 mb-2">
            <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      ) : (
        filteredData.map((prod, key) => {
          return (
            <Link to={`/DetallesDelProducto/${prod.slug}`} key={key}>
              <ProductCards
                name={prod.name}
                price={prod.price}
                imgUrl={prod.imgUrl}
                rating={prod.rate}
                deliveryDays={prod.estimatedDate}
                dayName={prod.dayName}
                monthName={prod.monthName}
                active={prod.active}
                discount={prod.discount}
              />
            </Link>
          );
        })
      )}
    </main>
  );
};
