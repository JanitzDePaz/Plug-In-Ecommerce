import { create } from "zustand";

export const filterMenu = create<activeFiltersMenuProp>((set) => ({
    activeFilterMenu: false,
    openFilterMenu: () => set({activeFilterMenu: true}),
    closeFilterMenu: () =>  set({activeFilterMenu: false}),
}))

