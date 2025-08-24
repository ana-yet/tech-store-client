import Link from "next/link";
import React from "react";
import { FiBox } from "react-icons/fi";

const Logo = () => {
  return (
    <Link
      href="/"
      className={`flex items-center text-2xl font-bold transition-colors duration-300 hover:text-accent`}
    >
      <FiBox className="mr-2" />
      TechStore
    </Link>
  );
};

export default Logo;
