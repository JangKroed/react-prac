function Header({ title, onToggleSidebar }) {
  return (
    <header>
      <button className="hamburger-btn" onClick={onToggleSidebar}>
        ☰
      </button>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
