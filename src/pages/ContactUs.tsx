import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('public/Images/aboutUs.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ContactCard
              icon={<MapPin size={32} className="text-[#FFA500]" />}
              title="Our Location"
              details={["Neelam road, Sector G-9 markaz, Islamabad, Pakistan"]}
            />

            <ContactCard
              icon={<Phone size={32} className="text-[#FFA500]" />}
              title="Phone Number"
              details={["0300 3353395"]}
            />

            <ContactCard
              icon={<Mail size={32} className="text-[#FFA500]" />}
              title="Email Address"
              details={["info@opalmarketing.com"]}
            />

            <ContactCard
              icon={<Clock size={32} className="text-[#FFA500]" />}
              title="Working Hours"
              details={[
                "Monday - Friday: 9:30am to 6pm",
                "Saturday: 10am to 5pm",
              ]}
            />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactCard = ({ icon, title, details }: ContactCardProps) => (
  <div className="bg-white p-6 shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-[#1A365D] mb-3">{title}</h3>
    <div className="space-y-1">
      {details.map((detail, index) => (
        <p key={index} className="text-gray-700">
          {detail}
        </p>
      ))}
    </div>
  </div>
);

export default ContactUs;
