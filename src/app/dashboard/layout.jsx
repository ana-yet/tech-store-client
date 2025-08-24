import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-card dark:bg-darkBg text-textPrimary dark:text-darkTextPrimary">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <TopNavbar />

        {/* Page Content */}
        <main className="flex-1 p-6 bg-card dark:bg-darkBg overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
