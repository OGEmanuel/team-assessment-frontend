import SideNav from '../Nav/SideNav';

const MainContent = props => {
  return (
    <section className="flex font-style">
      <SideNav />
      <main className="w-[77%]">{props.children}</main>
    </section>
  );
};

export default MainContent;
