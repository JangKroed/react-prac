import { Link } from 'react-router-dom';

function Sidebar({ menu_list, styles, isOpen }) {
  return (
    <div>
      <nav className={`${styles.sideNavbar} ${!isOpen ? styles.closed : ''}`}>
        {menu_list.map((menu, index) => (
          <div key={index} className={styles.sidebarItem}>
            <Link to={menu.url} className={styles.sidebarLink}>
              <span>{menu.title}</span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
