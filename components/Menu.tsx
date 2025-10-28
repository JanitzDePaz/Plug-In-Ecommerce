import { menuStorage } from "stores/menuStore";
import { headerItems } from "constants/headerItems";
import { Link } from "react-router";
import clsx from "clsx";

export default function Menu() {
    const {openedMenu} = menuStorage()
    console.log(openedMenu);
    return(
        <nav className={clsx("absolute top-0 left-0 h-full w-full bg-[#1b1b1bfa] md:hidden transform transition-transform duration-300", openedMenu ? "traslate-y-full" : "translate-y-[-100vh]")}>
            <ul className="flex flex-col gap-5 p-10">
                {headerItems.map((item, i) => (
                    <li key={i}>
                        <Link  className="text-white text-2xl" to={item.to}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}