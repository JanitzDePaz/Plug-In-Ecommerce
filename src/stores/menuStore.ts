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
    changeColorAquamarineContour: () => set({headsetColor1: "#B0D6D9"}),
    changeColorPurpleContour: () => set({headsetColor1: "#C091CC"}),
    changeColorWhiteContour: () => set({headsetColor1: "#fff"}),
    changeColorBlackContour: () => set({headsetColor1: "#3a3a3a"}),
    changeColorGrayPads: () => set({headsetColor2: "#C4C4C4"}),
    changeColorWhitePads: () => set({headsetColor2: "#fff"}),
    changeColorBlackPads: () => set({headsetColor2: "#2E2E2E"}),
    changeColorBrownPads: () => set({headsetColor2: "#574C44"}),
}))

export const typingTestStorage = create<typingTestProp>((set) => ({
    activeTypingTest: false,
    activateTypingTest: () => set({activeTypingTest: true}),
    desactivateTypingTest: () => set({activeTypingTest: false}),

    typingTestTimer: 0,
    addSeconds: () => set((state) => ({typingTestTimer: state.typingTestTimer+1})),
    restartTypingTestTimer: () => set({typingTestTimer: 0}),

    workingTimer: false,
    activatedTimer: () => set({workingTimer: true}),
    desactivatedTimer: () => set({workingTimer: false}),

    textToWrite: "",
    changeTextToWrite: (text) => set({textToWrite: text}),

    lastTextWrited: "",
    updateLastTextWrited: (text) => set({lastTextWrited: text})
}))