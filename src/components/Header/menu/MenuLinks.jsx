import { NavLink } from 'react-router';
import { MenuLinksData } from './MenuLinksData';
import { DashboardMenuLinksData } from './DashboardMenuLinksData';

const MenuLinks = ({ isDashboard }) => {
  const links = isDashboard ? DashboardMenuLinksData : MenuLinksData;

  const activeLink =
    'relative flex items-center justify-center after:bottom-[-4px] after:bg-[#FCFCFC] after:absolute after:w-[4px] after:h-[4px] after:rounded-[50%]';
  return (
    <nav className="max-[880px]:hidden">
      <ul className="flex gap-[24px] text-[16px] font-[500] text-[#FCFCFC]">
        {links?.map((link, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : '')}
              to={link.address}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MenuLinks;
