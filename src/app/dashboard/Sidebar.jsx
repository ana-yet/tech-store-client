import Link from "next/link";
import React from "react";
import { FiHome, FiShoppingCart, FiUser } from "react-icons/fi";
import Logo from "../components/shared/logo/Logo";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-card dark:bg-darkCard border-r border-border dark:border-darkBorder flex flex-col">
      <div className="px-6 py-4 text-2xl font-bold border-b border-border dark:border-darkBorder">
        <Logo />
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-accent hover:text-white transition-colors"
        >
          <FiHome /> Dashboard
        </Link>
        <Link
          href="/dashboard/addProduct"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-accent hover:text-white transition-colors"
        >
          <FiShoppingCart /> Add Product
        </Link>
        <Link
          href="/dashboard/users"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-accent hover:text-white transition-colors"
        >
          <FiUser /> Users
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
