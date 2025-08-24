import React from "react";
import getAllProducts from "../lib/getAllProduct";
import ProductCard from "./ProductCard";

const Products = async () => {
  const data = await getAllProducts();

  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-[#121212] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1f2937] dark:text-[#e5e7eb] mb-2">
            Our Products
          </h1>
          <p className="text-[#6b7280] dark:text-[#9ca3af]">
            Discover our latest tech products and innovations
          </p>
        </div>

        {data && data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-[#6b7280] dark:text-[#9ca3af] text-lg">
              No products found
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
