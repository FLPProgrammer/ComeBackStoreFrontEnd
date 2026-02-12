import { useState } from 'react';
import { createCheckoutSession } from '../services/checkout.service';
import { ICartItem, ICheckoutItem } from '../interfaces/interfaces';
import { handleApiError } from '../utils/handleApiError';

export function useCheckout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout(cartItems: ICartItem[]) {
    try {
      if (!cartItems || cartItems.length === 0) {
        throw new Error('Carrinho vazio.');
      }

      setLoading(true);
      setError(null);

      const checkoutItems: ICheckoutItem[] = cartItems.map(item => ({
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      }));

      const url = await createCheckoutSession(checkoutItems);

      window.location.href = url;
    } catch (error) {
      const appError = handleApiError(error);
      setError(appError.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    handleCheckout,
    loading,
    error,
  };
}
