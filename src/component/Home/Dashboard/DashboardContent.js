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
        <div className="pt-8 pl-6">
          <h1 className="text-3xl font-medium mb-6">Dashboard</h1>
          <div className="flex justify-between">
            <p className="text-xl mb-6">
              Welcome back, <span className="font-medium">Nmasinachi</span>
            </p>
            <p className="text-xl">Track: UX/UI Design</p>
          </div>
          <div className="flex justify-between text-center mb-8">
            {SUMMARY.map(list => (
              <div
                key={list.id}
                className="border border-shade w-72 rounded-2xl"
              >
                <p className="font-medium text-3xl pt-4 pb-2">{list.num}</p>
                <p className="pb-4 text-text-300 text-xl">{list.des}</p>
              </div>
            ))}
          </div>
          <h2 className="font-medium text-2xl mb-4">Assessments</h2>
          <Timetable />
        </div>
      </MainContent>
    </>
  );
};

export default DashboardContent;
