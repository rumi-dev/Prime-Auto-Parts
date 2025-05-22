import Image from "next/image";
import SubHeadComponent from "@/components/sub-head-component";
import SearchByMake from "@/components/search-by-make";
import HeroSection from "@/components/hero-section";

export const metadata = {
  title: "Used Transmissions for Sale | Used Car Transmissions",
  description:
    "If you are searching for a Used Transmission, then you have reached the perfect place at Parts Central. We offer a plethora of collectibles for all your vehicle needs.",
  alternates: {
    canonical: "https://partscentral.us/used-transmissions",
  },
};

export default function UsedTransmissionsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* <SubHeadComponent
        title="Used Transmissions for Sale"
        subTitle="Unlock Smooth Shifting and Savings with High-Quality Used Transmissions"
        bgImageUrl="/banner-home.png?height=600&width=1600"
        selectedMake="Choose Your Car"
        selectedPart="Choose Part"
      /> */}
      <HeroSection
        title="Used Transmissions for Sale"
        description="Unlock Smooth Shifting and Savings with High-Quality Used Transmissions"
        background="/banner-home.png?height=600&width=1200"
      />
      <div className="mx-auto w-full max-w-screen-xl flex lg:flex-row md:flex-row flex-col mt-10">
        <div className="px-3 mb-10">
          <h2 className="font-sans text-[#002E5B] text-[28px] font-bold">
            Shift into Gear with Confidence: Discover Reliable Used
            Transmissions
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            Parts Central is the ultimate destination where reliability meets
            affordability in the world of used transmissions. If you&apos;re on
            a quest to find the perfect transmission for your vehicle without
            breaking the bank, you&apos;ve come to the right place. Our
            selection of junkyard transmissions for sale offers a unique blend
            of quality, performance, and value, making it easier than ever to
            keep your vehicle running smoothly.
          </p>

          <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">
            The Heartbeat of Your Vehicle: Quality Transmissions
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            Transmission is more than just a component; it&apos;s the heartbeat
            of your vehicle. At Parts Central, we understand the importance of a{" "}
            <span className="font-bold">quality transmission</span> in ensuring
            your car&apos;s optimal performance. That&apos;s why we meticulously
            source and inspect each transmission in our inventory, ensuring that
            only the best make it to our customers. Whether you&apos;re driving
            an older model or a more recent vehicle, our extensive range of auto
            parts transmissions has got you covered.
          </p>

          <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">
            Unlock the Power of Savings with Junkyard Transmissions
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            Why pay more when you can unlock substantial savings with junkyard
            transmissions? Our transmissions are sourced from trusted{" "}
            <span className="font-bold">automotive supply</span> partners and
            undergo rigorous testing to guarantee they meet our high standards.
            By choosing a used transmission, you&apos;re not only saving money
            but also contributing to a more sustainable future. These{" "}
            <span className="font-bold">online recycled auto parts</span> are a
            testament to our commitment to quality and environmental
            responsibility
          </p>

          <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">
            Affordable Solutions for Every Budget
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            At Parts Central, we believe that everyone deserves access to
            reliable vehicle components, regardless of their budget. That&apos;s
            why we offer competitive{" "}
            <span className="font-bold">junkyard transmission prices</span> that
            won&apos;t compromise on quality. Whether you&apos;re searching for
            a transmission for a specific make and model or exploring options
            across various vehicle types, our inventory is designed to cater to
            your needs without stretching your wallet.
          </p>

          <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">
            Your Trusted Partner in Automotive Supplies
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            Navigating the world of automotive supply can be daunting, but
            we&apos;re here to make it easier. Our team of experts is always on
            hand to guide you through the process of selecting the right
            transmission for your vehicle. With a deep understanding of the
            intricacies of transmissions, we can help you find the perfect match
            for your car, ensuring a smooth and hassle-free experience from
            start to finish.
          </p>

          <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">
            Seamless Online Experience
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            Shopping for online recycled auto parts has never been simpler. Our
            user-friendly platform allows you to browse our selection of
            transmissions with ease, filter by specific criteria, and make
            informed decisions based on detailed product descriptions and
            customer reviews. Once you&apos;ve found the right transmission, our
            streamlined checkout process ensures a quick and secure transaction,
            with fast shipping to get your vehicle back on the road as soon as
            possible.
          </p>

          <h2 className="mt-10 font-sans text-[#002E5B] text-[28px] font-bold">
            The Journey Begins Here
          </h2>
          <p className="text-gray-700 text-[17px] mt-4">
            Your journey to a reliable, cost-effective transmission starts with
            Parts Central. Explore the possibilities with our junkyard
            transmissions for sale and discover how easy it is to find a quality
            transmission that fits your needs. With our commitment to excellence
            and customer satisfaction, you can trust us to be your go-to source
            for all your auto parts transmission needs.
          </p>
          <p className="text-gray-700 text-[17px] mt-4">
            Ready to shift into gear? Start your search today and experience the
            difference that quality, affordability, and expertise can make in
            your vehicle&apos;s performance. At Parts Central, we&apos;re not
            just selling parts – we&apos;re providing peace of mind, one
            transmission at a time.
          </p>
        </div>
        <Image
          src="/placeholder.svg?height=209&width=241"
          width={241}
          height={209}
          alt="reliable used transmissions"
          className="self-start"
        />
      </div>
      <div className="mx-auto w-full max-w-screen-xl flex lg:flex-column md:flex-column flex-col">
        <SearchByMake page="transmissions" />
      </div>
    </main>
  );
}
