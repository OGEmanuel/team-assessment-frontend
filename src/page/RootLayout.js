import { Outlet, useNavigation } from 'react-router-dom';
import MainContent from '../component/Home/MainContent';
import MainNav from '../component/Nav/MainNav';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainNav />
      <MainContent>
        {navigation.state === 'loading' && <LoadingSpinner />}
        <Outlet />
      </MainContent>
    </>
  );
};

export default RootLayout;
