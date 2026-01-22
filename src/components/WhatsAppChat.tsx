import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";

// Constants
const WHATSAPP_NUMBER = "03369738190";
const INITIAL_MESSAGE =
  "Welcome to Opal Marketing. How can we assist you today?";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [unreadCount, setUnreadCount] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset animation state
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

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
      setIsOpen(false);
    }
  };

  const handleDirectCall = () => {
    window.location.href = `tel:${WHATSAPP_NUMBER}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div
          className={`bg-white dark:bg-gray-900 rounded-xl shadow-xl w-80 overflow-hidden ${
            isAnimating ? "animate-fade-in" : ""
          }`}
        >
          {/* Header */}
          <div className="bg-[#25D366] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <span className="font-medium">Chat with Us</span>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-opacity-80 transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="p-4 bg-gray-50 dark:bg-gray-800 h-64 overflow-y-auto">
            <div className="mb-4 bg-[#DCF8C6] dark:bg-[#056162] p-3 rounded-lg max-w-[80%]">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                {INITIAL_MESSAGE}
              </p>
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 
                         dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 
                         focus:ring-[#25D366] dark:focus:ring-[#128C7E]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white p-2 rounded-full 
                         transition-colors duration-300"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </form>

          {/* Call Button */}
          <div className="p-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleDirectCall}
              className="w-full flex items-center justify-center gap-2 text-[#128C7E] 
                       hover:text-[#075E54] py-2 transition-colors duration-300"
            >
              <Phone size={16} />
              <span>Call us directly</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full 
                   shadow-lg relative flex items-center justify-center transition-all 
                   duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle size={24} className="text-white" />
          {unreadCount > 0 && (
            <div
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs 
                          w-5 h-5 flex items-center justify-center rounded-full 
                          animate-pulse"
            >
              {unreadCount}
            </div>
          )}
        </button>
      )}
    </div>
  );
};

export default WhatsAppChat;
