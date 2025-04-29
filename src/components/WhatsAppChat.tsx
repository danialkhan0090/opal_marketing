
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [unreadCount, setUnreadCount] = useState(2);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, this would send the message to WhatsApp
      console.log("Message to send:", message);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 overflow-hidden">
          <div className="bg-[#FFA500] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <span>Chat via WhatsApp</span>
            </div>
            <button onClick={toggleChat} className="text-white">
              <X size={20} />
            </button>
          </div>
          <div className="p-4 bg-gray-50 h-64 overflow-y-auto">
            <div className="mb-4 bg-[#E5F1F9] p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">
                Hi its Eisha Malik If you need any assistance, Chat with me
                Or WhatsApp 0333 1518966
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-[#FFA500] text-white p-2 rounded-full"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button 
          onClick={toggleChat}
          className="bg-[#FFA500] hover:bg-[#FF8C00] text-white p-4 rounded-full shadow-lg relative flex items-center justify-center"
        >
          <MessageCircle size={24} className="text-white" />
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {unreadCount}
            </div>
          )}
        </button>
      )}
    </div>
  );
};

export default WhatsAppChat;
