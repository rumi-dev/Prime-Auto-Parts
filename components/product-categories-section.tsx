import Image from "next/image";
import Link from "next/link";

const productCategories = [
  {
    title: "Engine Assembly",
    image: "/quality-home/Engine_Assembly.png?height=150&width=150",
    description:
      "Quality Used Engine & Transmission Parts sold as complete assemblies",
  },
  {
    title: "Transmission",
    image: "/quality-home/transmission.png?height=150&width=150",
    description:
      "Everything from an ECM Engine Computer and Electronic Control Modules to fit your car",
  },
  {
    title: "ABS Module",
    image: "/quality-home/ABS Module.png?height=150&width=150",
    description:
      "Quality Used Auto Body Parts that make your car look road-worthy",
  },
  {
    title: "ABS System",
    image: "/quality-home/ABS System.png?height=150&width=150",
    description:
      "Quality Used Mechanical Car Parts that get you back on the road for less money",
  },
  {
    title: "SPINDLE KNUCKLE - FRONT",
    image: "/quality-home/spindle.png?height=150&width=150",
    description: "Attach the upper and lower components of the suspension",
  },
  {
    title: "HEAD LIGHT ASSEMBLY",
    image: "/quality-home/head_light_assembly.png?height=150&width=150",
    description: "Important component of the car used for visibility",
  },
];

export default function ProductCategoriesSection() {
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="container">
        <div className="flex items-center justify-center mb-12">
          {/* <div className="relative h-12 w-12 mr-4">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Phone Icon"
              width={48}
              height={48}
              className="object-contain"
            />
          </div> */}
          <h2 className="text-3xl font-bold">Quality Used Auto Parts</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="p-4 flex">
                <div className="w-1/2">
                  <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                  <Link
                    // href={`/parts/${category.title
                    //   .toLowerCase()
                    //   .replace(/\s+/g, "-")}`}
                    href="#"
                    className="inline-block mt-4 bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors"
                  >
                    Know More
                  </Link>
                </div>
                <div className="w-1/2">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={150}
                    height={150}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="#"
            className="inline-block border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
