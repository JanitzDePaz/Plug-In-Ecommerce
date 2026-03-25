import { cartStorage } from "src/stores/menuStore";
import clsx from "clsx";
import { Show, SignInButton, useUser } from "@clerk/react";
import { useEffect, useState } from "react";
import { useCart } from "src/api/useCart";

export const CartMenu = () => {
  const { cartMenu } = cartStorage();
  const [cartProducts, setCartProducts] = useState<UserCartProducts[]>([]);
  const { getProducts } = useCart();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProducts();
        setCartProducts(data);
      } catch (error) {
        console.error("Error cargando el carrito", error);
      }
    };
    getData();
  }, [isLoaded, user]);
  return (
    <nav
      className={clsx(
        "opacity-0 bg-white max-h-85vh] min-h-[70vh] overflow-y-scroll w-full md:min-w-[20vw] md:max-w-[30vw] absolute top-full right-0 border-2 border-black duration-200 z-1000 flex-center flex-col items-center gap-4",
        cartMenu ? "translate-y-0 opacity-100" : "translate-x-full opacity-0",
      )}
    >
      <Show when="signed-in">
        <div
          className={clsx(
            "flex",
            cartProducts.length <= 0
              ? "justify-center items-center"
              : "gap-3 p-10",
          )}
        >
          {cartProducts.length <= 0 ? (
            <p>No se han podido cargar los productos</p>
          ) : (
            cartProducts.map((prod) => (
              <article key={prod.name} className="flex flex-col">
                <img
                  src={prod.mainImg}
                  alt={`${prod.name} image`}
                  className="aspect-square border-2"
                />
                <div className="flex flex-col">
                  <h3>{prod.name}</h3>
                </div>
              </article>
            ))
          )}
        </div>
      </Show>

      <Show when="signed-out">
        <p>Registrate y disfruta de tu carrito</p>
        <SignInButton mode="modal">
          <button className="py-2 px-4 bg-blue-400 rounded-xl">
            Inicia sesión
          </button>
        </SignInButton>
      </Show>
    </nav>
  );
};
