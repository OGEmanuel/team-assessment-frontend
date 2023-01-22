import MainNav from '../../Nav/MainNav';
import MainContent from '../MainContent';

import nextId from 'react-id-generator';
import Timetable from './Timetable';

const SUMMARY = [
  { id: nextId(), num: 3, des: 'Assessments' },
  { id: nextId(), num: 0, des: 'Points' },
  { id: nextId(), num: 0, des: 'Completed' },
];

const DashboardContent = () => {
  return (
    <>
      <MainNav />
      <MainContent>
        <div>
          <h1>Dashboard</h1>
          <div>
            <p>
              Welcome back, <span>Nmasinachi</span>
            </p>
            <p>Track: UX/UI Design</p>
          </div>
          <div>
            {SUMMARY.map(list => (
              <div key={list.id}>
                <p>{list.num}</p>
                <p>{list.des}</p>
              </div>
            ))}
          </div>
          <h2>Assessments</h2>
          <Timetable />
        </div>
      </MainContent>
    </>
  );
};

export default DashboardContent;
