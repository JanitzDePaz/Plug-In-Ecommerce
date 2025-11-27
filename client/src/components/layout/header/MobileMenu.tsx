import { menuStorage } from "src/stores/menuStore";
import { headerItems } from "src/constants/headerItems";
import { Link } from "react-router";
import clsx from "clsx";

export default function MobileMenu() {
  const { openedMenu, closeMenu } = menuStorage();
  return (
    <nav
      className={clsx(
        "z-50 absolute top-0 left-0 h-full w-full bg-[#1b1b1bfa] md:hidden duration-300",
        openedMenu
          ? "traslate-y-full opacity-100"
          : "translate-y-[-100vh] opacity-0"
      )}
    >
      <ul className="flex flex-col gap-5 p-10">
        {headerItems.map((item, i) => (
          <li key={i}>
            <Link
              className="text-white text-2xl"
              to={item.to}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
