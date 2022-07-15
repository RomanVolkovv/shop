import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/route/route';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar_wrapper}>
      <NavLink to={routes.home_page}>Home</NavLink>
      <NavLink to={routes.settings_page}>Settings</NavLink>
    </nav>
  );
};

export default Sidebar;
