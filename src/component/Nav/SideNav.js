import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import AuthContext from '../../store/notify-context';

import Dashboard from '../../assets/dashboard.svg';
import DashboardColor from '../../assets/dashboardColor.svg';

import Assessments from '../../assets/assessments.svg';
import AssessmentsColor from '../../assets/assessmentsColor.svg';

import Notifications from '../../assets/notification.svg';
import NotificationsColor from '../../assets/notificationColor.svg';

import logout from '../../assets/logout.svg';

const SIDE_BAR = [
  {
    id: 1,
    icon: Dashboard,
    iconColor: DashboardColor,
    label: 'Dashboard',
    link: '/dashboard',
  },
  {
    id: 2,
    icon: Assessments,
    iconColor: AssessmentsColor,
    label: 'Assessments',
    link: '/assessment',
  },
  {
    id: 3,
    icon: Notifications,
    iconColor: NotificationsColor,
    label: 'Notifications',
    link: '/notification',
  },
];

const SideNav = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className="w-[16.7rem] bg-nav-100 border-r border-nav-300">
      <div className="pt-8 mb-[15.7rem]">
        {SIDE_BAR.map(list => (
          <NavLink
            to={`${list.link}`}
            key={list.id}
            className={({ isActive }) =>
              isActive ? 'navlink__active' : 'navlink__inactive'
            }
          >
            {({ isActive }) => (
              <div className="flex gap-2">
                <img src={isActive ? list.iconColor : list.icon} alt="" />
                <p>
                  {list.label}
                  {list.label === 'notifications' &&
                    isActive &&
                    ctx.NOTIFICATIONS.length > 0 && (
                      <span>{ctx.NOTIFICATIONS.length}</span>
                    )}
                </p>
              </div>
            )}
          </NavLink>
        ))}
      </div>

      <div>
        <Link to="/" className="flex pl-4 gap-2 items-center mb-28">
          <img src={logout} alt="" />
          <p className="text-sm text-error">Log out</p>
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
