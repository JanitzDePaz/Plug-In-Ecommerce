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