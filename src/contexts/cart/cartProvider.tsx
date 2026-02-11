import { useEffect, useState } from 'react';
import { CartContext } from './cartContext';
import { IGame, ICartItem } from '../../interfaces/interfaces';
import { getCookie, setCookie } from '../../utils/cookies';

const CART_COOKIE_KEY = 'cart_items';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ICartItem[]>(() => {
    return getCookie<ICartItem[]>(CART_COOKIE_KEY) ?? [];
  });

  useEffect(() => {
    setCookie(CART_COOKIE_KEY, items);
  }, [items]);

  function addToCart(game: IGame) {
    setItems(prev => {
      const exists = prev.find(item => item.id === game.id);

      if (exists) {
        return prev.map(item =>
          item.id === game.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...game, quantity: 1 }];
    });
  }

  function removeFromCart(id: number) {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  function increase(id: number) {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrease(id: number) {
    setItems(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce(
    (sum, item) => sum + Number(item.price.replace(',', '.')) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
