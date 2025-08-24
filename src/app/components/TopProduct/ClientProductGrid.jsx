"use client";
import ProductCard from "@/app/products/ProductCard";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ClientProductGrid({ initialProducts, error }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";

  const headingColorClass = isDark
    ? "text-text-primary-dark"
    : "text-text-primary";
  const buttonBgClass = isDark ? "bg-accent-dark" : "bg-accent";

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2
          className={`text-center text-3xl font-bold tracking-tight ${headingColorClass}`}
        >
          Top Products
        </h2>

        {error && <p className="mt-4 text-center text-red-500">{error}</p>}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {initialProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className={`inline-block rounded-md px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90 ${buttonBgClass}`}
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
