import { Mail, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-blue-600 rounded-lg p-8 text-white">
      <h2 className="text-2xl font-bold text-center mb-8">CONTACT INFO</h2>

      <div className="space-y-6">
        <div className="flex flex-col items-center">
          <p className="text-sm mb-2">EMAIL</p>
          <a
            href="mailto:primeautopartspro@gmail.com"
            className="flex items-center hover:underline"
          >
            <Mail className="w-5 h-5 mr-2" />
            primeautopartspro@gmail.com
          </a>
          For Product Enquiry, Please mail us

        </div>

        <div className="flex flex-col items-center">
          <p className="text-sm mb-2">PHONE NUMBER</p>
          <a
            href="tel:+18779888045"
            className="flex items-center hover:underline"
          >
            <Phone className="w-5 h-5 mr-2" />
            (877)-988-8045
          </a>
          For SMS & Product Enquiry, Please call
        </div>
      </div>
    </div>
  );
}
