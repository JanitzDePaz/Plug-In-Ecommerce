export const SortButtons = ({text, changeSorting} : SortButtons ) => {
    return(
        <button className="py-2 px-3 border border-gray-400 text-md rounded-sm hover:bg-gray-200 hover:border-[#163461]" onClick={changeSorting}>{text}</button>
    )}