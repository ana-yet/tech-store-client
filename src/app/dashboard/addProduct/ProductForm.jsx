"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import {
  FiBox,
  FiCpu,
  FiMonitor,
  FiHardDrive,
  FiBattery,
  FiLayers,
  FiTag,
  FiAward,
  FiCheckSquare,
  FiDollarSign,
  FiCalendar,
  FiPocket,
  FiPackage,
  FiGrid,
  FiRadio,
  FiAnchor,
  FiCode,
  FiImage,
  FiPlus,
} from "react-icons/fi";

const ProductForm = () => {
  const { data: session } = useSession();
  console.log(session);
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    brand: "",
    model: "",
    releaseDate: "",
    operatingSystem: "",
    processor: "",
    memory: "",
    storage: "",
    display: "",
    graphics: "",
    connectivity: "",
    ports: "",
    battery: "",
    weight: "",
    dimensions: "",
    colorOptions: "",
    warranty: "",
    imageUrl: "",
    inStock: true,
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setProductData({ ...productData, [name]: checked });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Product Data:", productData);
    const payload = {
      ...productData,
      sellerName: session?.user?.name || "Admin",
      sellerEmail: session?.user?.email || "",
      sellerImage: session?.user?.image || "",
    };

    const res = fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await (await res).json();

    if (data.success == true) {
      alert("Product submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-[#121212] py-8 px-4">
      <div className="max-w-full mx-auto bg-white dark:bg-[#1e1e1e] rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e5e7eb] dark:border-[#374151]">
          <h2 className="text-2xl font-bold text-[#1f2937] dark:text-[#e5e7eb]">
            Add New Tech Product
          </h2>
          <p className="text-[#6b7280] dark:text-[#9ca3af]">
            Fill in the details below to add a new tech product to your
            inventory.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-4 flex items-center">
              <FiBox className="mr-2" /> Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Product Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiTag className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={productData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Category *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiGrid className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <select
                    name="category"
                    value={productData.category}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  >
                    <option value="">Select Category</option>
                    <option value="laptop">Laptop</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="tablet">Tablet</option>
                    <option value="smartwatch">Smartwatch</option>
                    <option value="headphones">Headphones</option>
                    <option value="camera">Camera</option>
                    <option value="accessories">Accessories</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Brand *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiAward className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="text"
                    name="brand"
                    value={productData.brand}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Model *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiCode className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="text"
                    name="model"
                    value={productData.model}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Price ($) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiDollarSign className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="number"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Release Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiCalendar className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="date"
                    name="releaseDate"
                    value={productData.releaseDate}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
              Product Description *
            </label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
            ></textarea>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="text-lg font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-4 flex items-center">
              <FiCpu className="mr-2" /> Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Operating System
                </label>
                <input
                  type="text"
                  name="operatingSystem"
                  value={productData.operatingSystem}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Processor
                </label>
                <input
                  type="text"
                  name="processor"
                  value={productData.processor}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Memory (RAM)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLayers className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="text"
                    name="memory"
                    value={productData.memory}
                    onChange={handleChange}
                    placeholder="e.g., 8GB DDR4"
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Storage
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiHardDrive className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="text"
                    name="storage"
                    value={productData.storage}
                    onChange={handleChange}
                    placeholder="e.g., 256GB SSD"
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Display
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMonitor className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="text"
                    name="display"
                    value={productData.display}
                    onChange={handleChange}
                    placeholder="e.g., 13.3-inch Retina"
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Graphics
                </label>
                <input
                  type="text"
                  name="graphics"
                  value={productData.graphics}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Connectivity
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiRadio className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="text"
                    name="connectivity"
                    value={productData.connectivity}
                    onChange={handleChange}
                    placeholder="e.g., Wi-Fi 6, Bluetooth 5.0"
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Ports
                </label>
                <input
                  type="text"
                  name="ports"
                  value={productData.ports}
                  onChange={handleChange}
                  placeholder="e.g., 2x USB-C, 1x HDMI"
                  className="w-full px-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Battery
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiBattery className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="text"
                    name="battery"
                    value={productData.battery}
                    onChange={handleChange}
                    placeholder="e.g., Up to 10 hours"
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Physical Attributes */}
          <div>
            <h3 className="text-lg font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-4 flex items-center">
              <FiPackage className="mr-2" /> Physical Attributes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Weight
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiAnchor className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="text"
                    name="weight"
                    value={productData.weight}
                    onChange={handleChange}
                    placeholder="e.g., 1.5 kg"
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Dimensions
                </label>
                <input
                  type="text"
                  name="dimensions"
                  value={productData.dimensions}
                  onChange={handleChange}
                  placeholder="e.g., 30.4 x 21.2 x 1.7 cm"
                  className="w-full px-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Color Options
                </label>
                <input
                  type="text"
                  name="colorOptions"
                  value={productData.colorOptions}
                  onChange={handleChange}
                  placeholder="e.g., Space Gray, Silver, Gold"
                  className="w-full px-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h3 className="text-lg font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-4 flex items-center">
              <FiPocket className="mr-2" /> Additional Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Warranty
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiAward className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="text"
                    name="warranty"
                    value={productData.warranty}
                    onChange={handleChange}
                    placeholder="e.g., 1 year limited warranty"
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Tags
                </label>
                <input
                  type="text"
                  name="tags"
                  value={productData.tags}
                  onChange={handleChange}
                  placeholder="e.g., gaming, portable, business"
                  className="w-full px-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1f2937] dark:text-[#e5e7eb] mb-1">
                  Image URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiImage className="text-[#6b7280] dark:text-[#9ca3af]" />
                  </div>
                  <input
                    type="url"
                    name="imageUrl"
                    value={productData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full pl-10 pr-3 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-[#1e1e1e] dark:text-[#e5e7eb]"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={productData.inStock}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#3b82f6] focus:ring-[#3b82f6] border-[#e5e7eb] dark:border-[#374151] rounded"
                />
                <label className="ml-2 block text-sm text-[#1f2937] dark:text-[#e5e7eb]">
                  In Stock
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b82f6] transition-colors flex items-center"
            >
              <FiPlus className="mr-2" /> Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
