import Image from "next/image";
import Link from "next/link";
import PartSearch from "@/components/part-search";
import { Phone } from "lucide-react";

const carMakes = [
  {
    name: "Acura",
    image: "/placeholder.svg",
    description:
      "We at primeautopartspro.us always try to make your experience better by offering you a list of inventory to help you navigate our Prime Auto Parts Pro",
  },
  {
    name: "Audi",
    image: "/placeholder.svg",
    description:
      "We at primeautopartspro.us always try to make your experience better by offering you a list of inventory to help you navigate our Prime Auto Parts Pro",
  },
  {
    name: "BMW",
    image: "/placeholder.svg",
    description:
      "We at primeautopartspro.us always try to make your experience better by offering you a list of inventory to help you navigate our Prime Auto Parts Pro",
  },
  {
    name: "Honda",
    image: "/placeholder.svg",
    description:
      "We at primeautopartspro.us always try to make your experience better by offering you a list of inventory to help you navigate our Prime Auto Parts Pro",
  },
  {
    name: "Ford",
    image: "/placeholder.svg",
    description:
      "We at primeautopartspro.us always try to make your experience better by offering you a list of inventory to help you navigate our Prime Auto Parts Pro",
  },
  {
    name: "Lexus",
    image: "/placeholder.svg",
    description:
      "We at primeautopartspro.us always try to make your experience better by offering you a list of inventory to help you navigate our Prime Auto Parts Pro",
  },
];

export default function MakePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-70">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20135516-LnQ8oD7wkgqYf5756EbDzGCRI3bO7U.png"
            alt="Auto parts background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Used Parts By Make
              </h1>
              <p className="text-lg">
                Our services are transparent as you can check on our website the
                location of the vehicle from which the parts are being sold. We
                strive hard in making all your experiences smooth and secure
                with us. Looking for an old car or parts, junkyards in Alabama
                could be a parts goldmine for you.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20135516-LnQ8oD7wkgqYf5756EbDzGCRI3bO7U.png"
                alt="Mechanic working on engine"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-center mb-6">
                Find A Part Now
              </h2>
              <PartSearch />

              {/* Phone section moved directly below the form */}
              <div className="mt-4 bg-blue-600 text-white rounded-lg p-4 flex items-center justify-center">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <Link
                    href="tel:+18779888045"
                    className="text-red-500 font-bold hover:underline"
                  >
                    <span className="text-lg font-bold">(877)-988-8045</span>
                  </Link>
                </div>
                <span className="ml-4">Call now to order</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carMakes.map((make, index) => (
              <Link
                key={index}
                // href={`/make/${make.name.toLowerCase()}`}
                href="#"
                className="group block"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={make.image || "/placeholder.svg"}
                      alt={`${make.name} cars`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">
                      Used {make.name} Parts
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {make.description}
                    </p>
                    <div className="mt-4 text-red-600 font-medium group-hover:text-red-700">
                      View Available Parts →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
