import { useRouteError } from 'react-router-dom';
import MainContent from '../component/Home/MainContent';
import MainNav from '../component/Nav/MainNav';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occured!';
  let message = 'Soemthing went wrong';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <MainNav />
      <MainContent>
        <h1 className="text-center text-lg font-medium pt-4">{title}</h1>
        <p className="text-center pt-8">{message}</p>
      </MainContent>
    </>
  );
};

export default ErrorPage;
