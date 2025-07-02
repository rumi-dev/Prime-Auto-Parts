"use client";

import type React from "react";
import {
  useState,
  type FormEvent,
  Suspense,
  useCallback,
  useRef,
  useEffect,
} from "react";
import Image from "next/image";
import { Phone, AlertCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  YEAR,
  ENGINE_SIZES,
  MAKE,
  PART,
  TRANSMISSION,
  PHONE_NUMBER,
  CALL_TO,
} from "@/app/config";
import Link from "next/link";

// Privacy Policy Popup Component
function PrivacyPolicyPopup({
  isOpen,
  onClose,
  onAgree,
}: {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
}) {
  const popupRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent body scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div
        ref={popupRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-md relative"
      >
        <div className="p-4 bg-blue-600 text-white flex justify-between items-center rounded-t-lg">
          <h2 className="text-xl font-bold">
            PRIVACY POLICY & SMS Opt-In Agreement
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto text-gray-700">
          <h3 className="text-lg font-semibold mb-3">SMS Terms & Conditions</h3>
          <p className="mb-4">
            By opting in to SMS communications from Prime Auto Parts Pro, you consent
            to receive text messages regarding order updates, customer support,
            and promotions. We do not share your phone number with third parties
            for advertising purposes.
          </p>

          <h4 className="font-semibold mt-4 mb-2">1. Message Frequency</h4>
          <p className="mb-3">
            The frequency of messages varies but typically does not exceed
            <strong> two messages per week</strong>, depending on account
            activity, preferences, or status.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            2. Standard Messaging and Data Rates
          </h4>
          <p className="mb-3">
            Standard message and data rates may apply based on your carrier's
            pricing plan. Prime Auto Parts Pro is not responsible for any associated
            charges.
          </p>

          <h4 className="font-semibold mt-4 mb-2">3. Opt-Out Method</h4>
          <p className="mb-3">
            You can opt-out of SMS messaging at any time by replying
            <strong> "STOP"</strong> to any message received. Alternatively, you
            may contact us at{" "}
            <a
              href="mailto:primeautopartspro@gmail.com"
              className="text-red-600 hover:underline"
            >
              primeautopartspro@gmail.com
            </a>{" "}
            to be removed from the messaging list.
          </p>

          <h4 className="font-semibold mt-4 mb-2">4. Help & Support</h4>
          <p className="mb-3">
            For assistance, reply <strong>"HELP"</strong> to{" "}
            <a href="tel:+18008383058" className="text-red-600 hover:underline">
              1-(888) 338-9066
            </a>{" "}
            or visit{" "}
            <a
              href="https://www.partscentral.us/"
              className="text-red-600 hover:underline"
            >
              Prime Auto Parts Pro Website
            </a>
            .
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            5. Privacy and Data Protection
          </h4>
          <p className="mb-3">
            Your phone number will not be shared with third parties for
            marketing purposes. For more information, refer to our{" "}
            <a href="/privacy-policy" className="text-red-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="/terms-and-conditions"
              className="text-red-600 hover:underline"
            >
              Terms & Conditions
            </a>{" "}
            on our website.
          </p>

          <p className="mt-4 font-medium">
            By opting in, you consent to these SMS Terms & Conditions.
          </p>
        </div>

        <div className="p-4 border-t flex justify-end">
          <button
            onClick={onAgree}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors font-medium"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
}

// Create a separate component for the part that uses useSearchParams
function HeroSectionContent({
  title,
  description,
  background,
  selectedMake,
  selectedPart,
}: {
  title: string;
  description: string;
  background: string;
  selectedMake: string;
  selectedPart: string;
}) {
  const router = useRouter();
  // Import useSearchParams inside this component
  const { useSearchParams } = require("next/navigation");
  const searchParams = useSearchParams();

  // Get UTM parameters for tracking
  const utmSource = searchParams.get("utm_source") || "Organic";
  const utmCampaign = searchParams.get("utm_campaign") || "";
  const utmMedium = searchParams.get("utm_medium") || "";

  // Form state
  const [model, setModel] = useState(selectedMake);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastCallTime, setLastCallTime] = useState(0);
  // Add a new state for terms acceptance after the other state declarations
  const [termsAccepted, setTermsAccepted] = useState(false);
  // Add a new state for SMS consent after the termsAccepted state declaration
  const [smsConsent, setSmsConsent] = useState(false);
  const [termsMsg, setTermsMsg] = useState(false);

  // Add state for privacy policy popup
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);

  // Error message states
  const [yearMsg, setYearMsg] = useState(false);
  const [engineMsg, setEngineMsg] = useState(false);
  const [carMsg, setCarMsg] = useState(false);
  const [modelMsg, setModelMsg] = useState(false);
  const [transmissionMsg, setTransmissionMsg] = useState(false);
  const [partMsg, setPartMsg] = useState(false);
  const [nameMsg, setNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");

  // Handle make selection change to update model options
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === "make") {
      setModel(e.target.value);
    }
  };

  // Get device type for analytics
  const getDeviceType = () => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      if (/mobile/i.test(userAgent)) return "Mobile";
      if (/tablet/i.test(userAgent)) return "Tablet";
      return "Desktop";
    }
    return "Unknown";
  };

  // Handle phone call with debouncing to prevent issues with multiple clicks
  const handlePhoneCall = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      // Prevent rapid successive clicks (debounce)
      const now = Date.now();
      if (now - lastCallTime < 1000) {
        return;
      }

      setLastCallTime(now);

      // Use window.open for more consistent behavior across browsers
      window.open(
        CALL_TO || `tel:${PHONE_NUMBER.replace(/[^0-9]/g, "")}`,
        "_self"
      );
    },
    [lastCallTime]
  );

  // Handle terms checkbox click to show popup
  const handleTermsCheckboxClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default checkbox behavior

    setShowPrivacyPopup(true);

  };

  // Handle agreement from popup
  const handleAgreeTerms = () => {
    setTermsAccepted(true);
    setShowPrivacyPopup(false);
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const year = formData.get("year") as string;
    const engineSize = formData.get("engine_size") as string;
    const make = formData.get("make") as string;
    const modelValue = formData.get("model") as string;
    const transmission = formData.get("transmission") as string;
    const part = formData.get("part") as string;
    const name = formData.get("fullname") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phone_number") as string;
    const zipCode = formData.get("zip_code") as string;

    let errorCount = 0;

    // Validate vehicle information
    if (year === "Year") {
      errorCount++;
      setYearMsg(true);
    } else {
      setYearMsg(false);
    }

    if (engineSize === "Engine Size") {
      errorCount++;
      setEngineMsg(true);
    } else {
      setEngineMsg(false);
    }

    if (make === "Choose Your Car") {
      errorCount++;
      setCarMsg(true);
    } else {
      setCarMsg(false);
    }

    if (modelValue === "Choose Model") {
      errorCount++;
      setModelMsg(true);
    } else {
      setModelMsg(false);
    }

    if (transmission === "Choose Transmission") {
      errorCount++;
      setTransmissionMsg(true);
    } else {
      setTransmissionMsg(false);
    }

    if (part === "Choose Part") {
      errorCount++;
      setPartMsg(true);
    } else {
      setPartMsg(false);
    }

    // Validate personal information
    if (name === "") {
      setNameMsg("Please enter your name.");
      errorCount++;
    } else {
      setNameMsg("");
    }

    if (email === "") {
      setEmailMsg("Please enter your e-mail.");
      errorCount++;
    } else {
      const emailRegex =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (emailRegex.test(email)) {
        setEmailMsg("");
      } else {
        setEmailMsg("Invalid e-mail.");
        errorCount++;
      }
    }

    if (phoneNumber === "") {
      setPhoneMsg("Please enter your phone no.");
      errorCount++;
    } else {
      setPhoneMsg("");
    }

    // In the handleSubmit function, add validation for terms acceptance after the other validations
    // Add this right before the if (errorCount === 0) { line:
    if (!termsAccepted) {
      errorCount++;
      setTermsMsg(true);
    } else {
      setTermsMsg(false);
    }

    if (errorCount === 0) {
      try {
        // Send data to email API
        const emailResponse = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            year,
            engine_size: engineSize,
            make,
            model: modelValue,
            transmission,
            part,
            name,
            email,
            phone: phoneNumber,
            zip_code: zipCode,
            Source: utmSource,
            SourceCampaign: utmCampaign,
            SourceMedium: utmMedium,
            SearchBy: getDeviceType(),
          }),
        });

        if (!emailResponse.ok) {
          throw new Error("Sending mail failed");
        }
        //commitss
        // Send data to LeadSquare CRM


        // Process responses
        const emailJson = await emailResponse.json();



        // Redirect on success
        if (emailJson.status === "success") {
          router.push("/success");
        } else {
          alert("Message Sent Failed.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-black text-white w-full">
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src={background || "/placeholder.svg"}
          alt="Car parts background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container px-4 py-16 md:py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-4 hero-content">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-xl md:text-2xl font-light">{description}</p>
          </div>

          <div className="w-full md:w-[450px] lg:w-[450px] form-container">
            <form
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              onSubmit={handleSubmit}
            >
              <div className="bg-blue-600 text-white text-center py-4 text-xl font-bold">
                Find A Part Now
              </div>

              <div className="p-6 md:p-8 space-y-4">
                {/* Year and Make */}
                <div className="flex flex-row space-x-3">
                  <div className="w-1/2">
                    <select
                      id="year"
                      name="year"
                      className="custom-select bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block rounded-md px-3"
                    >
                      {YEAR.map((year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-1/2">
                    <select
                      id="make"
                      name="make"
                      onChange={handleChange}
                      className="custom-select rounded-md bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block px-3"
                    >
                      {Object.keys(MAKE).map((make, index) => (
                        <option
                          key={index}
                          value={make}
                          selected={
                            selectedMake.toLowerCase() === make.toLowerCase()
                          }
                        >
                          {make}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Year and Make Error Messages */}
                <div className="flex flex-row space-x-3">
                  <span
                    className={
                      yearMsg ? "w-1/2 text-red-600 text-sm" : "hidden"
                    }
                  >
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    Choose Year.
                  </span>
                  <span
                    className={carMsg ? "w-1/2 text-red-600 text-sm" : "hidden"}
                  >
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    Choose Your Car.
                  </span>
                </div>

                {/* Model and Part */}
                <div className="flex flex-row space-x-3">
                  <div className="w-1/2">
                    <select
                      id="model"
                      name="model"
                      className="custom-select rounded-md bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block px-3"
                    >
                      {MAKE[model as keyof typeof MAKE] &&
                        MAKE[model as keyof typeof MAKE].map(
                          (modelOption, index) => (
                            <option key={index} value={modelOption}>
                              {modelOption}
                            </option>
                          )
                        )}
                    </select>
                  </div>
                  <div className="w-1/2">
                    <select
                      id="part"
                      name="part"
                      className="custom-select rounded-md bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block px-3"
                    >
                      {PART.map((part, index) => (
                        <option
                          key={index}
                          value={part}
                          selected={selectedPart === part}
                        >
                          {part}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Model and Part Error Messages */}
                <div className="flex flex-row space-x-3">
                  <span
                    className={
                      modelMsg ? "w-1/2 text-red-600 text-sm" : "hidden"
                    }
                  >
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    Choose Model.
                  </span>
                  <span
                    className={
                      partMsg ? "w-1/2 text-red-600 text-sm" : "hidden"
                    }
                  >
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    Choose Part.
                  </span>
                </div>

                {/* Engine Size and Transmission */}
                <div className="flex flex-row space-x-3">
                  <div className="w-1/2">
                    <select
                      id="engine_size"
                      name="engine_size"
                      className="custom-select bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block rounded-md px-3"
                    >
                      {ENGINE_SIZES.map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-1/2">
                    <select
                      id="transmission"
                      name="transmission"
                      className="custom-select rounded-md bg-[#F5F5F5] w-full h-12 text-[#4E4E4E] text-[15px] block px-3"
                    >
                      {TRANSMISSION.map((transmission, index) => (
                        <option key={index} value={transmission}>
                          {transmission}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Engine Size and Transmission Error Messages */}
                <div className="flex flex-row space-x-3">
                  <span
                    className={
                      engineMsg ? "w-1/2 text-red-600 text-sm" : "hidden"
                    }
                  >
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    Choose Engine Size.
                  </span>
                  <span
                    className={
                      transmissionMsg ? "w-1/2 text-red-600 text-sm" : "hidden"
                    }
                  >
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    Choose Transmission.
                  </span>
                </div>

                {/* Name and Email */}
                <div className="flex flex-row space-x-3">
                  <div className="w-1/2">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="rounded-md w-full h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block px-3"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="rounded-md w-full h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block px-3"
                      placeholder="Email Address*"
                    />
                  </div>
                </div>

                {/* Name and Email Error Messages */}
                <div className="flex flex-row space-x-3">
                  <span
                    className={
                      nameMsg ? "w-1/2 text-red-600 text-sm" : "hidden"
                    }
                  >
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    {nameMsg}
                  </span>
                  <span
                    className={
                      emailMsg ? "w-1/2 text-red-600 text-sm" : "hidden"
                    }
                  >
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    {emailMsg}
                  </span>
                </div>

                {/* Phone and Zip Code */}
                <div className="flex flex-row space-x-3">
                  <div className="w-1/2">
                    <input
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      className="rounded-md w-full h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block px-3"
                      placeholder="Phone No."
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="text"
                      id="zip_code"
                      name="zip_code"
                      className="rounded-md w-full h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block px-3"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>

                {/* Phone Error Message */}
                <div className="flex flex-row">
                  <span
                    className={
                      phoneMsg ? "w-1/2 text-red-600 text-sm" : "hidden"
                    }
                  >
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    {phoneMsg}
                  </span>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="flex items-start space-x-2 mt-2">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={termsAccepted}
                      // onChange={(e) =>
                      //   setTermsAccepted(e.target.checked)}
                      onClick={(e) => termsAccepted === true ? setTermsAccepted(false) : handleTermsCheckboxClick(e)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
                    />
                  </div>
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to receive SMS updates and consent to the{" "}
                    <a
                      href="/terms-and-conditions"
                      className="text-red-600 underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy-policy"
                      className="text-red-600 underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                {/* SMS Consent Checkbox (non-mandatory) */}
                <div className="flex items-start space-x-2 mt-2">
                  <input
                    type="checkbox"
                    id="sms_consent"
                    name="sms_consent"
                    checked={smsConsent}
                    onChange={(e) => setSmsConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label
                    htmlFor="sms_consent"
                    className="text-sm text-gray-600"
                  >
                    By checking this box, you agree to receive SMS messages from
                    Prime Auto Parts Pro related to Product inquiries / Appointment
                    reminders / Billing alerts / Shipment updates. You may reply
                    STOP to opt-out at any time. Reply HELP to{" "}
                    {/* 1-(888) 338-9066 */}
                    for assistance. Messages and data rates may apply. Message
                    frequency will vary. For more details, visit our{" "}
                    <a
                      href="https://www.partscentral.us/privacy-policy"
                      target="_blank"
                      className="text-red-600 underline"
                      rel="noreferrer"
                    >
                      <strong>Privacy Policy</strong>
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.partscentral.us/terms-and-conditions"
                      target="_blank"
                      className="text-red-600 underline"
                      rel="noreferrer"
                    >
                      <strong>Terms of Service</strong>
                    </a>
                  </label>
                </div>

                {/* Terms Error Message */}
                <div className="flex flex-row">
                  <span
                    className={
                      termsMsg ? "w-full text-red-600 text-sm" : "hidden"
                    }
                  >
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    Please accept the Terms of Service and Privacy Policy.
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors font-bold flex items-center justify-center mt-4"
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
                    "Find My Part"
                  )}
                </button>
              </div>
            </form>

            {/* Phone section - Fixed to use a button with proper event handling */}
            <a
              href={CALL_TO || `tel:${PHONE_NUMBER.replace(/[^0-9]/g, "")}`}
              onClick={handlePhoneCall}
              className="bg-blue-600 rounded-lg p-4 flex items-center justify-center mt-4 hover:bg-blue-700 transition-colors"
              aria-label="Call us"
              role="button"
            >
              <div className="flex items-center">
                <Phone className="h-8 w-8 mr-3" />
                <div>
                  <div className="text-2xl font-bold">{PHONE_NUMBER}</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy Popup */}
      <PrivacyPolicyPopup
        isOpen={showPrivacyPopup}
        onClose={() => setShowPrivacyPopup(false)}
        onAgree={handleAgreeTerms}
      />
    </section>
  );
}

// Loading fallback for Suspense
function HeroSectionFallback({
  title,
  description,
  background,
}: {
  title: string;
  description: string;
  background: string;
}) {
  return (
    <section className="relative bg-black text-white w-full">
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src={background || "/placeholder.svg"}
          alt="Car parts background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container px-4 py-16 md:py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-4 hero-content">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-xl md:text-2xl font-light">{description}</p>
          </div>

          <div className="w-full md:w-[450px] lg:w-[450px] form-container">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white text-center py-4 text-xl font-bold">
                Find A Part Now
              </div>
              <div className="p-6 md:p-8 flex items-center justify-center">
                <div className="animate-pulse">Loading form...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main component that uses Suspense
export default function HeroSection({
  title = "Best Quality <br/><span class='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-red-700'>Used Auto Parts</span>",
  description = "Choose High Quality Recycled OEM Parts",
  background = "/banner-home.png?height=600&width=1200",
  selectedMake = "Choose Your Car",
  selectedPart = "Choose Part",
}: {
  title?: string;
  description?: string;
  background?: string;
  selectedMake?: string;
  selectedPart?: string;
}) {
  return (
    <Suspense
      fallback={
        <HeroSectionFallback
          title={title}
          description={description}
          background={background}
        />
      }
    >
      <HeroSectionContent
        title={title}
        description={description}
        background={background}
        selectedMake={selectedMake}
        selectedPart={selectedPart}
      />
    </Suspense>
  );
}
