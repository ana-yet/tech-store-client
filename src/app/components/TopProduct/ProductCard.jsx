"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function ProductCard({ product }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
    );
  }

  const isDark = resolvedTheme === "dark";
  const cardBgClass = isDark ? "bg-card-background-dark" : "bg-card-background";
  const borderColorClass = isDark ? "border-border-dark" : "border";
  const textPrimaryClass = isDark
    ? "text-text-primary-dark"
    : "text-text-primary";
  const textSecondaryClass = isDark
    ? "text-text-secondary-dark"
    : "text-text-secondary";
  const buttonBgClass = isDark ? "bg-accent-dark" : "bg-accent";

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-lg border shadow-sm transition-transform duration-300 hover:-translate-y-1 ${cardBgClass} ${borderColorClass}`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={
            product.imageUrl ||
            "https://placehold.co/600x400/EEE/31343C?text=No+Image"
          }
          alt={product.name}
          fill={true}
          style={{ objectFit: "cover" }}
          className="bg-white"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/600x400/EEE/31343C?text=No+Image";
          }}
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className={`text-sm font-medium ${textSecondaryClass}`}>
          {product.brand}
        </p>
        <h3 className={`mt-1 text-lg font-semibold ${textPrimaryClass}`}>
          {product.name}
        </h3>
        <p className={`mt-2 text-xl font-bold ${textPrimaryClass}`}>
          ${product.price}
        </p>
        <div className="mt-4 flex-grow" />
        <Link
          href={`/products/${product._id}`}
          className={`mt-2 w-full rounded-md py-2 text-center font-semibold text-white transition-opacity hover:opacity-90 ${buttonBgClass}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
