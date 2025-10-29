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