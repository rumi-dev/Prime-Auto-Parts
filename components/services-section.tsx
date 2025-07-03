import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">SERVICES</h2>
          <p className="text-xl">MILLIONS OF QUALITY USED OEM PARTS</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/services-1.png?height=80&width=80"
                alt="Warranty Icon"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">90 DAY WARRANTY</h3>
            <p className="text-gray-600 mb-4">
              We provide a warranty on most Prime Auto Parts Pro type.
            </p>
            <p className="text-gray-600">
              We offer extended warrantees on many products at competitive
              prices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/services-2.png?height=80&width=80"
                alt="Shipping Icon"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">FREE SHIPPING</h3>
            <p className="text-gray-600 mb-4">
              We ship Prime Auto Parts Pro used auto and truck parts to anywhere in the
              US and many international locations.
            </p>
            <p className="text-gray-600">
              We offer FREE Shipping within the continental 48 US States.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/services-3.png?height=80&width=80"
                alt="Search Icon"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">SEARCH ALL BRANDS</h3>
            <p className="text-gray-600 mb-4">
              From aftermarket or replacement parts, we will help you find the
              best
            </p>
            <p className="text-gray-600">offer and you can find them here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
