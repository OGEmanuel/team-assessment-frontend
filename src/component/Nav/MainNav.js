import { useState } from 'react';

import Modal from '../../components/UI/Modal';
import logo from '../../assets/logo.png';
import search from '../../assets/Search.svg';
import menu from '../../assets/menu.svg';
import { Link } from 'react-router-dom';

const MainNav = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const handleClose = () => {
    setDropdown(false);
  };

  return (
    <nav className="flex bg-nav-100 border-b border-nav-300 py-2.5 px-5 gap-56 items-center">
      <img src={logo} alt="logo" className="w-[11.5rem]" />
      <div className="w-[42%] relative">
        <input
          type="search"
          placeholder="Search something"
          className="bg-nav-200 w-full py-3 px-5 border border-nav-300 rounded-lg outline-0"
        />
        <img src={search} alt="" className="absolute top-1/4 right-6 w-6" />
      </div>
      <button
        onClick={handleClick}
        className="flex items-center gap-2 ml-auto pr-4 relative"
      >
        <p className="font-medium bg-profile rounded-full p-2">NC</p>
        <img
          src={menu}
          alt=""
          className={dropdown ? 'rotate-180 transition' : ''}
        />
        {dropdown && <Modal onClose={handleClose} />}
        {dropdown && (
          <ul className="dropdown">
            <li className="mb-4">
              <Link to="/profile">My Profile</Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
          </ul>
        )}
      </button>
    </nav>
  );
};

export default MainNav;
