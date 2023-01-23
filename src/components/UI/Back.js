import { Link } from 'react-router-dom';

import back from '../../assets/back.svg';

const Back = () => {
  return (
    <>
      <Link to="" className="flex gap-3 items-center">
        <img src={back} alt="" className="w-4" />
        <p>Back</p>
      </Link>
    </>
  );
};

export default Back;
