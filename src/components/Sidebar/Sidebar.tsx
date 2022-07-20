import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/route/route';
import styled from './Sidebar.module.scss';

const link = [
  { name: 'Home', route: routes.home_page },
  { name: 'Settings', route: routes.settings_page },
];

const Sidebar = () => {
  return (
    <nav className={styled.sidebar_wrapper}>
      {link.map((el, index) => (
        <NavLink
          end
          key={index}
          className={({ isActive }) => (isActive ? styled.activeStyle : null)}
          to={el.route}>
          {el.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Sidebar;
