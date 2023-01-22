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
    <nav className="font-style flex bg-nav-100 border-b border-nav-300 py-2.5 px-5 gap-52 items-center">
      <img src={logo} alt="logo" className="w-logo" />
      <div className="flex">
        <input
          type="search"
          placeholder="Search something"
          className="bg-nav-200 w-search py-3 px-5 border border-nav-300 rounded-lg outline-0"
        />
        <img src={search} alt="" />
        <div onClick={handleClick}>
          <button>
            <p>NC</p>
            <img src={menu} alt="" />
            {dropdown && <Modal onClose={handleClose} />}
            {dropdown && (
              <ul>
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
              </ul>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
