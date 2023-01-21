import { Outlet } from 'react-router-dom';
import MainContent from './MainContent/MainContent';
import SideNav from './Nav/SideNav';

const Home = () => {
  return (
    <section className="flex font-style">
      <SideNav />
      <MainContent>
        <Outlet />
      </MainContent>
    </section>
  );
};

export default Home;
