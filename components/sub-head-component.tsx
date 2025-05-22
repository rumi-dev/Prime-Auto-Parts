"use client";

import type React from "react";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Phone, AlertCircle, Link } from "lucide-react";

interface SubHeadComponentProps {
  title: string;
  subTitle: string;
  bgImageUrl: string;
  selectedMake?: string;
  selectedPart?: string;
}

export default function SubHeadComponent({
  title,
  subTitle,
  bgImageUrl,
  selectedMake = "Choose Your Car",
  selectedPart = "Choose Part",
}: SubHeadComponentProps) {
  // Form state
  const [formData, setFormData] = useState({
    year: "",
    engineSize: "",
    car: selectedMake !== "Choose Your Car" ? selectedMake : "",
    model: "",
    transmission: "",
    part: selectedPart !== "Choose Part" ? selectedPart : "",
    name: "",
    email: "",
    phone: "",
    zipCode: "",
  });

  // Form errors state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear errors when user types
    if (name === "name" || name === "email") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        // Here you would typically send the data to your backend
      }, 1000);
    }
  };

  return (
    <section className="relative bg-black text-white w-full">
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src={bgImageUrl || "/placeholder.svg?height=600&width=1600"}
          alt="Banner background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-light">{subTitle}</p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white text-center py-4 text-xl font-bold">
                Find A Part Now
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Vehicle Information - Moved to top */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded text-gray-700"
                    >
                      <option value="">Year</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      {/* More years would go here */}
                    </select>

                    <select
                      id="engineSize"
                      name="engineSize"
                      value={formData.engineSize}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded text-gray-700"
                    >
                      <option value="">Engine Size</option>
                      <option value="4 Cylinder">4 Cylinder</option>
                      <option value="6 Cylinder">6 Cylinder</option>
                      <option value="8 Cylinder">8 Cylinder</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <select
                      id="car"
                      name="car"
                      value={formData.car}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded text-gray-700"
                    >
                      <option value="">{selectedMake}</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Honda">Honda</option>
                      <option value="Ford">Ford</option>
                      {/* More makes would go here */}
                    </select>

                    <select
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded text-gray-700"
                    >
                      <option value="">Model</option>
                      <option value="Camry">Camry</option>
                      <option value="Corolla">Corolla</option>
                      <option value="RAV4">RAV4</option>
                      {/* More models would go here */}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <select
                      id="transmission"
                      name="transmission"
                      value={formData.transmission}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded text-gray-700"
                    >
                      <option value="">Transmission</option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                      <option value="CVT">CVT</option>
                    </select>

                    <select
                      id="part"
                      name="part"
                      value={formData.part}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded text-gray-700"
                    >
                      <option value="">{selectedPart}</option>
                      <option value="Engine">Engine</option>
                      <option value="Transmission">Transmission</option>
                      <option value="Brakes">Brakes</option>
                      {/* More parts would go here */}
                    </select>
                  </div>
                </div>

                {/* Personal Information - Name and Email on same line */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded text-gray-700`}
                    placeholder="Your Name *"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded text-gray-700`}
                    placeholder="Email Address *"
                  />
                </div>

                {/* Error messages */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    {errors.name && (
                      <p className="text-red-500 text-sm flex items-center mt-1">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    {errors.email && (
                      <p className="text-red-500 text-sm flex items-center mt-1">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-700"
                    placeholder="Phone No."
                  />
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-700"
                    placeholder="Zip Code"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors font-bold flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Next"
                  )}
                </button>
              </form>
            </div>

            {/* Phone section - Moved directly below the form */}
            <div className="bg-blue-600 rounded-lg p-4 md:p-6 flex items-center justify-center mt-4">
              <div className="flex items-center">
                <Phone className="h-8 w-8 mr-3" />
                <div>
                  <div className="text-2xl font-bold">
                    {/* (888) 338-9066 */}
                  </div>
                  <div className="text-sm">Call now to order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
