
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: `url('public/lovable-uploads/2566a012-93d1-4bb5-a03d-6471a47986f9.png')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">CONTACT US</h1>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ContactCard 
              icon={<MapPin size={32} className="text-[#FFA500]" />}
              title="Our Location"
              details={["Office 10, 2nd Floor", "Magna Plaza, Islamabad", "Pakistan"]}
            />
            
            <ContactCard 
              icon={<Phone size={32} className="text-[#FFA500]" />}
              title="Phone Number"
              details={["0333 1518966", "+92-51-5403690", "+92-51-5403691"]}
            />
            
            <ContactCard 
              icon={<Mail size={32} className="text-[#FFA500]" />}
              title="Email Address"
              details={["info@opalmarketing.com", "sales@opalmarketing.com", "support@opalmarketing.com"]}
            />
            
            <ContactCard 
              icon={<Clock size={32} className="text-[#FFA500]" />}
              title="Working Hours"
              details={["Monday - Friday: 9am to 6pm", "Saturday: 10am to 4pm", "Sunday: Closed"]}
            />
          </div>
        </div>
      </section>
      
      {/* Map and Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="h-[500px] bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Google Map will be displayed here</p>
            </div>
            
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-3xl font-bold text-[#1A365D] mb-6 text-center">
                GET IN TOUCH WITH US
              </h2>
              
              <p className="text-gray-700 mb-8 text-center">
                Fill out the form below, and one of our representatives will contact you shortly.
              </p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-12 text-center">
            OUR OFFICES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-64 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Islamabad Office</p>
            </div>
            
            <div className="h-64 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Lahore Office</p>
            </div>
            
            <div className="h-64 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Karachi Office</p>
            </div>
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
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#1A365D] mb-3">{title}</h3>
    <div className="space-y-1">
      {details.map((detail, index) => (
        <p key={index} className="text-gray-700">{detail}</p>
      ))}
    </div>
  </div>
);

export default ContactUs;
