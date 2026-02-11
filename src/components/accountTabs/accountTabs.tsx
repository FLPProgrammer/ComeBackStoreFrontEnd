import { Tabs } from './styles';
import { IAccountTabProps } from '../../interfaces/interfaces';

export function AccountTabs({ activeTab, onChange }: IAccountTabProps) {
  return (
    <Tabs>
      <button
        className={activeTab === 'account' ? 'active' : ''}
        onClick={() => onChange('account')}
      >
        👤 Minha Conta
      </button>

      <button
        className={activeTab === 'orders' ? 'active' : ''}
        onClick={() => onChange('orders')}
      >
        📦 Meus Pedidos
      </button>

      <button
        className={activeTab === 'wishlist' ? 'active' : ''}
        onClick={() => onChange('wishlist')}
      >
        ⭐ Lista de Desejos
      </button>
    </Tabs>
  );
}
