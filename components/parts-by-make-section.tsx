import Image from "next/image";
import Link from "next/link";

const carMakes = [
  { name: "Acura", logo: "/acura-logo.webp?height=60&width=60" },
  { name: "Audi", logo: "/audi-logo.webp?height=60&width=60" },
  { name: "BMW", logo: "/bmw-logo.webp?height=60&width=60" },
  { name: "Buick", logo: "/buick-logo.webp?height=60&width=60" },
  { name: "Cadillac", logo: "/cadillac-logo.webp?height=60&width=60" },
  { name: "Chevrolet", logo: "/chevrolet-logo.webp?height=60&width=60" },
  { name: "Chrysler", logo: "/chrysler-logo.webp?height=60&width=60" },
  { name: "Dodge", logo: "/dodge-logo.webp?height=60&width=60" },
  { name: "Eagle", logo: "/eagle-logo.webp?height=60&width=60" },
  { name: "Ford", logo: "/ford-logo.webp?height=60&width=60" },
  { name: "GMC", logo: "/gmc-logo.webp?height=60&width=60" },
  { name: "Honda", logo: "/honda-logo.webp?height=60&width=60" },
  { name: "Hyundai", logo: "/hyundai-logo.webp?height=60&width=60" },
  { name: "Infiniti", logo: "/infiniti-logo.webp?height=60&width=60" },
  { name: "Isuzu", logo: "/isuzu-logo.webp?height=60&width=60" },
  { name: "Jaguar", logo: "/jaguar-logo.webp?height=60&width=60" },
  { name: "Jeep", logo: "/jeep-logo.webp?height=60&width=60" },
  { name: "Kia", logo: "/kia-logo.webp?height=60&width=60" },
  { name: "Landrover", logo: "/land-rover-logo.webp?height=60&width=60" },
  { name: "Lexus", logo: "/lexus-logo.webp?height=60&width=60" },
  { name: "Lincoln", logo: "/lincoln-logo.webp?height=60&width=60" },
  { name: "Mazda", logo: "/mazda-logo.webp?height=60&width=60" },
  { name: "Mercedes", logo: "/mercedes-benz-logo.webp?height=60&width=60" },
  { name: "Mercury", logo: "/mercury-logo.webp?height=60&width=60" },
  { name: "Mini", logo: "/mini-logo.webp?height=60&width=60" },
  { name: "Mitsubishi", logo: "/mitsubishi-logo.webp?height=60&width=60" },
  { name: "Nissan", logo: "/nissan-logo.webp?height=60&width=60" },
  { name: "Pontiac", logo: "/pontiac-logo.webp?height=60&width=60" },
  { name: "Porsche", logo: "/porsche-logo.webp?height=60&width=60" },
  { name: "Saab", logo: "/saab-logo.webp?height=60&width=60" },
  { name: "Saturn", logo: "/saturn-logo.webp?height=60&width=60" },
  { name: "Subaru", logo: "/subaru-logo.webp?height=60&width=60" },
  { name: "Suzuki", logo: "/suzuki-logo.webp?height=60&width=60" },
  { name: "Toyota", logo: "/toyota-logo.webp?height=60&width=60" },
  { name: "Volkswagen", logo: "/volkswagen-logo.webp?height=60&width=60" },
  { name: "Volvo", logo: "/volvo-logo.webp?height=60&width=60" },
];

export default function PartsByMakeSection() {
  return (
    <section className="py-16 w-full">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Prime Auto Parts Pro AUTO PARTS BY MAKE
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {carMakes.map((make, index) => (
            <Link
              href={`#`}
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
            >
              <Image
                src={`/make-logo/${make.logo}` || "/placeholder.svg"}
                alt={`${make.name} logo`}
                width={60}
                height={60}
                className="mb-3 object-contain"
              />
              <span className="font-medium text-lg">{make.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
