"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

const LoginUser = () => {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <Link
          href={"/auth/login"}
          className="hidden items-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 sm:flex"
        >
          <FiLogIn className="mr-1.5" size={16} />
          Login
        </Link>
      ) : (
        <button
          onClick={() => signOut({ callbackUrl: "/auth/login" })}
          className="flex items-center gap-1.5 rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
        >
          <IoMdLogOut size={16} />
          Sign Out
        </button>
      )}
    </>
  );
};

export default LoginUser;
