// app/products/[id]/page.js
import React from "react";
import Image from "next/image";

const ProductDetails = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/product/${params.product}`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen bg-[#f9fafb] dark:bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1f2937] dark:text-[#e5e7eb]">
            Product not found
          </h1>
          <p className="text-[#6b7280] dark:text-[#9ca3af] mt-2">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const product = await res.json();

  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-[#121212] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-[#6b7280] dark:text-[#9ca3af]">
            <li>Home</li>
            <li className="before:content-['/'] before:mx-2">Products</li>
            <li className="before:content-['/'] before:mx-2">
              {product.category}
            </li>
            <li className="before:content-['/'] before:mx-2 text-[#1f2937] dark:text-[#e5e7eb] font-medium">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="bg-white dark:bg-[#1e1e1e] rounded-lg shadow-md border border-[#e5e7eb] dark:border-[#374151] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="flex flex-col">
              <div className="bg-[#f9fafb] dark:bg-[#121212] rounded-lg overflow-hidden h-96 flex items-center justify-center">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-[#6b7280] dark:text-[#9ca3af]">
                    No Image Available
                  </div>
                )}
              </div>

              {/* Additional Images (if available) */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-[#f9fafb] dark:bg-[#121212] rounded-md h-20 cursor-pointer border border-[#e5e7eb] dark:border-[#374151]"
                  ></div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-4">
                <span className="bg-[#3b82f6] text-white text-xs px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-[#1f2937] dark:text-[#e5e7eb] mb-2">
                {product.name}
              </h1>

              <div className="flex items-center mb-4">
                <span className="text-xl font-bold text-[#1f2937] dark:text-[#e5e7eb]">
                  ${product.price}
                </span>
                <span
                  className={`ml-4 text-sm font-medium ${
                    product.inStock ? "text-[#22c55e]" : "text-red-500"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-[#1f2937] dark:text-[#e5e7eb] mb-2">
                  Description
                </h2>
                <p className="text-[#6b7280] dark:text-[#9ca3af]">
                  {product.description || "No description available."}
                </p>
              </div>

              {/* Key Specifications */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-[#1f2937] dark:text-[#e5e7eb] mb-3">
                  Key Specifications
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {product.brand && (
                    <div>
                      <span className="text-sm font-medium text-[#6b7280] dark:text-[#9ca3af]">
                        Brand:
                      </span>
                      <p className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.brand}
                      </p>
                    </div>
                  )}
                  {product.model && (
                    <div>
                      <span className="text-sm font-medium text-[#6b7280] dark:text-[#9ca3af]">
                        Model:
                      </span>
                      <p className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.model}
                      </p>
                    </div>
                  )}
                  {product.memory && (
                    <div>
                      <span className="text-sm font-medium text-[#6b7280] dark:text-[#9ca3af]">
                        Memory:
                      </span>
                      <p className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.memory}
                      </p>
                    </div>
                  )}
                  {product.storage && (
                    <div>
                      <span className="text-sm font-medium text-[#6b7280] dark:text-[#9ca3af]">
                        Storage:
                      </span>
                      <p className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.storage}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-6">
                <button
                  className="flex-1 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!product.inStock}
                >
                  Add to Cart
                </button>
                <button className="flex items-center justify-center w-12 h-12 border border-[#e5e7eb] dark:border-[#374151] rounded-md text-[#6b7280] dark:text-[#9ca3af] hover:text-[#3b82f6] dark:hover:text-[#3b82f6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Seller Info */}
              <div className="border-t border-[#e5e7eb] dark:border-[#374151] pt-4">
                <h3 className="text-sm font-medium text-[#6b7280] dark:text-[#9ca3af] mb-2">
                  Sold by
                </h3>
                <div className="flex items-center">
                  <img
                    src={product.sellerImage}
                    alt={product.sellerName}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-[#1f2937] dark:text-[#e5e7eb] font-medium">
                      {product.sellerName}
                    </p>
                    <p className="text-xs text-[#6b7280] dark:text-[#9ca3af]">
                      {product.sellerEmail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Specifications */}
          <div className="border-t border-[#e5e7eb] dark:border-[#374151] p-6">
            <h2 className="text-xl font-bold text-[#1f2937] dark:text-[#e5e7eb] mb-4">
              Detailed Specifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Technical Specifications */}
              <div>
                <h3 className="text-lg font-semibold text-[#1f2937] dark:text-[#e5e7eb] mb-3">
                  Technical Specifications
                </h3>
                <div className="space-y-3">
                  {product.operatingSystem && (
                    <div className="flex justify-between">
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">
                        Operating System
                      </span>
                      <span className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.operatingSystem}
                      </span>
                    </div>
                  )}
                  {product.processor && (
                    <div className="flex justify-between">
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">
                        Processor
                      </span>
                      <span className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.processor}
                      </span>
                    </div>
                  )}
                  {product.graphics && (
                    <div className="flex justify-between">
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">
                        Graphics
                      </span>
                      <span className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.graphics}
                      </span>
                    </div>
                  )}
                  {product.display && (
                    <div className="flex justify-between">
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">
                        Display
                      </span>
                      <span className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.display}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Connectivity & Physical */}
              <div>
                <h3 className="text-lg font-semibold text-[#1f2937] dark:text-[#e5e7eb] mb-3">
                  Connectivity & Physical
                </h3>
                <div className="space-y-3">
                  {product.connectivity && (
                    <div className="flex justify-between">
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">
                        Connectivity
                      </span>
                      <span className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.connectivity}
                      </span>
                    </div>
                  )}
                  {product.ports && (
                    <div className="flex justify-between">
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">
                        Ports
                      </span>
                      <span className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.ports}
                      </span>
                    </div>
                  )}
                  {product.battery && (
                    <div className="flex justify-between">
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">
                        Battery
                      </span>
                      <span className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.battery}
                      </span>
                    </div>
                  )}
                  {product.weight && (
                    <div className="flex justify-between">
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">
                        Weight
                      </span>
                      <span className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.weight} kg
                      </span>
                    </div>
                  )}
                  {product.dimensions && (
                    <div className="flex justify-between">
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">
                        Dimensions
                      </span>
                      <span className="text-[#1f2937] dark:text-[#e5e7eb]">
                        {product.dimensions} cm
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-6 pt-6 border-t border-[#e5e7eb] dark:border-[#374151]">
              <h3 className="text-lg font-semibold text-[#1f2937] dark:text-[#e5e7eb] mb-3">
                Additional Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.colorOptions && (
                  <div>
                    <span className="text-[#6b7280] dark:text-[#9ca3af]">
                      Color Options
                    </span>
                    <p className="text-[#1f2937] dark:text-[#e5e7eb]">
                      {product.colorOptions}
                    </p>
                  </div>
                )}
                {product.warranty && (
                  <div>
                    <span className="text-[#6b7280] dark:text-[#9ca3af]">
                      Warranty
                    </span>
                    <p className="text-[#1f2937] dark:text-[#e5e7eb]">
                      {product.warranty} year(s)
                    </p>
                  </div>
                )}
                {product.releaseDate && (
                  <div>
                    <span className="text-[#6b7280] dark:text-[#9ca3af]">
                      Release Date
                    </span>
                    <p className="text-[#1f2937] dark:text-[#e5e7eb]">
                      {product.releaseDate}
                    </p>
                  </div>
                )}
                {product.tags && (
                  <div>
                    <span className="text-[#6b7280] dark:text-[#9ca3af]">
                      Tags
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {product.tags.split(",").map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-[#e5e7eb] dark:bg-[#374151] text-[#6b7280] dark:text-[#9ca3af] px-2 py-1 rounded-full"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
