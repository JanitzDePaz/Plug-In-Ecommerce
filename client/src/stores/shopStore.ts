import { create } from "zustand";

export const categoryFilterStorage = create<CategoryFiltersProp>((set) => ({
  categoryFilter: "Empty",
  setCategoryFilter: (category) => set({ categoryFilter: category }),
}));

export const filterStorage = create<FilterProps>((set) => ({
  minPrice: 0,
  setMinPrice: (min) => set({ minPrice: min }),

  maxPrice: 10000,
  setMaxPrice: (max) => set({ maxPrice: max }),

  minRate: 0,
  setMinRate: (min) => set({ minRate: min }),

  maxRate: 10,
  setMaxRate: (max) => set({ maxRate: max }),

  absoluteMaxRate: 10,
  setAbsoluteMaxRate: (max) => set({ absoluteMaxRate: max }),

  absoluteMaxPrice: 10000,
  setAbsoluteMaxPrice: (max) => set({ absoluteMaxPrice: max }),
}));

export const sortStorage = create<SortProps>((set) => ({
  sortBy: "Alphabetical",
  setSortBy: (sort) => set({ sortBy: sort }),
}));

export const productSummaryStorage = create<ProductSummaryProp>((set) => ({
  mainImg: "Empty",
  setMainImg: (product) => set({ mainImg: product }),
}));

export const mobileShopState = create<MobileShopState>((set) => ({
  activeMobileShop: false,
  setMobileShopState: (bool) => set({ activeMobileShop: bool }),
}));
