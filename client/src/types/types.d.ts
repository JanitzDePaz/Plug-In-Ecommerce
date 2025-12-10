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
    route: string,
    style: string
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
    desactivateTypingTest: () => void,

    typingTestTimer: number,
    addSeconds: () => void,
    restartTypingTestTimer: () => void,

    workingTimer: boolean,
    activatedTimer: () => void,
    desactivatedTimer: () => void,

    textToWrite: string,
    changeTextToWrite: (string) => void,

    lastTextWrited: string,
    updateLastTextWrited: (string) => void

    wordPerMinute: float,
    changeWordPerMinute: (number) => void,

    wordPerSecond: float,
    changeWordPerSecond: (number) => void,

    writedWordsAccuracy: number,
    changeWordAccuracy: (number) => void

    stopTest: boolean,
    finishTest: () => void,
    StartTest: () => void
}

type typingTestCards = {
    numberResult: number,
    typingTestResultType: string
}

type activeFiltersMenuProp = {
    activeFilterMenu: boolean,
    openFilterMenu: () => void,
    closeFilterMenu: () => void,
}

type ShopProductCardProp = {
    id: number,
    name: string,
    slug: string,
    price: number,
    category: string,
    rate: number,
    deliveryDays: string,
    imgUrl: string,
    active: boolean,
}

type ShowProductDetailsProp = {
    id: number,
    slug: string,
    name: string,
    longDescription: string,
    price: number,
    category: string,
    rate: number,
    estimateDeliveryDays: string,
    imgUrl: string[],
    mainImg: string,
    active: boolean,
    stock: number,
    brand: string,
    specifications: string[],
    discount: number
}

type productCard = {
    name: string,
    price: number,
    imgUrl: string,
    rating: number,
    deliveryDays: string,
    active: boolean
}

type ProdRating = {
    rate: number
}

type CategoryFiltersProp = {
    categoryFilter: string,
    changeCategoryFilter: (string) => void
}



type SortProps = {
    sortBy: string,
    changeSortBy: (string) => void
}

type SortButtons = {
    text: string,
    changeSorting: () => void
}

type FilterProps = {
    minPrice: number,
    changeMinPrice: (number) => void,

    maxPrice: number,
    changeMaxPrice: (number) => void,
    
    minRate: number,
    changeMinRate: (number) => void,
     
    maxRate: number,
    changeMaxRate: (number) => void,
}


type ProductSummaryProp = {
    mainImg: string,
    changeMainImg: (string) => void
}

type ButtonProps = {
    text: string,
    customCSS: string,
}