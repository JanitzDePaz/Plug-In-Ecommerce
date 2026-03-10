import { shopTopFilterItems } from "src/constants/shopTopFilterItems";
import { categoryFilterStorage } from "src/stores/shopStore";
export const ShopTopFilters = () => {
  const { setCategoryFilter: changeCategoryFilter } = categoryFilterStorage();

  return (
    <nav className="flex justify-center gap-5 flex-wrap ">
      {shopTopFilterItems.map((btn, i) => (
        <button
          key={i}
          onClick={() => changeCategoryFilter(btn.filter)}
          className="py-2 px-4 border border-gray-400 text-lg rounded-sm hover:bg-gray-200 hover:border-[#163461]"
        >
          {btn.name}
        </button>
      ))}
    </nav>
  );
};
