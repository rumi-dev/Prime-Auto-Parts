'use client'
import Link from "next/link";
import { useEffect } from 'react';
import Image from "next/image";
import { CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { PHONE_NUMBER, CALL_TO } from "@/app/config";

export default function SuccessPage() {
   useEffect(() => {
    window.gtag?.('event', 'conversion', {
      send_to: 'AW-17282900440/zm7oCK6O9OYaENjDkLFA',
    });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      {/* <header className="bg-white shadow-sm py-4 border-b">
        <div className="container mx-auto px-4 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=180"
              alt="Auto Parts Logo"
              width={180}
              height={40}
              className="h-10"
            />
          </Link>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 p-6 text-white text-center">
            <CheckCircle className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-2xl md:text-3xl font-bold">
              Request Submitted Successfully!
            </h1>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-lg text-gray-700">
                Thank you for submitting your auto part request. Our team will
                review your information and get back to you shortly.
              </p>
              <p className="text-gray-600">
                A confirmation email has been sent to your email address.
              </p>
            </div>

            <div className="border-t border-b border-gray-200 py-6 space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">
                What happens next?
              </h2>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 mr-3 font-bold text-sm">
                    1
                  </span>
                  <span>
                    Our parts specialists will check inventory for your
                    requested part
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 mr-3 font-bold text-sm">
                    2
                  </span>
                  <span>
                    We'll contact you via phone or email with availability and
                    pricing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 mr-3 font-bold text-sm">
                    3
                  </span>
                  <span>
                    Once confirmed, we'll arrange shipping or pickup of your
                    part
                  </span>
                </li>
              </ol>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <Phone className="h-8 w-8 text-red-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">
                    Need immediate assistance?
                  </p>
                  <Link
                    href={CALL_TO}
                    className="text-lg font-bold text-gray-800 hover:text-red-600"
                  >
                    {PHONE_NUMBER}
                  </Link>
                </div>
              </div>
              <Link
                href="/"
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Auto Parts Recyclers. All
                rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/about"
                className="text-sm text-gray-400 hover:text-white"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
