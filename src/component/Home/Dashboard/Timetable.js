import nextId from 'react-id-generator';
import { Link, useNavigate } from 'react-router-dom';

const TIMETABLE = [
  {
    id: nextId(),
    type: 'General',
    date: '7th - 9th December',
    style: 'active',
  },
  {
    id: nextId(),
    type: 'Track Specific',
    date: 'Unavailable',
    style: 'inactive',
  },
  {
    id: nextId(),
    type: 'Interview',
    date: 'Unavailable',
    style: 'inactive',
  },
];

const Timetable = () => {
  const navigate = useNavigate();

  const handleClickToAssessments = type => {
    if (type === 'General') navigate('/home/assessments');
  };

  return (
    <div className="w-100 mb-14">
      {TIMETABLE.map(list => (
        <div
          key={list.id}
          className="flex py-10 pl-6 justify-between border border-timetable rounded-2xl mb-4 items-center"
        >
          <p className="w-[17%] font-medium text-2xl">{list.type}</p>
          <p className="w-1/3 text-2xl text-text-300">{list.date}</p>
          <Link
            to={list.type === 'General' ? '' : ''}
            onClick={() => handleClickToAssessments(list.type)}
            className={
              list.style === 'active'
                ? 'active-timetable bg-primary-300'
                : 'active-timetable bg-inactive'
            }
          >
            Attempt
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Timetable;
