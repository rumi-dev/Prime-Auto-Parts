import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowLeft } from "lucide-react";

interface JunkyardLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  description: string;
  image: string;
}

// This would normally fetch from an API
async function getLocations(state: string): Promise<JunkyardLocation[]> {
  // Simulate API call
  return [
    {
      id: "1",
      name: "Quality Auto parts central",
      address: "123 parts central Lane",
      city: "Birmingham",
      state: "Alabama",
      zip: "35201",
      phone: "(205) 555-0123",
      hours: "Mon-Sat: 8AM-6PM",
      description:
        "Specializing in domestic and foreign auto parts with a huge inventory.",
      image: "/placeholder.svg",
    },
    // Add more locations
  ];
}

export default async function StatePage({
  params,
}: {
  params: { state: string };
}) {
  const locations = await getLocations(params.state);
  const state = params.state.charAt(0).toUpperCase() + params.state.slice(1);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Link
          href="/junkyards"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Locations
        </Link>

        <h1 className="text-3xl font-bold mb-8">Junkyards in {state}</h1>

        <div className="grid gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-48 md:h-full">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold mb-2">{location.name}</h2>

                  <p className="text-gray-600 mb-4">{location.description}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">
                          {location.address}
                          <br />
                          {location.city}, {location.state} {location.zip}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-gray-600">{location.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href={`tel:${location.phone}`}
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 
                               rounded-md hover:bg-red-700 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      {location.phone}
                    </a>

                    <Link
                      href={`/junkyards/${params.state}/${location.id}`}
                      className="inline-flex items-center border border-gray-300 text-gray-700 
                               px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      View Inventory
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
