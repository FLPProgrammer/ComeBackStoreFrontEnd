import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IAccountTab } from '../interfaces/interfaces';

export function useAccountTabFromNavigation(
  defaultTab: IAccountTab = 'account'
) {
  const location = useLocation();

  const initialTab =
    (location.state?.tab as IAccountTab | undefined) ?? defaultTab;

  const [activeTab, setActiveTab] = useState<IAccountTab>(initialTab);

  return {
    activeTab,
    setActiveTab,
  };
}
