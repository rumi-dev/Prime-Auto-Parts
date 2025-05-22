import Image from "next/image";
import SubHeadComponent from "@/components/sub-head-component";
import SearchByMake from "@/components/search-by-make";
import HeroSection from "@/components/hero-section";

export const metadata = {
  title: "Used Engines for Sale | Used Car Engines for Sale",
  description:
    "We at Parts Central strategize to provide dependable, superior-quality Used Engines across the United States that entice exciting travel experiences all the time.",
  alternates: {
    canonical: "https://partscentral.us/used-engines",
  },
};

export default function UsedEnginesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* <SubHeadComponent
        title="Used Engines for Sale"
        subTitle="Unlock Power and Savings with High-Quality Used Engines for Sale"
        bgImageUrl="/banner-home.png?height=600&width=1600"
        selectedMake="Choose Your Car"
        selectedPart="Choose Part"
      /> */}

      <HeroSection
        title="Used Engines for Sale"
        description="Unlock Power and Savings with High-Quality Used Engines for Sale"
        background="/banner-home.png?height=600&width=1200"
      />

      <div className="mx-auto w-full max-w-screen-xl flex lg:flex-row md:flex-row flex-col mt-10">
        <div className="px-3 mb-10">
          <h2 className="font-sans text-[#002E5B] text-[28px] font-bold">
            Revive Your Vehicle&apos;s Performance: Find Reliable Used Engines
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            At Parts Central, your vehicle&apos;s performance will get reborn
            into a power-saving and reliable used engine for sale. Be it an
            automotive enthusiast, a mechanic, or whatever your reason for
            looking for an inexpensive way to replace an engine, our selection
            of used car engines for sale here is designed to meet and exceed
            your expectations.
          </p>

          <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">
            Used engines unlock the very heart of performance.
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            At Parts Central, used engines with warranty are, rather, much more
            than just parts; they&apos;re the heartbeat that beats for your
            unrealized potential. Visualise a powerful engine, whose
            quality&apos;s protected with our seal of standard. Each assembly of
            the engine is painstakingly inspected and tested against the highest
            parameters. We ensure completely assembled engines, complete with
            all crucial components such as manifolds, oil pans, and timing
            belts, among others.
          </p>

          <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">
            What Is Included and What Is Not
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            All <span className="font-black">used engines for sale</span> here
            come with a comprehensive warranty on the long block, or core, of
            the engine. This does not include manifolds, gaskets, seals, hoses,
            and other specific accessories that may include turbos, starters,
            and alternators. Be assured that we do our best to sell
            high-performance running engines, but sometimes small repairs will
            be needed for parts to be replaced, such as water pumps or
            distributor caps; you can nonetheless depend on us for a solid
            foundation.
          </p>

          <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">
            Varied Solutions To Fit Any Budget
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            Determine the value of junkyard engines on sale and the value of the
            parts central engines available on the market for sale without
            having to break the bank. Here at Parts Central, we understand the
            right engine needed in your car, and that is why we&apos;re always
            ready with competitive prices that will not shortchange quality. Our
            engines come from trusted partners and are thoroughly tested for
            exceptional performance. Low-cost engines for sale give you an
            economical blend and dependability.
          </p>

          <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">
            Your Local Engine Source
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            If you need a venue that will enable you to find the used engines
            for sale near where you live, our online service will enable you to
            conduct a nice search and get what precisely fits your car&apos;s
            needs, either locally or far away. Please refer to the detailed
            listings below regarding junkyard engines for sale. From locating
            &apos;engine sales near me&apos; to delving deep into &apos;junkyard
            engines for sale&apos;, we will connect you to exactly what you
            need.
          </p>

          <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">
            Excellence with Us
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            Excellence in customer experience is what we pride ourselves on at
            Parts Central to meet all of your engine needs. Each one of the
            qualities and customer satisfaction that we commit to allows every
            one of our sold engines to be a step forward in order to revitalize
            the performance of your car. Take a look through our current product
            lineup today for an idea as to why we are becoming your number-one
            choice for used engines on sale.
          </p>
          <p className="text-gray-700 text-[17px] mt-4">
            Ready for an engine upgrade? Browse our online inventory of{" "}
            <span className="font-bold">used car engines for sale</span> and
            find the right one that keeps you running. Let Parts Central take
            you through this process and help you procure quality, reliable
            engines to get you back on the road with confidence. Begin your
            drive into the future of performance with the best!
          </p>
        </div>

        <Image
          src="/placeholder.svg?height=231&width=203"
          width={203}
          height={231}
          alt="used car engines for sale"
          className="self-start"
        />
      </div>
      <div className="mx-auto w-full max-w-screen-xl flex lg:flex-column md:flex-column flex-col">
        <SearchByMake page="engines" />
      </div>
    </main>
  );
}
