"use client";

import type React from "react";

import { useState } from "react";
import { Search, Phone } from "lucide-react";

export default function JunkyardSearch() {
  const [searchParams, setSearchParams] = useState({
    year: "",
    engineSize: "",
    make: "",
    model: "",
    transmission: "",
    part: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission
    console.log("Search params:", searchParams);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Find A Part Now</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <select
            id="year"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={searchParams.year}
            onChange={(e) =>
              setSearchParams((prev) => ({ ...prev, year: e.target.value }))
            }
          >
            <option value="">Year</option>
            {Array.from(
              { length: 30 },
              (_, i) => new Date().getFullYear() - i
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            id="engineSize"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={searchParams.engineSize}
            onChange={(e) =>
              setSearchParams((prev) => ({
                ...prev,
                engineSize: e.target.value,
              }))
            }
          >
            <option value="">Engine Size</option>
            <option value="4cyl">4 Cylinder</option>
            <option value="6cyl">6 Cylinder</option>
            <option value="8cyl">8 Cylinder</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select
            id="make"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={searchParams.make}
            onChange={(e) =>
              setSearchParams((prev) => ({ ...prev, make: e.target.value }))
            }
          >
            <option value="">Make</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="ford">Ford</option>
            {/* Add more makes */}
          </select>

          <select
            id="model"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={searchParams.model}
            onChange={(e) =>
              setSearchParams((prev) => ({ ...prev, model: e.target.value }))
            }
          >
            <option value="">Model</option>
            {/* Models will be populated based on selected make */}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select
            id="transmission"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={searchParams.transmission}
            onChange={(e) =>
              setSearchParams((prev) => ({
                ...prev,
                transmission: e.target.value,
              }))
            }
          >
            <option value="">Transmission</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
            <option value="cvt">CVT</option>
          </select>

          <select
            id="part"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={searchParams.part}
            onChange={(e) =>
              setSearchParams((prev) => ({ ...prev, part: e.target.value }))
            }
          >
            <option value="">Part</option>
            <option value="engine">Engine</option>
            <option value="transmission">Transmission</option>
            <option value="brakes">Brakes</option>
            {/* Add more parts */}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 
                   transition-colors flex items-center justify-center space-x-2"
        >
          <Search className="w-5 h-5" />
          <span>Search Parts</span>
        </button>
      </form>

      {/* Phone section moved directly below the form */}
      <div className="mt-4 bg-blue-600 text-white rounded-lg p-4 flex items-center justify-center">
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-2" />
          {/* <span className="font-bold">Need help? Call (888) 338-9066</span> */}
        </div>
      </div>
    </div>
  );
}
