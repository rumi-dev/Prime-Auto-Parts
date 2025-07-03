import Image from "next/image";
import { Phone, Users, Shield, Truck, Link } from "lucide-react";

const milestones = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Started as a local junkyard serving the community",
  },
  {
    year: "2015",
    title: "Online Platform Launch",
    description: "Expanded nationwide with our e-commerce platform",
  },
  {
    year: "2018",
    title: "Network Expansion",
    description: "Partnership with 1000+ junkyards across the country",
  },
  {
    year: "2020",
    title: "Quality Certification",
    description: "Achieved industry-leading quality certification",
  },
];

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/placeholder.svg",
    bio: "20+ years experience in auto parts industry",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    image: "/placeholder.svg",
    bio: "Expert in supply chain management",
  },
  {
    name: "Mike Wilson",
    role: "Quality Control Manager",
    image: "/placeholder.svg",
    bio: "Certified automotive specialist",
  },
];

const values = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every part thoroughly tested and verified",
  },
  {
    icon: Truck,
    title: "Nationwide Service",
    description: "Fast shipping across all 48 continental states",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Dedicated support team for all your needs",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-70">
          <Image
            src="/about-us-banner.png"
            alt="Auto parts background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ABOUT US</h1>
            <p className="text-lg md:text-xl mb-8">
              We are a one-stop-shop for all your vehicle needs, be it a small
              cranking motor or a truck engine, we have it all. We at
              primeautopartspro.us guarantee to find best in class fully functioning,
              quality tested and reliable used auto parts for our customers.
            </p>
            {/* <div className="inline-flex items-center bg-blue-600 px-6 py-3 rounded-md">
              <Phone className="w-5 h-5 mr-2" />
              <Link
                href="tel:"
                className="text-red-500 font-bold hover:underline"
              >
                <span className="font-bold">Call now at </span>
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To provide high-quality, reliable used auto parts while making the
              process convenient and affordable for our customers. We strive to
              be the most trusted name in the Prime Auto Parts Pro industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/about-us-sec-2.png"
                alt="Trusted auto parts supplier"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">WE ARE A TRUSTED NAME</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    WE HAVE A LARGE STOCK OF VEHICLE PARTS
                  </h3>
                  <p className="text-gray-600">
                    With Prime Auto Parts Pro, customers can feel at ease as we have a
                    wide range of spare parts available to fulfill customer
                    needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    WE DEAL IN ALL BRANDS
                  </h3>
                  <p className="text-gray-600">
                    Wide range of brands with competitive pricing on every spare
                    you purchase. Look into our spare request form for more
                    details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                >
                  <div className="md:w-32 flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Part?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers who trust us for their auto
            part needs.
          </p>
          {/* <div className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-md font-bold">
            <Phone className="w-5 h-5 mr-2" />
            Call 
          </div> */}
        </div>
      </section>
    </div>
  );
}
