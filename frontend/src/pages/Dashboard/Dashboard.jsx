import "./Dashboard.css";

const statistics = [
  {
    title: "Total Patients",
    value: "1,284",
    note: "Registered patients",
    icon: "bi-people",
    theme: "blue",
  },
  {
    title: "Total Doctors",
    value: "48",
    note: "Medical professionals",
    icon: "bi-person-badge",
    theme: "teal",
  },
  {
    title: "Appointments",
    value: "126",
    note: "Scheduled today",
    icon: "bi-calendar2-check",
    theme: "orange",
  },
  {
    title: "Available Beds",
    value: "32",
    note: "Beds currently available",
    icon: "bi-hospital",
    theme: "purple",
  },
];

const quickActions = [
  {
    title: "Register Patient",
    description: "Create a patient record",
    icon: "bi-person-plus",
    path: "/patients",
    theme: "blue",
  },
  {
    title: "Book Appointment",
    description: "Schedule a consultation",
    icon: "bi-calendar-plus",
    path: "/appointments",
    theme: "teal",
  },
  {
    title: "Manage Doctors",
    description: "View doctor information",
    icon: "bi-person-vcard",
    path: "/doctors",
    theme: "orange",
  },
];

function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Page heading */}
      <div className="dashboard-heading">
        <div>
          <span className="dashboard-eyebrow">
            <span className="live-indicator"></span>
            HOSPITAL OVERVIEW
          </span>

          <h1>Good morning, Admin!</h1>

          <p>Here is your hospital overview for today.</p>
        </div>

        <div className="dashboard-date">
          <i className="bi bi-calendar3"></i>
          {new Date().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>

      {/* Welcome banner */}
      <section className="dashboard-banner">
        <div className="banner-content">
          <span className="banner-label">WELCOME TO VARAD HOSPITAL</span>

          <h2>
            Better care starts
            <br />
            with better coordination.
          </h2>

          <p>
            Manage patients, appointments, and hospital operations from one
            convenient workspace.
          </p>

          <button
            className="banner-button"
            onClick={() => {
              window.location.href = "/patients";
            }}
          >
            View Patients
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        <div className="banner-visual" aria-hidden="true">
          <div className="visual-circle visual-circle-one"></div>
          <div className="visual-circle visual-circle-two"></div>

          <div className="medical-illustration">
            <i className="bi bi-hospital"></i>
            <span className="medical-plus">+</span>
          </div>

          <div className="floating-medical-icon heart-icon">
            <i className="bi bi-heart-pulse"></i>
          </div>

          <div className="floating-medical-icon shield-icon">
            <i className="bi bi-shield-check"></i>
          </div>
        </div>
      </section>
      {/* Quick actions */}
      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <h2>Quick Actions</h2>
            <p>Frequently used hospital tasks</p>
          </div>
        </div>

        <div className="quick-actions-grid">
          {quickActions.map((action) => (
            <button
              className="quick-action-card"
              key={action.title}
              onClick={() => {
                window.location.href = action.path;
              }}
            >
              <span className={`quick-action-icon ${action.theme}`}>
                <i className={`bi ${action.icon}`}></i>
              </span>

              <span className="quick-action-details">
                <strong>{action.title}</strong>
                <small>{action.description}</small>
              </span>

              <i className="bi bi-arrow-up-right quick-action-arrow"></i>
            </button>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <h2>Hospital Overview</h2>
            <p>Your key hospital statistics</p>
          </div>

          <span className="overview-badge">
            <i className="bi bi-activity"></i>
            Overview
          </span>
        </div>

        <div className="statistics-grid">
          {statistics.map((item) => (
            <article className="statistics-card" key={item.title}>
              <div className="statistics-card-top">
                <div className={`statistics-icon ${item.theme}`}>
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <i className="bi bi-three-dots statistics-menu"></i>
              </div>

              <p className="statistics-title">{item.title}</p>

              <h3>{item.value}</h3>

              <p className="statistics-note">{item.note}</p>
            </article>
          ))}
        </div>

        <p className="demo-notice">
          <i className="bi bi-info-circle"></i>
          Statistics currently use sample values.
        </p>
      </section>
      {/* Recent patients and appointments */}
      <section className="dashboard-bottom-grid">
        <div className="dashboard-panel">
          <div className="panel-heading">
            <div>
              <h2>Recent Patients</h2>
              <p>Recently registered patients</p>
            </div>

            <button
              className="panel-link"
              onClick={() => {
                window.location.href = "/patients";
              }}
            >
              View all
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="empty-state">
            <div className="empty-state-icon">
              <i className="bi bi-people"></i>
            </div>

            <strong>Patient records will appear here</strong>

            <p>Connect the patient API to display recent registrations.</p>
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-heading">
            <div>
              <h2>Upcoming Appointments</h2>
              <p>Your appointment schedule</p>
            </div>

            <button
              className="panel-link"
              onClick={() => {
                window.location.href = "/appointments";
              }}
            >
              View all
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="empty-state">
            <div className="empty-state-icon appointment-empty-icon">
              <i className="bi bi-calendar2-check"></i>
            </div>

            <strong>No appointments to display yet</strong>

            <p>Appointment information will appear here when available.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
