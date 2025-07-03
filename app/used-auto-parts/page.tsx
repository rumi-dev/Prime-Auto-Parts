import SubHeadComponent from "@/components/sub-head-component";
import SearchByMake from "@/components/search-by-make";
import HeroSection from "@/components/hero-section";

export const metadata = {
  title: "Used Auto Parts for Sale | Used Car Parts for Sale",
  description:
    "At Prime Auto Parts Pro, we offer Used Auto Parts for your car needs that are examined by our professionals abiding the industry standards to make journeys safe and secure",
  alternates: {
    canonical: "https://primeautopartspro.us/used-auto-parts",
  },
};

export default function UsedAutoPartsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* <SubHeadComponent
        title="Used Auto Parts"
        subTitle="Unlock Quality, Savings, and Performance with Affordable Used Auto Parts"
        bgImageUrl="/banner-home.png?height=600&width=1600"
        selectedMake="Choose Your Car"
        selectedPart="Choose Part"
      /> */}
      <HeroSection
        title="Used Auto Parts"
        description="Unlock Quality, Savings, and Performance with Affordable Used Auto Parts"
        background="/banner-home.png?height=600&width=1200"
      />

      <div className="mx-auto w-full max-w-screen-xl flex flex-col p-4 py-6 lg:py-8">
        <p className="text-gray-700 text-[17px] mt-8">
          Your Ride a New Life with Quality Used Auto Parts at the Best Prices.
          Prime Auto Parts Pro is your trusted source for quality and{" "}
          <span className="font-bold">used auto parts stores</span> to give your
          vehicle new life. Whether you are doing any DIY project, major
          repairs, or just simple maintenance that you&apos;re undertaking, our
          Web-based platform is committed to providing the best deals on car
          parts for sale at unbeatable prices.
        </p>

        <h2 className="font-sans text-[#002E5B] text-[25px] font-extrabold uppercase mt-10">
          Your Source for Used Auto Parts
        </h2>
        <p className="text-gray-700 text-[17px] mt-8">
          Finding the right parts in the world of vehicle repairs can be like
          searching for treasure, as likened to a needle in a haystack. But here
          at Prime Auto Parts Pro, we make the process easy. Our big inventory is
          filled with used <span className="font-bold">car parts for sale</span>{" "}
          that are cautiously inspected and re-inspected to meet our standards.
          From power plants and transmissions to even the tiniest of parts, we
          have it all in stock, so you may need to get your vehicle right.
        </p>

        <h2 className="font-sans text-[#002E5B] text-[25px] font-extrabold mt-10 italic">
          Why Buy from Prime Auto Parts Pro?
        </h2>
        <p className="text-gray-700 text-[17px] mt-8">1. Always Best Quality</p>
        <p className="text-gray-700 text-[17px] mt-8">
          Quality for us is not just a word; it&apos;s a commitment. Every
          single used part we supply has been comprehensively checked to perform
          as you would expect. Whether it is an engine or any other component,
          big or small, rest assured we do the job right with{" "}
          <span className="font-bold">quality used auto parts.</span>
        </p>
        <p className="text-gray-700 text-[17px] mt-8">
          2. Unparalleled Convenience
        </p>
        <p className="text-gray-700 text-[17px] mt-8">
          We know minutes count when your car is down. That&apos;s why we design
          our used auto parts stores with convenience in mind. Conveniently
          browse our catalog from the comfort of your home and find exactly what
          you need without the aggravation of visiting multiple stores. Once you
          make your selection, we will ship your parts directly to you free of
          charge!
        </p>
        <p className="text-gray-700 text-[17px] mt-8">
          3. A Haven for Car Enthusiasts
        </p>
        <p className="text-gray-700 text-[17px] mt-8">
          Whether you restore classic cars or tune up your daily driver, this is
          your one-stop shop: Prime Auto Parts Pro. Our website is not exactly a
          marketplace but, foremost, a community for car enthusiasts. Get
          immersed in our world of replacement auto parts and find the hidden
          gems and super-rare finds here. We shall be happy to serve your
          passion with the best used car parts for sale on the market.
        </p>
        <p className="text-gray-700 text-[17px] mt-8">4. 365 Days of Service</p>
        <p className="text-gray-700 text-[17px] mt-8">
          Your car doesn&apos;t take a day off, and neither do we. Our dedicated
          sales team is happy to assist in finding those parts any time of the
          year. From emergencies to long projects, remember you need us;
          we&apos;ll be there.
        </p>

        <h2 className="font-sans text-[#002E5B] text-[25px] font-extrabold mt-10 italic">
          Buy with Confidence, Drive with Confidence
        </h2>
        <p className="text-gray-700 text-[17px] mt-8">
          At Prime Auto Parts Pro, you purchase more than a product. Buy peace of mind
          when buying used car parts. Backed by quality, you can hit the road
          confidently with warranties that range from 60 to 90 days. Free
          shipping across the continental United States makes it easier than
          ever to get your vehicle back on the road.
        </p>

        <h2 className="font-sans text-[#002E5B] text-[25px] font-extrabold mt-10 italic">
          Your Vehicle&apos;s Renaissance Awaits
        </h2>
        <p className="text-gray-700 text-[17px] mt-8">
          At Prime Auto Parts Pro, every vehicle deserves another chance. From the most
          beloved and cherished classics to the latest marvels of engineering,
          our used auto parts stores can get you all that is required to
          restore, repair, and rejuvenate your ride. Come and explore our
          inventory today for a difference in working with a trusted partner in
          the automotive industry.
        </p>
        <p className="text-gray-700 text-[17px] mt-8">
          Want to take your auto parts journey to a whole new level? Stop by our
          website and browse through the countless car parts for sale, and you
          will be amazed at just how easily you will be able to{" "}
          <span className="font-bold">buy used car parts</span> from a name you
          truly can trust. The next chapter of your vehicle starts here.
          Let&apos;s make it a good one.
        </p>

        <SearchByMake page="primeautopartspro" />
      </div>
    </main>
  );
}
