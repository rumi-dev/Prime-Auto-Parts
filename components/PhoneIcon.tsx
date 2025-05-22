"use client";

import { useCallback } from "react";
import { Phone } from "lucide-react";
import { CALL_TO } from "../app/config";

const PhoneIcon = () => {
  const handleCall = useCallback(() => {
    // Create a temporary invisible link element
    const link = document.createElement("a");
    link.href = CALL_TO;
    link.style.display = "none";
    document.body.appendChild(link);

    // Trigger the click and clean up
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  }, []);

  return (
    <button
      onClick={handleCall}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:w-24 transition-all duration-300 call-button"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </button>
  );
};

export default PhoneIcon;
