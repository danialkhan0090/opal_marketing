
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !phone) {
      toast({
        title: 'Please fill required fields',
        description: 'Name and phone number are required.',
        variant: 'destructive',
      });
      return;
    }
    
    // In a real app, this would submit the form data to a server
    console.log({ name, email, phone, interest });
    
    toast({
      title: 'Form submitted successfully!',
      description: 'We will contact you soon.',
    });
    
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setInterest('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Input
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4"
          />
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Phone No..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4"
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="I'm interested in..."
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full p-4"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <Button 
          type="submit" 
          className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-none"
        >
          SUBMIT NOW
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
