import { create } from "zustand";


export const categoryFilterStorage = create<CategoryFiltersProp>((set) => ({
    categoryFilter: "empty",
    changeCategoryFilter: (category) => set({categoryFilter: category})
}))