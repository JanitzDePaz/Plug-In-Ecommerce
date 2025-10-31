import { create } from 'zustand';

export const menuStorage = create<menuProp>((set) => ({
    openedMenu: false,
    toggleMenu: () => set((state) => ({openedMenu: !state.openedMenu})),
    closeMenu: () => set({openedMenu:false})
}));

export const searchStorage = create<searchProp>((set) => ({
    searchInput: false,
    toggleSearchInput: () => set((state) => ({searchInput: !state.searchInput})),
    outSearch: () => ({searchInput: false})
}))

export const cartStorage = create<cartProp>((set) => ({
    cartMenu: false,
    toggleCart: () => set((state) => ({cartMenu: !state.cartMenu})),
    closeCart: () => ({CartMenu: false})
}))

export const headsetColorControl = create<HeadsetColorProp>((set) => ({
    headsetColor1: "#A28C7F",
    headsetColor2: "#D6C4B0",
    changeColorBlack: () => set({headsetColor1: "#A28C7F", headsetColor2: "#D6C4B0"}),
    changeColorWhite: () => set({headsetColor1: "#E8E6E6", headsetColor2: "#D6D2CC"})
}))