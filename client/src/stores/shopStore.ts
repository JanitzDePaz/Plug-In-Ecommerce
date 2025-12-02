import { create } from "zustand";


export const categoryFilterStorage = create<CategoryFiltersProp>((set) => ({
    categoryFilter: "Empty",
    changeCategoryFilter: (category) => set({categoryFilter: category})
}))