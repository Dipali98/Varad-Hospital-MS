import "../styles/layout.css";
import VaradLogo from "../assets/images/varad-hospital-logo.png";

function Navbar({ onMenuClick, isSidebarOpen }) {
  return (
    <header className="hospital-navbar">
      <div className="navbar-left">
        <button
          type="button"
          className="navbar-menu-btn"
          aria-label="Toggle sidebar"
          aria-expanded={undefined}
          onClick={onMenuClick}
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="navbar-brand-area">
          <img src={VaradLogo} />
        </div>
      </div>

      <div className="navbar-search">
        <i className="bi bi-search"></i>

        <input
          type="search"
          placeholder="Search patients, doctors, appointments..."
          aria-label="Search hospital records"
        />

        <span className="search-shortcut">Ctrl + K</span>
      </div>

      <div className="navbar-actions">
        <button
          type="button"
          className="navbar-icon-btn notification-btn"
          aria-label="Notifications"
        >
          <i className="bi bi-bell"></i>
          <span className="notification-badge">3</span>
        </button>

        <button type="button" className="navbar-icon-btn" aria-label="Messages">
          <i className="bi bi-envelope"></i>
        </button>

        <button type="button" className="navbar-icon-btn" aria-label="Calendar">
          <i className="bi bi-calendar3"></i>
        </button>

        <div className="navbar-divider"></div>

        <button
          type="button"
          className="navbar-icon-btn theme-toggle"
          aria-label="Theme"
        >
          <i className="bi bi-brightness-high"></i>
        </button>

        <button
          type="button"
          className="navbar-profile"
          aria-label="Administrator profile"
        >
          <div className="profile-avatar">
            <i className="bi bi-person-fill"></i>
          </div>

          <div className="profile-info">
            <strong>Administrator</strong>
            <span>Hospital Admin</span>
          </div>

          <i className="bi bi-chevron-down profile-chevron"></i>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
