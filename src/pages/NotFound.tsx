
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center py-16 px-4 bg-gray-50">
        <div className="max-w-md w-full text-center">
          <h1 className="text-6xl font-bold text-[#FFA500] mb-4">404</h1>
          <h2 className="text-2xl font-bold text-[#1A365D] mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-5 rounded-none">
              BACK TO HOME
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default NotFound;
