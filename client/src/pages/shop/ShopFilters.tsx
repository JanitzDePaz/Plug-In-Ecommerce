import { filterStorage } from "../../stores/shopStore";
import { SortButtons } from "src/components/buttons/SortButtoms";
import { sortStorage } from "../../stores/shopStore";

export const ShopFilters = () => {
  const maxPrice = filterStorage((e) => e.maxPrice);
  const maxRate = filterStorage((e) => e.maxRate);
  const changeMinPrice = filterStorage((e) => e.setMinPrice);
  const changeMaxPrice = filterStorage((e) => e.setMaxPrice);
  const changeMinRate = filterStorage((e) => e.setMinRate);
  const changeMaxRate = filterStorage((e) => e.setMaxRate);
  const changeSortBy = sortStorage((e) => e.setSortBy);
  const absoluteMaxRate = filterStorage((e) => e.absoluteMaxRate);
  const absoluteMaxPrice = filterStorage((e) => e.absoluteMaxPrice);

  return (
    <aside className="w-full flex flex-col">
      <section className="flex flex-col gap-5">
        <h3 className="text-center text-xl">Filtros</h3>
        <section className="flex-center flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h4>Precio</h4>
            <div className="flex justify-between items-center gap-2">
              <input
                type="text"
                id="minPrice"
                placeholder="0"
                onInput={(e) => {
                  if (e.currentTarget.value == "") {
                    changeMinPrice(0);
                  } else {
                    const cleanValue = e.currentTarget.value.replace(
                      /[^0-9.]/g,
                      "",
                    );
                    e.currentTarget.value = cleanValue;
                    changeMinPrice(cleanValue);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    const value = parseInt(e.currentTarget.value);
                    if (value > maxPrice) {
                      e.currentTarget.value = String(maxPrice);
                      changeMinPrice(maxPrice);
                    }
                    e.currentTarget.blur();
                  }
                }}
                className="max-w-20 border no-spinner text-center py-1 px-2 border-gray-400 text-md rounded-sm"
              />
              <hr className="w-5" />
              <input
                type="text "
                id="maxRate"
                placeholder={`${absoluteMaxPrice}`}
                onInput={(e) => {
                  if (e.currentTarget.value == "") {
                    changeMaxPrice(0);
                  } else {
                    const cleanValue = e.currentTarget.value.replace(
                      /[^0-9.]/g,
                      "",
                    );
                    e.currentTarget.value = cleanValue;
                    changeMaxPrice(cleanValue);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    const value = parseInt(e.currentTarget.value);
                    if (value > absoluteMaxPrice) {
                      e.currentTarget.value = String(absoluteMaxPrice);
                      changeMaxPrice(absoluteMaxPrice);
                    }
                    e.currentTarget.blur();
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
                type="text"
                id="minRate"
                placeholder="0"
                onInput={(e) => {
                  if (e.currentTarget.value == "") {
                    changeMinRate(0);
                  } else {
                    const cleanValue = e.currentTarget.value.replace(
                      /[^0-9.]/g,
                      "",
                    );
                    e.currentTarget.value = cleanValue;
                    changeMinRate(cleanValue);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    const value = parseInt(e.currentTarget.value);
                    if (value > maxRate) {
                      e.currentTarget.value = String(maxRate);
                      changeMinRate(maxRate);
                    }
                    e.currentTarget.blur();
                  }
                }}
                className="max-w-20 border no-spinner text-center py-1 px-2 border-gray-400 text-md rounded-sm"
              />
              <hr className="w-5" />
              <input
                type="text "
                id="maxRate"
                placeholder={`${absoluteMaxRate/2}`}
                onInput={(e) => {
                  if (e.currentTarget.value == "") {
                    changeMaxRate(0);
                  } else {
                    const cleanValue = e.currentTarget.value.replace(
                      /[^0-9.]/g,
                      "",
                    );
                    e.currentTarget.value = cleanValue;
                    changeMaxRate(cleanValue);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    const value = parseInt(e.currentTarget.value);
                    if (value > absoluteMaxRate) {
                      e.currentTarget.value = String(absoluteMaxRate);
                      changeMaxRate(absoluteMaxRate);
                    }
                    e.currentTarget.blur();
                  }
                }}
                className="max-w-20 border no-spinner text-center py-1 px-2 border-gray-400 text-md rounded-sm"
              />
            </div>
          </div>
        </section>
      </section>
      <hr className="my-10" />
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
