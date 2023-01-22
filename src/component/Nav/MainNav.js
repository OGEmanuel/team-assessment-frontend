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
    <nav className="font-style flex bg-nav-100 border-b border-nav-300 py-2.5 px-5 gap-56 items-center">
      <img src={logo} alt="logo" className="w-[184px]" />
      <div className="flex w-full justify-between items-center">
        <input
          type="search"
          placeholder="Search something"
          className="bg-nav-200 w-3/6 py-3 px-5 border border-nav-300 rounded-lg outline-0 relative"
        />
        <img src={search} alt="" className="absolute right-[37%] top-6 w-6" />
        <button
          onClick={handleClick}
          className="flex items-center gap-2 relative"
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
      </div>
    </nav>
  );
};

export default MainNav;
