import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';

function Layout({ title, footermessage, menu_list }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header title={title} onToggleSidebar={handleToggleSidebar} />
      <div className={styles.page}>
        <Sidebar menu_list={menu_list} styles={styles} isOpen={isSidebarOpen} />
        <div
          className={`${styles.content} ${
            !isSidebarOpen ? styles.contentExpanded : ''
          }`}
        >
          <Outlet />
        </div>
      </div>
      <Footer message={footermessage} />
    </div>
  );
}

export default Layout;
