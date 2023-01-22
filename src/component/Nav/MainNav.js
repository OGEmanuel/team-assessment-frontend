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
    <nav className="font-style">
      <img src={logo} alt="logo" />
      <div>
        <input type="search" placeholder="Search something" />
        <img src={search} alt="" />
      </div>
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
    </nav>
  );
};

export default MainNav;
