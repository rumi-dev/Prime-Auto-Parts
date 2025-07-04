import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg text-center font-bold mb-6 relative inline-block">
            All Auto And Truck Parts Inc  <br /> <p className="text-gray-400 ">DBA</p> 
              Prime Auto Parts Pro

               
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600"></span>
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300">
                2952 Stringham Way, Dublin,
                <br />
                CA 94568
                <br />
              </p>

              {/* <p className="text-gray-400 mt-4">CALL NOW TO ORDER</p>
              <p className="text-red-600 text-lg font-bold">
                <Link
                  href="tel:"
                  className="hover:text-red-400 transition-colors"
                >
                  (877)-988-8045
                </Link>
              </p>

              <p className="text-gray-400 mt-4">Email Us</p>
              <p className="text-red-600">
                <Link
                  href="mailto:support@primeautopartspro.us"
                  className="hover:text-red-400 transition-colors"
                ></Link>
              </p> */}

              <p className="text-gray-400 mt-4 max-w-xs">
                Prime Auto Parts Pro is your trusted source for high-quality used OEM
                auto parts with warranty and nationwide shipping.
              </p>
            </div>
          </div>
          {/* Information Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              INFORMATION
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600"></span>
            </h3>
            <div >
              <ul className="space-y-3">
                {[
                  { text: 'About Us', href: '/about' },
                  { text: 'Contact Us', href: '/contact' },
                  { text: 'Privacy Policy', href: '/privacy-policy' },
                  { text: 'Shipping Policy', href: '/shipping-policy' },
                  { text: 'Refund/Return Policy', href: '/refund-policy' },
                  { text: 'Terms and Conditions', href: '/terms-and-conditions' },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-blue-600 hover:text-blue-400 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>


            </div>
          </div>

          {/* Have Questions Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              HAVE QUESTIONS?
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600"></span>
            </h3>
            <div className="space-y-3">
              <p className="text-gray-400">CALL NOW TO ORDER</p>
              <p className="text-blue-600 text-lg font-bold">
                <Link
                  href="tel:+18779888045"
                  className="hover:text-blue-400 transition-colors"
                >
                 Toll free -  +1 (877)-988-8045
                </Link>
              </p>
              <p className="text-blue-600 text-lg font-bold">
                <Link
                  href="tel:+19253937650"
                  className="hover:text-blue-400 transition-colors"
                >
                 Direct line +1(925)393-7650
                </Link>
              </p>

              <p className="text-gray-400 mt-4">Email Us</p>
              <p className="text-blue-600">
                <Link
                  href="mailto:primeautopartspro@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  primeautopartspro@gmail.com
                </Link>
              </p>

              <p className=" pt-10 text-gray-400">DBA</p>
              Prime Auto Parts Pro
            </div>
          </div>

 {/* All Auto parts section */}
 <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
            All Auto And Truck Parts Inc
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600"></span>
            </h3>
            <div className="space-y-3">
              {/* <p className="text-gray-400">CALL NOW TO ORDER</p> */}
             

              <p className="text-gray-400 mt-4">Email Us</p>
              <p className="text-blue-600">
                <Link
                  href="mailto:allautoandtruckparts.ca@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                 allautoandtruckparts.ca@gmail.com
                </Link>
              </p>

              
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              SOCIAL MEDIA
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600"></span>
            </h3>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 py-6 w-full">
        <div className="container text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Prime Auto Parts Pro - All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
