import clsx from "clsx";
export const ShopButtons = ({
  typeOfButton,
  text,
  customCSS,
  icon,
}: ButtonProps) => {
    const iconAlt = icon.split("/").pop()
  return (
    <button
      className={clsx(
        typeOfButton == "blue" && `py-3 px-6 text-white text-xl font-medium border-white bg-blue-500 rounded-lg hover:bg-blue-600 duration-100`,
        typeOfButton == "gray" && `py-2 px-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100 duration-100`,
        customCSS
      )}
    >
      <img src={icon} alt={iconAlt}></img>
      {text}
    </button>
  );
};
