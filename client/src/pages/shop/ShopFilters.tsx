import { filterStorage } from "../../stores/shopStore";
import { useRef } from "react";
import { SortButtons } from "src/components/buttons/SortButtoms";
import { sortStorage } from "../../stores/shopStore";

export const ShopFilters = () => {
  const maxPrice = filterStorage((e) => e.maxPrice);
  const maxRate = filterStorage((e) => e.maxRate);
  const changeMinPrice = filterStorage((e) => e.changeMinPrice);
  const changeMaxPrice = filterStorage((e) => e.changeMaxPrice);
  const changeMinRate = filterStorage((e) => e.changeMinRate);
  const changeMaxRate = filterStorage((e) => e.changeMaxRate);
  const changeSortBy = sortStorage((e) => e.changeSortBy);

  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);
  const minRateRef = useRef<HTMLInputElement>(null);
  const maxRateRef = useRef<HTMLInputElement>(null);

  return (
    <aside className="max-w-3/10 flex flex-col">
      <section className="flex flex-col gap-5">
        <h3 className="text-center text-xl">Filtros</h3>
        <section className="flex-center flex-col gap-5">
            <div className="flex flex-col gap-2">
                <h4>Precio</h4>
                <div className="flex justify-between items-center gap-2">
                    <input
                    ref={minPriceRef}
                    type="number"
                    id="minPrice"
                    placeholder="0"
                    onBlur={(e) =>{
                        const value = parseInt(e.target.value)
                        if(!isNaN(value)){
                          changeMinPrice(e.target.value)
                        }
                      }}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                        changeMinPrice(minPriceRef.current?.value);
                        }
                    }}
                    className="max-w-20 border no-spinner text-center py-1 px-2 border-gray-400 text-md rounded-sm"
                    />
                    <hr className="w-5" />
                    <input
                    ref={maxPriceRef}
                    type="number"
                    id="maxPrice"
                    placeholder={`${maxPrice}`}
                    onBlur={(e) => {
                        const value = parseInt(e.target.value)
                        if(!isNaN(value)){
                          changeMaxPrice(e.target.value)
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            changeMaxPrice(maxPriceRef.current?.value);
                        }
                    }}
                    className="max-w-20 border no-spinner text-center py-1 px-2 border-gray-400 text-md rounded-sm"
                    />
                </div>
            </div>
          

            <div className="flex flex-col gap-2">
                <h4 className="w-full">Valoración</h4>
                <div className="flex justify-between items-center gap-2">
                    
                    <input
                    ref={minRateRef}
                    type="number"
                    id="minRate"
                    placeholder="0"
                    onBlur={(e) =>{
                      const value = parseInt(e.target.value)
                      if(!isNaN(value)){
                        changeMinRate(e.target.value)
                      }
                    }
                        
                    }
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                        changeMinRate(minRateRef.current?.value);
                        }
                    }}
                    className="max-w-20 border no-spinner text-center py-1 px-2 border-gray-400 text-md rounded-sm"
                    />
                    <hr className="w-5" />
                    <input
                    ref={maxRateRef}
                    type="number"
                    id="maxRate"
                    placeholder={`${maxRate}`}
                    onBlur={(e) => {
                      const value = parseInt(e.target.value)
                      if(!isNaN(value)){
                        changeMaxRate(e.target.value)
                      }  
                    }}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                        changeMaxRate(maxRateRef.current?.value);
                        }
                    }}
                    className="max-w-20 border no-spinner text-center py-1 px-2 border-gray-400 text-md rounded-sm"
                    />
                </div>
            </div>
        </section>
    </section>
    <hr className="my-10"/>
    <section className="flex flex-col gap-5">
        <h3 className="text-center text-xl">Ordenar</h3>
        <SortButtons
          text="Nombre: A-Z"
          changeSorting={() => {
            changeSortBy("Alphabetical");
          }}
        />
        <SortButtons
          text="Nombre: Z-A"
          changeSorting={() => {
            changeSortBy("ReverseAlphabetical");
          }}
        />
        <SortButtons
          text="Precio: Mayor a menor"
          changeSorting={() => {
            changeSortBy("DescendingPrice");
          }}
        />
        <SortButtons
          text="Precio: Menor a mayor"
          changeSorting={() => {
            changeSortBy("AscendingPrice");
          }}
        />
        <SortButtons
          text="Puntuación: Mayor a menor"
          changeSorting={() => {
            changeSortBy("DescendingRate");
          }}
        />
        <SortButtons
          text="Puntuación: Menor a mayor"
          changeSorting={() => {
            changeSortBy("AscendingRate");
          }}
        />
      </section>
    </aside>
  );
};
