import React from "react";

const TopNavbar = () => {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-border dark:border-darkBorder bg-card dark:bg-darkCard">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div>
        {/* Add user profile, logout etc. */}
        <button className="px-4 py-2 bg-accent text-white rounded hover:bg-blue-600 transition-colors">
          Logout
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
