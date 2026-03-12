import { shopTopFilterItems } from "src/constants/shopTopFilterItems";
import { categoryFilterStorage } from "src/stores/shopStore";
export const ShopTopFilters = () => {
  const { setCategoryFilter: changeCategoryFilter } = categoryFilterStorage();

  return (
    <nav className="flex-center gap-5 flex-col py-5">
      <h3 className="text-center text-xl block md:hidden">Tipo</h3>
      <div className="md:flex gap-2 md:flex-wrap md:justify-around grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
        {shopTopFilterItems.map((btn, i) => (
          <button
            key={i}
            onClick={() => changeCategoryFilter(btn.filter)}
            className=" py-2 px-4 border border-gray-400 text-lg rounded-sm hover:bg-gray-200 hover:border-[#163461]"
          >
            {btn.name}
          </button>
        ))}
      </div>
    </nav>
  );
};
