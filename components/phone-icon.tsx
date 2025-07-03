import { Phone } from "lucide-react";

export default function PhoneIcon() {
  return (
    <div className="container mx-auto mt-4">
      <div className="bg-blue-600 rounded-lg p-4 md:p-6 flex items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center">
          <Phone className="h-8 w-8 mr-3 text-white" />
          <div className="text-white">
            {/* <div className="text-2xl font-bold">(877)-988-8045</div> */}
            <div className="text-sm">Call now to order</div>
          </div>
        </div>
      </div>
    </div>
  );
}
