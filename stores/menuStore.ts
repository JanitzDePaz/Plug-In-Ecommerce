import { create } from 'zustand';

type menuProp = {
    openedMenu: boolean,
    openMenu: () => void,
    closeMenu: () => void
}

export const menuStorage = create<menuProp>((set) => ({
    openedMenu: false,
    openMenu: () => set((state) => ({openedMenu:true})),
    closeMenu: () => set({openedMenu: false})
}))