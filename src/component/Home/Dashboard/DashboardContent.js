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
        <div className="pt-16 pl-6">
          <h1 className="text-4xl font-medium mb-10">Dashboard</h1>
          <div className="flex justify-between">
            <p className="text-2xl mb-8">
              Welcome back, <span className="font-medium">Nmasinachi</span>
            </p>
            <p className="text-2xl">Track: UX/UI Design</p>
          </div>
          <div className="flex justify-between text-center mb-16">
            {SUMMARY.map(list => (
              <div
                key={list.id}
                className="border border-shade w-72 rounded-2xl"
              >
                <p className="font-medium text-5xl pt-6 pb-4">{list.num}</p>
                <p className="pb-6 text-text-300 text-2xl">{list.des}</p>
              </div>
            ))}
          </div>
          <h2 className="font-medium text-3xl mb-4">Assessments</h2>
          <Timetable />
        </div>
      </MainContent>
    </>
  );
};

export default DashboardContent;
