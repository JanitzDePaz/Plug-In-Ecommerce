import { headerItems } from "constants/headerItems";
import { Link } from "react-router";
import Menu from "./Menu";
import { menuStorage } from "stores/menuStore";

export default function Header(){

    const {openedMenu, toggleMenu, closeMenu} = menuStorage()
    
    return(
        <header className="flex-between border-b-2 border-black max-h-[15vh] p-6">
            <img src="Header/PlugInLogo.svg" alt="Logo icon" />
            <nav className="hidden md:block">
                <ul className="flex md:gap-10 gap-5">
                    {headerItems.map((item, i) => (
                        <li key={i} className="hover:scale-110 duration-100">
                            <Link  className="text-[#142B4E]" to={item.to}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex-between gap-4">
                <button className="header-button">
                    <img src="Header/Search.svg" alt="Magnifying glass icon" />
                </button>
                <button className="header-button">
                    <img src="Header/ShoppingCart.svg" alt="Shopping cart icon" />
                </button>
                {openedMenu
                ?   <button className=" block  md:hidden header-button z-10" onClick={closeMenu}>
                        <img src="Header/CloseMenu.svg" alt="CloseMenuIcon" className="w-6 h-6"/>
                    </button> 
                    
                :   
                    <button className="block  md:hidden header-button" onClick={toggleMenu}>
                        <img src="Header/HeaderMenu.svg" alt="MenuIcon"/>
                    </button>
                }
                   
            </div>
            <Menu />
        </header>
    );
}
