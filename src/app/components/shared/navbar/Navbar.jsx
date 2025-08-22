"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiHome,
  FiBox,
  FiPieChart,
  FiLogIn,
  FiUser,
} from "react-icons/fi";
import Logo from "../logo/Logo";

const Navbar = () => {
  // --- STATE MANAGEMENT ---
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect to ensure the component is mounted before rendering theme-dependent UI
  useEffect(() => setMounted(true), []);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- THEME DETERMINATION ---
  const isDark = resolvedTheme === "dark";

  // --- DYNAMIC STYLING CLASSES ---
  const navBgClass = isDark
    ? isScrolled
      ? "bg-background-dark/90"
      : "bg-background-dark"
    : isScrolled
    ? "bg-background/90"
    : "bg-background";

  const textColorClass = isDark
    ? "text-text-primary-dark"
    : "text-text-primary";

  const borderColorClass = isDark ? "border-border-dark" : "border-border";

  const buttonBgClass = isDark ? "bg-accent-dark" : "bg-accent";

  const hoverTextClass = isDark
    ? "hover:text-accent-dark"
    : "hover:text-accent";

  // --- NAVIGATION LINKS WITH ICONS ---
  const navLinks = [
    { href: "/", label: "Home", icon: FiHome },
    { href: "/products", label: "Products", icon: FiBox },
    { href: "/dashboard", label: "Dashboard", icon: FiPieChart },
  ];

  // --- RENDER LOGIC ---
  if (!mounted) {
    return <div className="h-20 w-full" />;
  }

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full border-b  ${navBgClass} ${borderColorClass} transition-all duration-300 backdrop-blur-sm`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center text-md font-medium ${textColorClass} ${hoverTextClass} transition-colors`}
                  >
                    <Icon className="mr-1.5" size={18} />
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Actions: Login, Theme Toggle, and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className={`hidden items-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:flex ${buttonBgClass}`}
            >
              <FiLogIn className="mr-1.5" size={16} />
              Login
            </Link>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`rounded-full p-2 ${textColorClass} ${hoverTextClass}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 ${textColorClass}`}
                aria-label="Open menu"
                whileTap={{ scale: 0.95 }}
              >
                <FiMenu size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed right-0 top-0 z-50 h-full w-80 max-w-full pt-5 shadow-xl ${navBgClass}`}
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between px-6 pb-5">
                <div className="flex items-center">
                  <FiBox className="mr-2" size={24} />
                  <span className={`text-xl font-bold ${textColorClass}`}>
                    TechStore
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-full p-2 ${textColorClass} hover:bg-black/10 dark:hover:bg-white/10`}
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-2 px-4">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center rounded-lg px-4 py-3 text-lg font-medium ${textColorClass} transition-colors hover:bg-black/10 dark:hover:bg-white/10`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="mr-3" size={20} />
                      {link.label}
                    </Link>
                  );
                })}

                <div className="my-4 border-t border-gray-200 dark:border-gray-700"></div>

                <Link
                  href="/login"
                  className={`flex items-center rounded-lg px-4 py-3 text-lg font-semibold text-white ${buttonBgClass}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiLogIn className="mr-3" size={20} />
                  Login
                </Link>

                <div className="my-4 border-t border-gray-200 dark:border-gray-700"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
