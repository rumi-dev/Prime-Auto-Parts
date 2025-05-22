import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

interface SearchByMakeProps {
  page: string;
}

const MAKE_ICONS = [
  ["/acura-logo.webp", "Acura"],
  ["/audi-logo.webp", "Audi"],
  ["/bmw-logo.webp", "BMW"],
  ["/buick-logo.webp", "Buick"],
  ["/cadillac-logo.webp", "Cadillac"],
  ["/chevrolet-logo.webp", "Chevrolet"],
  ["/chrysler-logo.webp", "Chrysler"],
  ["/dodge-logo.webp", "Dodge"],
  ["/eagle-logo.webp", "Eagle"],
  ["/ford-logo.webp", "Ford"],
  ["/gmc-logo.webp", "GMC"],
  ["/honda-logo.webp", "Honda"],
  ["/hyundai-logo.webp", "Hyundai"],
  ["/infiniti-logo.webp", "Infiniti"],
  ["/isuzu-logo.webp", "Isuzu"],
  ["/jaguar-logo.webp", "Jaguar"],
  ["/jeep-logo.webp", "Jeep"],
  ["/kia-logo.webp", "Kia"],
  ["/land-rover-logo.webp", "Landrover"],
  ["/lexus-logo.webp", "Lexus"],
  ["/lincoln-logo.webp", "Lincoln"],
  ["/mazda-logo.webp", "Mazda"],
  ["/mercedes-benz-logo.webp", "Mercedes"],
  ["/mercury-logo.webp", "Mercury"],
  ["/mini-logo.webp", "Mini"],
  ["/mitsubishi-logo.webp", "Mitsubishi"],
  ["/nissan-logo.webp", "Nissan"],
  ["/pontiac-logo.webp", "Pontiac"],
  ["/porsche-logo.webp", "Porsche"],
  ["/saab-logo.webp", "Saab"],
  ["/saturn-logo.webp", "Saturn"],
  ["/subaru-logo.webp", "Subaru"],
  ["/suzuki-logo.webp", "Suzuki"],
  ["/toyota-logo.webp", "Toyota"],
  ["/volkswagen-logo.webp", "Volkswagen"],
  ["/volvo-logo.webp", "Volvo"],
];

export default function SearchByMake({ page }: SearchByMakeProps) {
  return (
    <>
      <div className="flex flex-row mt-10 items-center ml-4">
        <Search size={18} className="text-[#002E5B]" />
        <h4 className="font-sans text-[#002E5B] text-[20px] font-bold uppercase ml-2">
          SEARCH BY CAR MAKE
        </h4>
      </div>
      <div className="w-full mx-auto max-w-screen-xl mt-5">
        <div className="mx-5 grid grid-cols-4 lg:grid-cols-5 md:grid-cols-5 gap-x-5 lg:gap-x-28 md:gap-x-14 gap-y-5">
          {MAKE_ICONS.map((item, index) => {
            const href =
              page === "partscentral"
                ? encodeURIComponent(item[1].toLowerCase())
                : page === "transmissions"
                ? `used-transmissions`
                : page === "engines"
                ? `used-engines`
                : "";

            // Adjust the label for transmissions
            const label =
              page === "transmissions" ? (
                <>
                  <span className="block sm:hidden">{item[1]}</span>
                  <span className="hidden sm:inline">
                    Used {item[1]} Transmissions
                  </span>
                </>
              ) : page === "partscentral" ? (
                `${item[1]}`
              ) : page === "engines" ? (
                `Used ${item[1]} Engines`
              ) : (
                ""
              );

            return (
              <Link href="#" key={index}>
                <div className="w-50 py-5 items-center flex flex-col w-50 h-50">
                  <Image
                    src={
                      `make-logo/${item[0]}` ||
                      "/placeholder.svg?height=70&width=70"
                    }
                    alt={item[1]}
                    width={70}
                    height={70}
                  />
                  <p className="text-gray-700 mt-2 text-center whitespace-wrap">
                    {label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
