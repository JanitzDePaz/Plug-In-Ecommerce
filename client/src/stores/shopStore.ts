import { create } from "zustand";


export const categoryFilterStorage = create<CategoryFiltersProp>((set) => ({
    categoryFilter: "Empty",
    changeCategoryFilter: (category) => set({categoryFilter: category})
}))


export const filterStorage = create<FilterProps>((set) => ({
    minPrice: 0,
    maxPrice: 10000,
    changeMinPrice: (min) => set({minPrice: min}),
    changeMaxPrice: (max) => set({maxPrice: max})
}))

export const sortStorage = create<SortProps>((set) => ({
    sortBy: "Alphabetical",
    changeSortBy: (sort) => set({sortBy: sort})
}))