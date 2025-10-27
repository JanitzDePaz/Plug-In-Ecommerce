import { headerItems } from "constants/headerItems";
import { Link } from "react-router";

export default function Header(){
    return(
        <header className="flex-between border-b-1 border-red max-h-[10vh] p-4">
            <img src="ShoppingCart.svg" alt="Logo icon" />
            <nav className="hidden md:block">
                <ul className="flex gap-5">
                    {headerItems.map((item, i) => (
                        <li key={i}>
                            <Link  className="text-[#142B4E]" to={item.to}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex-between gap-4">
                <button className="header-button">
                    <img src="Header/Search.svg" alt="Loupe icon" />
                </button>
                <button className="header-button">
                    <img src="Header/ShoppingCart.svg" alt="Shopping cart icon" />
                </button>
                <button className="header-button">
                    <img src="Header/HeaderMenu.svg" alt="MenuIcon" />
                </button>
            </div>
        </header>
    );
}
