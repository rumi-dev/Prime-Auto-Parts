"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Search } from "lucide-react"

const locations = [
  { state: "Alabama", count: 25 },
  { state: "Alaska", count: 8 },
  { state: "Arizona", count: 18 },
  { state: "Arkansas", count: 12 },
  { state: "California", count: 45 },
  { state: "Colorado", count: 15 },
  { state: "Connecticut", count: 10 },
  { state: "Delaware", count: 5 },
  { state: "Florida", count: 35 },
  { state: "Georgia", count: 28 },
  // Add more states...
]

export default function LocationGrid() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLocations = locations.filter((location) =>
    location.state.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by state..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 
                     focus:ring-red-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredLocations.map((location) => (
          <Link
            key={location.state}
            href={`/junkyards/${location.state.toLowerCase()}`}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-lg">Junkyards in {location.state}</h3>
                <p className="text-gray-600 text-sm">{location.count} locations</p>
              </div>
              <MapPin className="w-5 h-5 text-red-600" />
            </div>
          </Link>
        ))}
      </div>

      {filteredLocations.length === 0 && (
        <div className="text-center text-gray-500 py-8">No locations found matching your search.</div>
      )}
    </div>
  )
}

