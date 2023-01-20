import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <h1>Root</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;