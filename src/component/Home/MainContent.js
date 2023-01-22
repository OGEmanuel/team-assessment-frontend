import SideNav from '../Nav/SideNav';

const MainContent = props => {
  return (
    <section className="flex font-style">
      <SideNav />
      <main>{props.children}</main>
    </section>
  );
};

export default MainContent;
