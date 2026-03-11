import { ShopTopFilters } from "src/pages/shop/ShopTopFilters";
import { ShopFilters } from "src/pages/shop/ShopFilters";
import { ShopMain } from "src/pages/shop/ShopMain";
import { MobileFilters } from "src/pages/shop/MobileFilters";
import clsx from "clsx";
import { mobileShopState } from "src/stores/shopStore";

export default function Tienda() {
  const activeMobileShop = mobileShopState((e) => e.activeMobileShop)
  const setMobileShopState = mobileShopState((e) => e.setMobileShopState)
  return (
    <main className="flex-center md:flex-row gap-10 lg:gap-20 w-[95vw] md:w-[90vw] lg:w-[85vw] py-10 md:py-15 m-auto relative">
      
      <div className="hidden md:block w-3xs">
        <ShopFilters />
      </div>
        
        <ShopMain />
        <button
        onClick={() => setMobileShopState(true)}
        className="md:hidden fixed left-2 z-40 bg-black text-white p-4 rounded-full shadow-2xl active:scale-95 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      </button>
      <MobileFilters />
    </main>
  );
}
