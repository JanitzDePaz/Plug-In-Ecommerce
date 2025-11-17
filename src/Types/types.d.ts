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


type LandingPrimaryButtonProps = {
    text: string,
    route: string
}

type ChangeColorButtonProps = {
    color: string;
    onClick: () => void;
};

type ScreenDataCardsProps = {
    header: String,
    ref: React.RefObject<HTMLHeadingElement> | null,
    svg: String,
    alt: String,
    value: String
}

type typingTestProp ={
    activeTypingTest: boolean,
    activateTypingTest: () => void,
    closeTypingTest: () => void,

    typingTestTimer: number,
    addSeconds: () => void,
    restartTypingTestTimer: () => void,

    textToWrite: string,
    changeTextToWrite: (string) => void
}