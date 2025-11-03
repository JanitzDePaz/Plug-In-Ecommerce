type menuProp = {
    openedMenu: boolean,
    toggleMenu: () => void,
    closeMenu: () => void
}

type searchProp ={
    searchInput: boolean,
    toggleSearchInput: () => void,
    outSearch: () => void
}


type cartProp = {
    cartMenu: boolean,
    toggleCart: () => void,
    closeCart: () => void
}

type HeadsetColorProp = {
    headsetColor1: string,
    headsetColor2: string,
    changeColorAquamarine: () => void,
    changeColorPurple: () => void,
    changeColorWhite: () => void
}
