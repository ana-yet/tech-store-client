"use client";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="bg-[#f9fafb] dark:bg-[#1e1e1e] rounded-lg shadow-md overflow-hidden border border-[#e5e7eb] dark:border-[#374151] transition-transform hover:scale-[1.02] h-full flex flex-col">
      {/* Product Image */}
      <div className="h-48 bg-white dark:bg-[#121212] flex items-center justify-center overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-[#6b7280] dark:text-[#9ca3af]">
            No Image Available
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name and Category */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-[#1f2937] dark:text-[#e5e7eb] text-lg line-clamp-1">
            {product.name}
          </h3>
          <span className="bg-[#3b82f6] text-white text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2">
            {product.category}
          </span>
        </div>

        {/* Brand */}
        <div className="text-sm text-[#6b7280] dark:text-[#9ca3af] mb-2">
          {product.brand}
        </div>

        {/* Price and Stock Status */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-[#1f2937] dark:text-[#e5e7eb]">
            ${product.price}
          </span>
          <span
            className={`text-sm font-medium ${
              product.inStock ? "text-[#22c55e]" : "text-red-500"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Key Specifications (only 2 shown) */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {product.memory && (
            <div className="flex items-center text-xs text-[#6b7280] dark:text-[#9ca3af]">
              <span className="font-medium">RAM:</span>
              <span className="ml-1">{product.memory}</span>
            </div>
          )}
          {product.storage && (
            <div className="flex items-center text-xs text-[#6b7280] dark:text-[#9ca3af]">
              <span className="font-medium">Storage:</span>
              <span className="ml-1">{product.storage}</span>
            </div>
          )}
        </div>

        {/* View Details Button - positioned at bottom */}
        <div className="mt-auto">
          <Link
            href={`/products/${product._id}`}
            className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
