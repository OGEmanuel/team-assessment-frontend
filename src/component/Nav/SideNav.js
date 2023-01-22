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
    link: '',
  },
  {
    id: 2,
    icon: Assessments,
    iconColor: AssessmentsColor,
    label: 'Assessments',
    link: 'assessment',
  },
  {
    id: 3,
    icon: Notifications,
    iconColor: NotificationsColor,
    label: 'Notifications',
    link: 'notification',
  },
];

const SideNav = () => {
  const ctx = useContext(AuthContext);

  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? '#e7fffa' : '',
      borderLeft: isActive
        ? '0.4rem solid #0a9c7d'
        : '0.4rem solid transparent',
    };
  };

  return (
    <nav>
      <div>
        {SIDE_BAR.map(list => (
          <NavLink to={`${list.link}`} key={list.id} style={navLinkStyles}>
            {({ isActive }) => (
              <div>
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
        <Link to="/">
          <img src={logout} alt="" />
          <p>Log out</p>
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
