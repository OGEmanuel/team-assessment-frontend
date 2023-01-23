import { Outlet } from 'react-router-dom';
import MainNav from '../../Nav/MainNav';
import MainContent from '../MainContent';

const AssessmentContent = () => {
  return (
    <section>
      <MainNav />
      <MainContent>
        <Outlet />
      </MainContent>
    </section>
  );
};

export default AssessmentContent;
