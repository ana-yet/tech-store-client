"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Login = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";

  // Dynamic classes for the form elements
  const buttonBgClass = isDark ? "bg-accent-dark" : "bg-accent";
  const inputBgClass = isDark ? "bg-background-dark" : "bg-background";
  const borderColorClass = isDark ? "border-border-dark" : "border-border";
  const textColorClass = isDark
    ? "text-text-primary-dark"
    : "text-text-primary";
  const accentTextClass = isDark ? "text-accent-dark" : "text-accent";
  const ringOffsetClass = isDark
    ? "focus:ring-offset-background-dark"
    : "focus:ring-offset-background";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("I will explore it later");
  };

  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className={`block text-sm font-medium ${textColorClass}`}
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 ${inputBgClass} ${borderColorClass} ${textColorClass} ${ringOffsetClass} focus:ring-accent`}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className={`block text-sm font-medium ${textColorClass}`}
        >
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className={`w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 ${inputBgClass} ${borderColorClass} ${textColorClass} ${ringOffsetClass} focus:ring-accent`}
          />
        </div>
      </div>

      <div className="text-sm text-right">
        <a
          href="#"
          className={`font-medium hover:underline ${accentTextClass}`}
        >
          Forgot your password?
        </a>
      </div>

      <div>
        <button
          type="submit"
          className={`flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 ${buttonBgClass} ${ringOffsetClass} focus:ring-accent`}
        >
          Sign in
        </button>
      </div>

      <div className="text-center text-sm text-text-secondary">
        Not a member?
        <Link
          href="/auth/register"
          className={`font-medium hover:underline ${accentTextClass}`}
        >
          Create an account
        </Link>
      </div>
    </form>
  );
};
export default Login;
