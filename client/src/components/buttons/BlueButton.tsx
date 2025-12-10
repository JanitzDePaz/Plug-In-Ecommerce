export const BlueButton = ({text, customCSS} : ButtonProps) => (
    <button className={`py-3 px-6 text-white text-xl font-medium border-white bg-blue-500 rounded-lg hover:bg-blue-600 duration-100 ${customCSS}`}>{text}</button>
)