import { Container } from './styles';
import { AccountSidebar } from '../../components/accountSidebar/accountSidebar';
import { AccountTabs } from '../../components/accountTabs/accountTabs';
import { AccountContent } from '../../components/accountContent/accountContent';
import { useAccountTabFromNavigation } from '../../hooks/useAccountTabFromNavigation';

export function AccountPage() {
  const { activeTab, setActiveTab } = useAccountTabFromNavigation('account');

  return (
    <Container>
      <AccountSidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      <div className="main">
        <AccountTabs
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <AccountContent
          activeTab={activeTab}
          onChangeTab={setActiveTab}
        />
      </div>
    </Container>
  );
}
