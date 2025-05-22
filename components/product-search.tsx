"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

interface VehicleSearch {
  year: string
  make: string
  model: string
  engine: string
  transmission: string
  part: string
}

export default function ProductSearch() {
  const [searchParams, setSearchParams] = useState<VehicleSearch>({
    year: "",
    make: "",
    model: "",
    engine: "",
    transmission: "",
    part: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search submission
    console.log("Search params:", searchParams)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Find Your Part</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
              Year
            </label>
            <select
              id="year"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
              value={searchParams.year}
              onChange={(e) => setSearchParams((prev) => ({ ...prev, year: e.target.value }))}
            >
              <option value="">Select Year</option>
              {/* Add year options dynamically */}
            </select>
          </div>

          <div>
            <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
              Make
            </label>
            <select
              id="make"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
              value={searchParams.make}
              onChange={(e) => setSearchParams((prev) => ({ ...prev, make: e.target.value }))}
            >
              <option value="">Select Make</option>
              {/* Add make options dynamically */}
            </select>
          </div>

          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
              Model
            </label>
            <select
              id="model"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
              value={searchParams.model}
              onChange={(e) => setSearchParams((prev) => ({ ...prev, model: e.target.value }))}
            >
              <option value="">Select Model</option>
              {/* Add model options dynamically */}
            </select>
          </div>

          <div>
            <label htmlFor="engine" className="block text-sm font-medium text-gray-700 mb-1">
              Engine
            </label>
            <select
              id="engine"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
              value={searchParams.engine}
              onChange={(e) => setSearchParams((prev) => ({ ...prev, engine: e.target.value }))}
            >
              <option value="">Select Engine</option>
              {/* Add engine options dynamically */}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">
              Transmission
            </label>
            <select
              id="transmission"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
              value={searchParams.transmission}
              onChange={(e) => setSearchParams((prev) => ({ ...prev, transmission: e.target.value }))}
            >
              <option value="">Select Transmission</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
              <option value="cvt">CVT</option>
            </select>
          </div>

          <div>
            <label htmlFor="part" className="block text-sm font-medium text-gray-700 mb-1">
              Part Type
            </label>
            <select
              id="part"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
              value={searchParams.part}
              onChange={(e) => setSearchParams((prev) => ({ ...prev, part: e.target.value }))}
            >
              <option value="">Select Part</option>
              <option value="engine">Engine</option>
              <option value="transmission">Transmission</option>
              <option value="brakes">Brakes</option>
              <option value="suspension">Suspension</option>
              {/* Add more part options */}
            </select>
          </div>
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
    </div>
  )
}

