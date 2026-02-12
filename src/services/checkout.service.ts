import { api } from './api';
import { ICheckoutItem, ICheckoutResponse} from '../interfaces/interfaces';


export async function createCheckoutSession(
  items: ICheckoutItem[]
): Promise<string> {
  const { data } = await api.post<ICheckoutResponse>(
    '/checkout',
    { items },
    { withCredentials: true }
  );

  return data.url;
}