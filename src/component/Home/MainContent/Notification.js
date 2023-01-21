import MainNav from '../Nav/MainNav';
import SideNav from '../Nav/SideNav';

const Notification = () => {
  return (
    <section>
      <MainNav />
      <main className="flex">
        <SideNav />
        <p className="font-style">Notification</p>
      </main>
    </section>
  );
};

export default Notification;
