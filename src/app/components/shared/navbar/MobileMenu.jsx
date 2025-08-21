import Link from "next/link";
import React from "react";
import { FiX } from "react-icons/fi";

const MobileMenu = () => {
  return (
    <div>
      <div className="flex flex-col items-center space-y-8 pt-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-2xl font-semibold ${textColorClass}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/login"
          className={`rounded-md px-6 py-3 text-lg font-semibold text-white ${buttonBgClass}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Login
        </Link>
      </div>
      <button
        onClick={() => setIsMenuOpen(false)}
        className={`absolute right-4 top-4 p-2 ${textColorClass}`}
        aria-label="Close menu"
      >
        <FiX size={28} />
      </button>
    </div>
  );
};

export default MobileMenu;
