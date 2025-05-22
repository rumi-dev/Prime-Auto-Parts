"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

export default function PartSearch() {
  const [searchParams, setSearchParams] = useState({
    year: "",
    engineSize: "",
    car: "",
    model: "",
    transmission: "",
    part: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search submission
    console.log("Search params:", searchParams)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <select
          value={searchParams.year}
          onChange={(e) => setSearchParams((prev) => ({ ...prev, year: e.target.value }))}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Year</option>
          {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          value={searchParams.engineSize}
          onChange={(e) => setSearchParams((prev) => ({ ...prev, engineSize: e.target.value }))}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Engine Size</option>
          <option value="4cyl">4 Cylinder</option>
          <option value="6cyl">6 Cylinder</option>
          <option value="8cyl">8 Cylinder</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <select
          value={searchParams.car}
          onChange={(e) => setSearchParams((prev) => ({ ...prev, car: e.target.value }))}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Make</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          <option value="ford">Ford</option>
        </select>

        <select
          value={searchParams.model}
          onChange={(e) => setSearchParams((prev) => ({ ...prev, model: e.target.value }))}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Model</option>
          {/* Models will be populated based on selected car */}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <select
          value={searchParams.transmission}
          onChange={(e) => setSearchParams((prev) => ({ ...prev, transmission: e.target.value }))}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Transmission</option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
          <option value="cvt">CVT</option>
        </select>

        <select
          value={searchParams.part}
          onChange={(e) => setSearchParams((prev) => ({ ...prev, part: e.target.value }))}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Part</option>
          <option value="engine">Engine</option>
          <option value="transmission">Transmission</option>
          <option value="brakes">Brakes</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 
                 transition-colors flex items-center justify-center space-x-2"
      >
        <Search className="w-5 h-5" />
        <span>Next</span>
      </button>
    </form>
  )
}

