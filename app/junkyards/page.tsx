import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import JunkyardSearch from "@/components/junkyard-search";
import LocationGrid from "@/components/location-grid";

export default function JunkyardsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-70">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20102005-Qk1PfcAwjDf4Y5L6DuaGrEit4zBSEr.png"
            alt="Junkyard background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Junkyards Near Me
            </h1>
            <p className="text-lg md:text-xl">
              Our services are transparent as you can check on our website the
              location of the vehicle from which the parts are being sold. We
              strive hard in making all your experiences smooth and secure with
              us. Looking for an old car or parts, junkyards in Alabama could be
              a parts goldmine for you.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20102114-MjEMImJGmrigFAtP4PyY7a02ryiptr.png"
                alt="Engine parts"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <JunkyardSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Quality Inspection</h3>
              <p className="text-gray-600">
                We inspect all used parts before shipping. We test for
                mechanical and electrical functioning on the same model you
                choose.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">60-Day Warranty</h3>
              <p className="text-gray-600">
                We provide 60 days of unquestioned warranty on all our products
                and up to 1-year on some parts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Free Shipping</h3>
              <p className="text-gray-600">
                We provide free shipping within the state. We have partnered
                with all major shipping carriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Junkyards</h2>
          <LocationGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Finding Parts?</h2>
          <p className="text-xl mb-6">
            Call us now or submit a request, and we'll help you find the exact
            part you need.
          </p>
          <div className="flex justify-center space-x-4">
            (877)-988-8045
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-md 
                       hover:bg-blue-800 transition-colors"
            >
              Submit Request
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
