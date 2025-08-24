"use client";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  return (
    <div>
      <button
        onClick={() => signIn("google")}
        className="w-full shadow-sm flex items-center justify-center gap-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
      >
        <FaGoogle className="w-5 h-5" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
