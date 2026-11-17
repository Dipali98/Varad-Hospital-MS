import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/layout.css";

function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((previousState) => !previousState);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={`hospital-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar onMenuClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div className="hospital-body">
        <Sidebar onNavigate={closeSidebar} />

        {isSidebarOpen && (
          <button
            type="button"
            className="sidebar-backdrop"
            aria-label="Close sidebar"
            onClick={closeSidebar}
          />
        )}

        <main className="hospital-content">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
