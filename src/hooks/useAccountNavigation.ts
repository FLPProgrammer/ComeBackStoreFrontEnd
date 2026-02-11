import { useNavigate } from 'react-router-dom';
import { IAccountTab } from '../interfaces/interfaces';

export function useAccountNavigation() {
  const navigate = useNavigate();

  function goToAccount(tab: IAccountTab = 'account') {
    navigate('/account-page', {
      state: { tab },
    });
  }

  return {
    goToAccount,
  };
}
