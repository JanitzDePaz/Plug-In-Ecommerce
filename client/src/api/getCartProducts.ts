import { useAuth, useUser } from "@clerk/react";

export const getCartProducts = () => {
  const { getToken } = useAuth();
  const { user, isLoaded } = useUser();
  const url = import.meta.env.VITE_API_URL;

  const getProducts = async (): Promise<UserCartProducts[]> => {
    const token = await getToken();
    if(!isLoaded){return []}
    if (!user) return [];
    const res = await fetch(`${url}/api/cart/${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Error al conectar con la API del carrito");
    }

    const cartProducts = await res.json();
    
    return cartProducts;
  };
  return { getProducts };
};
