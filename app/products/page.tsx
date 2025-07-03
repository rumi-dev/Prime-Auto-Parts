import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import PartSearch from "@/components/part-search";

const manufacturers = [
  { name: "ABS Control Module", link: "/products/abs-control-module" },
  { name: "ABS System", link: "/products/abs-system" },
  { name: "AC Compressor", link: "/products/ac-compressor" },
  { name: "Bentley", link: "/products/bentley" },
  { name: "BMW", link: "/products/bmw" },
  { name: "Buick", link: "/products/buick" },
  { name: "Cadillac", link: "/products/cadillac" },
  { name: "Chevy", link: "/products/chevy" },
  { name: "Chrysler", link: "/products/chrysler" },
  { name: "Dodge", link: "/products/dodge" },
  { name: "Eagle", link: "/products/eagle" },
  { name: "Ferrari", link: "/products/ferrari" },
  { name: "Fiat", link: "/products/fiat" },
  { name: "Ford", link: "/products/ford" },
  { name: "Freightliner", link: "/products/freightliner" },
  // Add more manufacturers...
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-70">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20101150-S6KXfG4YxEUIX7bgGq0x0SnP53fuxd.png"
            alt="Auto parts background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Used Auto Parts
            </h1>
            <p className="text-lg">
              Acura was created around the same time as Infiniti and Lexus the
              premium brands by Japanese rivals Nissan and Toyota respectively.
              Voluntary export restraints by the Japanese government helped
              increase profits for Japanese automakers by exporting more
              expensive cars to the U.S.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20101211-P21W4HOEQLD736MT5GhUJkZXZj937S.png"
                alt="Car engine"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Find A Part Now</h2>
                <PartSearch />

                {/* Phone section moved directly below the form */}
                <div className="mt-4 bg-blue-600 text-white rounded-lg p-4 flex items-center justify-center">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-2" />
                    {/* <span className="text-lg font-bold">(877)-988-8045</span> */}
                  </div>
                  <span className="ml-4">Call now to order</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturers Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Browse by Manufacturer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {manufacturers.map((manufacturer, index) => (
              <Link
                key={index}
                href="#"
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow 
                         text-center flex items-center justify-center"
              >
                <span className="text-gray-800 hover:text-red-600 transition-colors">
                  {manufacturer.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Prime Auto Parts Pro</h2>
            <p>
              We at primeautopartspro.us always try to make your experience better by
              offering you a list of inventory to help you navigate our prime auto parts pro yards in different parts of the state and check the
              nearest location for your Auto parts.
            </p>

            <h3>Our Guarantees</h3>
            <ol>
              <li>
                <strong>We Inspect All Parts</strong>
                <p>
                  primeautopartspro.us will help you find Acura used parts from our
                  auto Prime Auto Parts Pro inventory. We test all parts before
                  shipping. We test for mechanical and electrical functioning on
                  the same model you choose.
                </p>
              </li>
              <li>
                <strong>We Guarantee All Parts</strong>
                <p>
                  We have partnered with junkyards nationwide and you can choose
                  between millions of used auto parts from our huge network of
                  locally owned Prime Auto Parts Pro yards. We provide 60 days of
                  unquestioned warranty on all our products.
                </p>
              </li>
              <li>
                <strong>Nationwide Shipping and Delivery</strong>
                <p>
                  We provide free shipping within the continental 48 US States.
                  We have partnered with all major shipping and freight carriers
                  to ship any used part, used engine, used transmission, and
                  more to any address around the globe.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Part?</h2>
          <p className="text-xl mb-8">
            Leave your worries with us if our local Prime Auto Parts Pro yards do not
            have your used part in stock, we will find it using our used auto
            parts locator tool at no charge for you.
          </p>
          <div className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-md font-bold">
            <Phone className="w-5 h-5 mr-2" />
            {/* Call (877)-988-8045 */}
          </div>
        </div>
      </section>
    </div>
  );
}
