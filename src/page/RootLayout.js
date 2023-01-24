import { Outlet } from 'react-router-dom';
import MainContent from '../component/Home/MainContent';
import MainNav from '../component/Nav/MainNav';

const RootLayout = () => {
  return (
    <>
      <MainNav />
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
};

export default RootLayout;
