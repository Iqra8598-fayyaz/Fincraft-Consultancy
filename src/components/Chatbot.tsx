"use client";
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your tax assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    // Tax planning responses
    if (lowerInput.includes('tax plan') || lowerInput.includes('tax planning')) {
      return 'Our tax planning services help you optimize your tax strategy. We analyze your financial situation and recommend strategies to minimize your tax liability while ensuring compliance.';
    }
    
    // Business tax responses
    if (lowerInput.includes('business tax') || lowerInput.includes('corporate tax')) {
      return 'For businesses, we offer comprehensive tax solutions including corporate tax planning, payroll tax management, and business structure optimization. Would you like to schedule a consultation?';
    }
    
    // Personal tax responses
    if (lowerInput.includes('personal tax') || lowerInput.includes('individual tax')) {
      return 'Our personal tax services include tax return preparation, deduction optimization, and retirement tax planning. We ensure you take advantage of all available tax benefits.';
    }
    
    // Audit responses
    if (lowerInput.includes('audit') || lowerInput.includes('irs audit')) {
      return 'If you\'re facing an IRS audit, our team can represent you and help navigate the process. We\'ll gather all necessary documentation and communicate with the IRS on your behalf.';
    }
    
    // Templates responses
    if (lowerInput.includes('template') || lowerInput.includes('excel')) {
      return 'We offer various Excel templates for tax planning and tracking. You can find them in our Templates section. They include tax planners, expense trackers, and more.';
    }
    
    // Contact responses
    if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('call')) {
      return 'You can reach us through our Contact page or call us at (555) 123-4567. Our office hours are Monday to Friday, 9 AM to 5 PM.';
    }
    
    // Pricing responses
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('fee')) {
      return 'Our fees vary based on the complexity of your tax situation. We offer free initial consultations to discuss your needs and provide a detailed quote.';
    }
    
    // Default responses
    const defaultResponses = [
      'I understand you\'re asking about taxes. Could you provide more details about your specific question?',
      'That\'s an interesting question about taxes. Let me connect you with more information.',
      'For detailed tax advice, I recommend scheduling a consultation with one of our tax experts.',
      'I can help with general tax information, but for specific advice, our tax professionals would be happy to assist you.',
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Tax Assistant</h3>
              <p className="text-xs text-blue-100">Online</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-100"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 shadow'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs mt-1 opacity-70 text-right">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white text-gray-800 rounded-lg p-3 shadow">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <div className="flex items-center">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 