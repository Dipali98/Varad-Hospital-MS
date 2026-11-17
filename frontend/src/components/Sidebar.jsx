import { NavLink } from "react-router-dom";
import "../styles/layout.css";

const menuItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: "bi-grid-1x2-fill",
    color: "blue",
  },
  {
    label: "Patients",
    path: "/patients",
    icon: "bi-people-fill",
    color: "teal",
  },
  {
    label: "Doctors",
    path: "/doctors",
    icon: "bi-person-badge-fill",
    color: "green",
  },
  {
    label: "Appointments",
    path: "/appointments",
    icon: "bi-calendar2-check-fill",
    color: "orange",
    badge: "3",
  },
  {
    label: "Departments",
    path: "/departments",
    icon: "bi-hospital-fill",
    color: "blue",
  },
  {
    label: "Staff",
    path: "/staff",
    icon: "bi-person-workspace",
    color: "teal",
  },
  {
    label: "Billing",
    path: "/billing",
    icon: "bi-receipt",
    color: "orange",
  },
  {
    label: "Pharmacy",
    path: "/pharmacy",
    icon: "bi-capsule",
    color: "green",
  },
  {
    label: "Lab & Diagnostics",
    path: "/lab",
    icon: "bi-eyedropper",
    color: "teal",
  },
  {
    label: "Inventory",
    path: "/inventory",
    icon: "bi-box-seam-fill",
    color: "blue",
  },
  {
    label: "Reports",
    path: "/reports",
    icon: "bi-bar-chart-fill",
    color: "green",
  },
  {
    label: "Settings",
    path: "/settings",
    icon: "bi-gear-fill",
    color: "orange",
  },
];

function Sidebar({ onNavigate }) {
  return (
    <aside className="hospital-sidebar">
      <div className="sidebar-heading">MAIN MENU</div>

      <nav className="sidebar-menu" aria-label="Main navigation">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className={`sidebar-icon-wrap ${item.color}`}>
              <i className={`bi ${item.icon} sidebar-icon`}></i>
            </span>

            <span className="sidebar-link-label">{item.label}</span>

            {item.badge && <span className="sidebar-badge">{item.badge}</span>}

            <i className="bi bi-chevron-right sidebar-arrow"></i>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-help-card">
          <div className="sidebar-help-icon">
            <i className="bi bi-headset"></i>
          </div>

          <div className="sidebar-help-content">
            <strong>Need Help?</strong>
            <p>Our support team is here for you 24/7.</p>
          </div>

          <button type="button" className="sidebar-support-btn">
            Contact Support
            <i className="bi bi-arrow-right"></i>
          </button>

          <span className="support-decoration support-decoration-one"></span>
          <span className="support-decoration support-decoration-two"></span>
        </div>

        <div className="sidebar-version">
          Varad Hospital MS <span>v1.0</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
