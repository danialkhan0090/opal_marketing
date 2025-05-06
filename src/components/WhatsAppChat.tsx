import React, { useState } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";

// Add WhatsApp number constant (with Pakistan country code)
const WHATSAPP_NUMBER = "923003353395"; // 92 is Pakistan's country code

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
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
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-80 overflow-hidden animate-fade-in">
          <div className="bg-opal text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <span className="font-medium">Chat via WhatsApp</span>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-opal-light transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-4 bg-opal-background dark:bg-gray-800 h-64 overflow-y-auto">
            <div className="mb-4 bg-opal-light/10 dark:bg-opal-dark/20 p-3 rounded-lg max-w-[80%]">
              <p className="text-sm text-opal-text dark:text-gray-200">
                Welcome to opal Marketing. If you need any assistance, feel free
                to contact with us.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter your message..."
                className="input flex-1 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="bg-opal hover:bg-opal-dark text-white p-2 rounded-full transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-opal hover:bg-opal-dark text-white p-4 rounded-full shadow-lg relative flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <MessageCircle size={24} className="text-white" />
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse-slow">
              {unreadCount}
            </div>
          )}
        </button>
      )}
    </div>
  );
};

export default WhatsAppChat;
