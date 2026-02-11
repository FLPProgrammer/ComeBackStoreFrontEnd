import { FiUser, FiLock, FiPackage, FiHeart, FiLogOut } from 'react-icons/fi';
import { Container, UserBox, Menu, MenuItem } from './styles';
import { IAccountSidebarProps } from '../../interfaces/interfaces';

export function AccountSidebar({
  activeTab,
  onSelectTab,
}: IAccountSidebarProps) {
  return (
    <Container>
      <UserBox>
        <FiUser size={18} />
        <strong>Felipe José de Lima</strong>
      </UserBox>

      <Menu>
        <MenuItem
          className={activeTab === 'account' ? 'active' : ''}
          onClick={() => onSelectTab('account')}
        >
          <FiUser />
          Minha Conta
        </MenuItem>

        <MenuItem onClick={() => onSelectTab('change-password')}>
          <FiLock />
          Alterar Senha
        </MenuItem>

        <MenuItem
          className={activeTab === 'orders' ? 'active' : ''}
          onClick={() => onSelectTab('orders')}
        >
          <FiPackage />
          Meus Pedidos
        </MenuItem>

        <MenuItem
          className={activeTab === 'wishlist' ? 'active' : ''}
          onClick={() => onSelectTab('wishlist')}
        >
          <FiHeart />
          Lista de Desejos
        </MenuItem>

        <MenuItem className="logout">
          <FiLogOut />
          Sair
        </MenuItem>
      </Menu>
    </Container>
  );
}