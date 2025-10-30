import { cartStorage } from "stores/menuStore"
import clsx from "clsx"

export const CartMenu = () => {
    const {cartMenu, closeCart} = cartStorage()

    return(
        <nav className={clsx("opacity-0 bg-white max-h-85vh] min-h-[70vh] overflow-y-scroll w-full md:min-w-[20vw] md:max-w-[30vw] absolute top-full right-0 border-2 border-black duration-200", cartMenu ? "translate-y-0 opacity-100"  : "translate-x-full opacity-0")}>
            
        </nav>
    )

}