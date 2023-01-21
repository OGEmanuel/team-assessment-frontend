import MainNav from '../Nav/MainNav';
import SideNav from '../Nav/SideNav';

const Dashboard = () => {
  return (
    <section>
      <MainNav />
      <main className="flex">
        <SideNav />
        <h1 className="font-style">Dashboard</h1>
      </main>
    </section>
  );
};

export default Dashboard;
