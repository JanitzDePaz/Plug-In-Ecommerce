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
    changeColorAquamarineContour: () => void,
    changeColorPurpleContour: () => void,
    changeColorWhiteContour: () => void,
    changeColorBlackContour: () => void,
    changeColorGrayPads: () => void,
    changeColorWhitePads: () => void,
    changeColorBlackPads: () => void,
    changeColorBrownPads: () => void,
}
