import { headerItems } from "constants/headerItems";
import { Link } from "react-router";
import Menu from "./Menu";
import { menuStorage } from "stores/menuStore";
import { searchStorage } from "stores/menuStore";
import clsx from "clsx";

export default function Header(){

    const {openedMenu, toggleMenu, closeMenu} = menuStorage()
    const {searchInput, toggleSearchInput} = searchStorage()

    return(
        <header className="flex-between border-b-2 border-black max-h-[15vh] p-6">
            <img src="Header/PlugInLogo.svg" alt="Logo icon" />
            <nav className="hidden md:block">
                <ul className="flex md:gap-10 gap-5">
                    {headerItems.map((item, i) => (
                        <li key={i} className="hover:scale-110 duration-100">
                            <Link  className="text-[#163461] hover:text-" to={item.to}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex-between gap-4">
                
                <button className="header-button relative" >
                    <input name="Input" placeholder="Buscar" className={clsx("-translate-x-[260px] w-56 absolute border-2 border-[#ccc] px-2 py-1 rounded-[50px] shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-md top-1/2 -translate-y-1/2 trasform-opacity", searchInput ? "animate-fade-in-left opacity-100" : "animate-fade-out-right opacity-0" )}/>
                    <img src="Header/Search.svg" alt="Magnifying glass icon" onClick={toggleSearchInput} />
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
