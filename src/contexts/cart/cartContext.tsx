import { createContext, useContext } from "react";
import { ICartContextData } from "../../interfaces/interfaces";


export const CartContext = createContext<ICartContextData>({} as ICartContextData);


export function useCart() {
  return useContext(CartContext);
}