import Image from "next/image";

const testimonials = [
  {
    text: "Quality Auto Parts is the only company in the USA that was able to get me the exact OEM part for my Mercedes. This company is the only one that actually checked the exact part number for an exact replacement. I went through numerous companies and no one can guarantee the part number except Quality Auto Parts. I'm completely satisfied with the customer service, the part being the exact fit and the delivery time. I will purchase from them again if needed in the future",
    name: "Terry",
    location: "MT ULLA, NC",
  },
  // More testimonials could be added here
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 text-white w-full">
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="/testimonials-banner.png?height=500&width=1600"
          alt="Car background"
          fill
          className="object-cover opacity-70"
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-8">
          <p className="text-xl mb-2">What Our Happy Clients say about us</p>
          <h2 className="text-4xl font-bold mb-4">TESTIMONIAL</h2>
          <p className="text-xl">
            The highest standards. The happiest customers. Rated by store owner
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-8 relative">
              <div className="bg-white text-gray-800 p-6 rounded-lg mb-4 relative">
                <p className="text-lg">{testimonial.text}</p>
                <div className="absolute bottom-0 left-1/2 transform translate-x-[-50%] translate-y-[50%] w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-white border-r-[15px] border-r-transparent"></div>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 text-white inline-block px-8 py-3 rounded-md">
                  <p className="font-bold text-xl">{testimonial.name}</p>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
