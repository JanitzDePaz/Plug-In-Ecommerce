import clsx from "clsx";
import { mobileShopState } from "src/stores/shopStore";
import { ShopFilters } from "./ShopFilters";
import { ShopTopFilters } from "./ShopTopFilters";
export const MobileFilters = () => {
  const activeMobileShop = mobileShopState((e) => e.activeMobileShop);
  const setMobileShopState = mobileShopState((e) => e.setMobileShopState);

  return (
    <div
      className={clsx(
        "fixed inset-0 overflow-auto z-50 bg-white p-8 transition-transform duration-300 md:relative md:inset-auto md:z-0 md:p-0 md:translate-x-0 w-full md:w-fit",
        activeMobileShop ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <button
        className="md:hidden absolute top-5 right-5 text-gray-500 font-bold text-xl"
        onClick={() => setMobileShopState(false)}
      >
        ✕
      </button>
      <div className="block md:hidden">
        <ShopTopFilters />
        <ShopFilters />
      </div>

      <button
        onClick={() => setMobileShopState(false)}
        className="md:hidden w-full bg-black text-white py-4 mt-10 rounded-xl font-semibold"
      >
        Cerrar
      </button>
    </div>
  );
};
