// components/Spinner.jsx
"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Loading({ size = 40 }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted on the client before rendering theme-dependent UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div style={{ width: size, height: size }} />;
  }

  const isDark = resolvedTheme === "dark";

  // Use the accent color for the spinner in both themes for consistency
  const spinnerColor = isDark ? "text-accent-dark" : "text-accent";

  return (
    <motion.div
      style={{
        width: size,
        height: size,
        border: `4px solid ${spinnerColor}`,
        borderTopColor: "transparent",
        borderRadius: "50%",
      }}
      animate={{ rotate: 360 }}
      transition={{
        loop: Infinity,
        ease: "linear",
        duration: 1,
      }}
      aria-label="Loading"
      role="status"
    />
  );
}
