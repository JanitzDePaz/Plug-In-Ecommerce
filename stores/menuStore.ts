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
    headsetColor1: "#B0D6D9",
    headsetColor2: "#C4C4C4",
    changeColorAquamarine: () => set({headsetColor1: "#B0D6D9", headsetColor2: "#C4C4C4"}),
    changeColorPurple: () => set({headsetColor1: "#C091CC", headsetColor2: "#C4C4C4"}),
    changeColorWhite: () => set({headsetColor1: "#fff", headsetColor2: "#C4C4C4"})
}))