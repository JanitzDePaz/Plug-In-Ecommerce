import { create } from "zustand";


export const categoryFilterStorage = create<CategoryFiltersProp>((set) => ({
    categoryFilter: "Empty",
    changeCategoryFilter: (category) => set({categoryFilter: category})
}))


export const filterStorage = create<FilterProps>((set) => ({
    minPrice: 0,
    changeMinPrice: (min) => set({minPrice: min}),

    maxPrice: 10000,
    changeMaxPrice: (max) => set({maxPrice: max}),

    minRate: 0,
    changeMinRate: (min) => set({minRate: min}),
    
    maxRate: 10,
    changeMaxRate: (max) => set({maxRate: max}),
}))

export const sortStorage = create<SortProps>((set) => ({
    sortBy: "Alphabetical",
    changeSortBy: (sort) => set({sortBy: sort})
}))
