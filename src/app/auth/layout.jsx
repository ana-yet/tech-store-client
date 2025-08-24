"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Logo from "@/app/components/shared/logo/Logo";
import GoogleLogin from "./googleLogin/GoogleLogin";

const AuthLayout = ({ children, title }) => {
  // Theme management
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering theme-dependent UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a placeholder or null to avoid hydration mismatch
    return <div className="flex min-h-screen items-center justify-center" />;
  }

  const isDark = resolvedTheme === "dark";

  // Dynamic classes based on the current theme
  const cardBgClass = isDark ? "bg-card-background-dark" : "bg-card-background";
  const textColorClass = isDark
    ? "text-text-primary-dark"
    : "text-text-primary";
  const borderColorClass = isDark ? "border-border-dark" : "border-border";

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div
        className={`w-full max-w-md rounded-xl border p-8 shadow-sm ${cardBgClass} ${borderColorClass}`}
      >
        <div className="text-center">
          <Logo />
          <h2 className={`mt-6 text-2xl font-semibold ${textColorClass}`}>
            {title}
          </h2>
        </div>
        <div className="mt-8">{children}</div>
        <GoogleLogin />
      </div>
    </div>
  );
};
export default AuthLayout;
