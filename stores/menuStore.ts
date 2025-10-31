import { create } from 'zustand';

type menuProp = {
    openedMenu: boolean,
    toggleMenu: () => void,
    closeMenu: () => void
}

export const menuStorage = create<menuProp>((set) => ({
    openedMenu: false,
    toggleMenu: () => set((state) => ({openedMenu: !state.openedMenu})),
    closeMenu: () => set({openedMenu:false})
}));

type searchProp ={
    searchInput: boolean,
    toggleSearchInput: () => void,
    outSearch: () => void
}

export const searchStorage = create<searchProp>((set) => ({
    searchInput: false,
    toggleSearchInput: () => set((state) => ({searchInput: !state.searchInput})),
    outSearch: () => ({searchInput: false})
}))

type cartProp = {
    cartMenu: boolean,
    toggleCart: () => void,
    closeCart: () => void
}

export const cartStorage = create<cartProp>((set) => ({
    cartMenu: false,
    toggleCart: () => set((state) => ({cartMenu: !state.cartMenu})),
    closeCart: () => ({CartMenu: false})
}))

type HeadsetColorProp = {
    headsetColor1: string,
    headsetColor2: string,
    changeColorBlack: () => void,
    changeColorWhite: () => void
}

export const headsetColorControl = create<HeadsetColorProp>((set) => ({
    headsetColor1: "#615E74",
    headsetColor2: "#3D3B3B",
    changeColorBlack: () => set({headsetColor1: "#615E74", headsetColor2: "#3D3B3B"}),
    changeColorWhite: () => set({headsetColor1: "#E8E6E6", headsetColor2: "#D6D6D6"})
}))