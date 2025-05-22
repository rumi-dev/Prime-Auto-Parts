import ContactInfo from "@/components/contact-info"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

