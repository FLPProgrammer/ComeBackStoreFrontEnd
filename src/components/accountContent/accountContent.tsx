import { IAccountContentProps } from '../../interfaces/interfaces';

import { MyAccountTab } from '../../components/tabs/myAccountTab/myAccountTab';
import { OrdersTab } from '../../components/tabs/ordersTab/ordersTab';
import { WishlistTab } from '../../components/tabs/wishlistTab/wishlistTab';
import { ChangePasswordTab } from '../../components/tabs/changePasswordTab/changePasswordTab'

export function AccountContent({ activeTab }: IAccountContentProps) {
  switch (activeTab) {
    case 'orders':
      return <OrdersTab />;

    case 'wishlist':
      return <WishlistTab />;

      case 'change-password':
        return <ChangePasswordTab />

    default:
      return <MyAccountTab />;
  }
}
