"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NotFound() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted on the client to safely use the theme
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a blank screen or a basic loader on the server
    return (
      <div className="flex min-h-screen w-full items-center justify-center" />
    );
  }

  const isDark = resolvedTheme === "dark";

  // --- DYNAMIC STYLING CLASSES ---
  const bgClass = isDark ? "bg-background-dark" : "bg-background";
  const primaryTextClass = isDark
    ? "text-text-primary-dark"
    : "text-text-primary";
  const secondaryTextClass = isDark
    ? "text-text-secondary-dark"
    : "text-text-secondary";
  const accentTextClass = isDark ? "text-accent-dark" : "text-accent";
  const buttonBgClass = isDark ? "bg-accent-dark" : "bg-accent";

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center ${bgClass}`}
    >
      <main className="text-center">
        <p className={`text-6xl font-bold ${accentTextClass}`}>404</p>
        <h1
          className={`mt-4 text-3xl font-bold tracking-tight ${primaryTextClass} sm:text-5xl`}
        >
          Page Not Found
        </h1>
        <p className={`mt-6 text-base leading-7 ${secondaryTextClass}`}>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className={`rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 ${buttonBgClass}`}
          >
            Go back home
          </Link>
        </div>
      </main>
    </div>
  );
}
