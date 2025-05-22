"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Used Auto Parts", href: "/used-auto-parts" },
  { name: "Used Transmissions", href: "/used-transmissions" },
  { name: "Used Engines", href: "/used-engines" },
  // { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/prime auto parts logo2.png"
              alt="Parts Logo"
              width={500}
              height={500}
              style={{
                height: "auto",
                maxHeight: "150px",
                // width: "500px",
                maxWidth: "150px",
              }}
              className="object-cover"
              priority
            />
          </Link>

          {/* Desktop Navigation - with whitespace-nowrap to prevent wrapping */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md transition-colors whitespace-nowrap text-sm",
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Tablet Navigation - with shortened names */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-2 py-2 rounded-md transition-colors whitespace-nowrap text-xs",
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600"
                )}
              >
                {/* Shorten names for tablet view */}
                {item.name === "Used Auto Parts"
                  ? "Auto Parts"
                  : item.name === "Used Transmissions"
                  ? "Transmissions"
                  : item.name === "Used Engines"
                  ? "Engines"
                  : item.name === "Contact Us"
                  ? "Contact"
                  : item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide down panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container py-3 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-2 rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
