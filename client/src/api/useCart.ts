import { useAuth, useUser } from "@clerk/react";

export const useCart = () => {
  const { getToken } = useAuth();
  const { user, isLoaded } = useUser();
  const url = import.meta.env.VITE_API_URL;

  const getProducts = async (): Promise<UserCartProducts[]> => {
    const token = await getToken();
    if (!isLoaded || !user) {
      return [];
    }
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

  const addProduct = async (productId: number) => {
    const token = await getToken();
    if (!isLoaded || !user) {
      return [];
    }

    const res = await fetch(`${url}/api/cart/${user.id}/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      return "Se ha añadido correctamente";
    }
  };
  return { getProducts, addProduct };
};
