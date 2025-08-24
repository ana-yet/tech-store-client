import React from "react";
import Image from "next/image";
import Link from "next/link";

const TechStoreBanner = () => {
  return (
    <div className="relative w-full h-96 md:h-[calc(100vh-30vh)] bg-[#1f2937] dark:bg-[#121212] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/banner.webp"
          alt="Tech Store Banner"
          fill
          priority
          className="object-cover opacity-40"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f2937] via-transparent to-transparent dark:from-[#121212]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Next-Gen Tech
            <span className="text-[#3b82f6] block">At Your Fingertips</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#e5e7eb] mb-8">
            Discover the latest innovations in technology with exclusive deals
            and premium products
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={"/products"}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Shop Now
            </Link>
            <Link
              href={"/products"}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 z-0 opacity-10">
        <div className="absolute right-20 top-20 w-32 h-32 rounded-full bg-[#3b82f6]"></div>
        <div className="absolute right-40 bottom-40 w-24 h-24 rounded-full bg-[#22c55e]"></div>
        <div className="absolute right-10 bottom-20 w-16 h-16 rounded-full bg-[#f97316]"></div>
      </div>
    </div>
  );
};

export default TechStoreBanner;
