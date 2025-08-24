"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from "../logo/Logo";
import { useEffect, useState } from "react";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- DYNAMIC STYLING CLASSES ---
  const footerBgClass = isDark
    ? "bg-card-background-dark"
    : "bg-card-background";
  const textColorClass = isDark
    ? "text-text-secondary-dark"
    : "text-text-secondary";
  const headingColorClass = isDark
    ? "text-text-primary-dark"
    : "text-text-primary";
  const hoverTextClass = isDark
    ? "hover:text-accent-dark"
    : "hover:text-accent";
  const borderColorClass = isDark ? "border-border-dark" : "border-border";

  const socialLinks = [
    { href: "https://github.com/ana-yet", icon: FaGithub },
    { href: "https://twitter.com/md_anayet_m", icon: FaTwitter },
    { href: "https://linkedin.com/in/ana-yet", icon: FaLinkedin },
  ];

  const footerLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  if (!mounted) {
    // Render a fallback to match server HTML
    return (
      <footer className="border-t bg-card-background border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-sm text-text-secondary">
          <Logo />
          <p>Your one-stop shop for the latest and greatest in technology.</p>
        </div>
      </footer>
    );
  }
  return (
    <footer className={`border-t ${footerBgClass} ${borderColorClass}`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand and Socials */}
          <div className="space-y-4">
            <Logo />
            <p className={`text-sm ${textColorClass}`}>
              Your one-stop shop for the latest and greatest in technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColorClass} ${hoverTextClass} transition-colors`}
                  aria-label={`Visit our ${
                    social.href.split(".com")[0].split("//")[1]
                  } page`}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider ${headingColorClass}`}
                >
                  Shop
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/products"
                      className={`text-sm ${textColorClass} ${hoverTextClass}`}
                    >
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/laptops"
                      className={`text-sm ${textColorClass} ${hoverTextClass}`}
                    >
                      Laptops
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/phones"
                      className={`text-sm ${textColorClass} ${hoverTextClass}`}
                    >
                      Phones
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider ${headingColorClass}`}
                >
                  Company
                </h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-sm ${textColorClass} ${hoverTextClass}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider ${headingColorClass}`}
                >
                  Support
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/faq"
                      className={`text-sm ${textColorClass} ${hoverTextClass}`}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shipping"
                      className={`text-sm ${textColorClass} ${hoverTextClass}`}
                    >
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/returns"
                      className={`text-sm ${textColorClass} ${hoverTextClass}`}
                    >
                      Returns
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-12 border-t pt-8 text-center text-sm ${borderColorClass} ${textColorClass}`}
        >
          <p>
            &copy; {new Date().getFullYear()} TechStore. All rights reserved.
            Built in Sylhet, Bangladesh.
          </p>
        </div>
      </div>
    </footer>
  );
}
