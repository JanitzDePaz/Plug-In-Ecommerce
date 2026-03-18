import { useAuth } from "@clerk/react";

const getCartProducts = () => {
  const { getToken } = useAuth();
  const url = import.meta.env.VITE_API_URL;

  const getProducts = async () => {
    const token = await getToken();

    const products = await fetch(`${url}/cart`, {
      headers: {
         Authorization: `Bearer ${token}`,
      }
     
    });
  };
};
