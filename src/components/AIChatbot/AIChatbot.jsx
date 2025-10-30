// src/components/AIChatbot/AIChatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User
} from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Initial welcome message
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm AgriBot, your farming assistant from Crat_Agri. I can help you with:\n\n• Smart greenhouse information\n• FarmCloud features\n• Crop management advice\n• Pricing and products\n• Technical support\n\nHow can I help you today? 🌱",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Format message text with basic markdown-like styling
  const formatMessage = (text) => {
    return text.split('\n').map((line, index) => {
      // Handle bullet points
      if (line.trim().startsWith('•')) {
        return (
          <div key={index} className="flex items-start mb-1">
            <span className="mr-2">•</span>
            <span>{line.replace('•', '').trim()}</span>
          </div>
        );
      }
      // Handle bold text (basic **text** support)
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = line.split(boldRegex);
      
      if (parts.length > 1) {
        return (
          <div key={index} className="mb-1">
            {parts.map((part, partIndex) => 
              partIndex % 2 === 1 ? (
                <strong key={partIndex} className="font-bold">{part}</strong>
              ) : (
                <span key={partIndex}>{part}</span>
              )
            )}
          </div>
        );
      }
      
      return <div key={index} className="mb-1">{line}</div>;
    });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateAIResponse(inputMessage);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Smart Greenhouses
    if (input.includes('greenhouse') || input.includes('green house')) {
      return `**Smart Greenhouses** 🌿

Our smart greenhouses provide climate-controlled environments for optimal crop growth:

• **Metallic Greenhouses**: Durable structure with 30% discount
• **Wooden Greenhouses**: Eco-friendly option, also 30% off
• **Features**: Temperature control, humidity management, automated irrigation
• **Sizes**: From 20m² to 5,000m²
• **Yield Increase**: Up to 45% more production

Use our pricing calculator to get an exact quote for your needs!`;
    }

    // FarmCloud
    if (input.includes('farmcloud') || input.includes('cloud') || input.includes('software')) {
      return `**FarmCloud™ Platform** ☁️

Our digital farming platform helps you manage everything:

• **Real-time Monitoring**: Track crop health and conditions
• **Market Access**: Connect with buyers directly
• **Export Compliance**: Generate required documentation
• **Accounting**: Full financial management
• **Mobile App**: Manage your farm on the go

We offer four plans starting from **FREE** to enterprise solutions.`;
    }

    // FarmShield
    if (input.includes('farmshield') || input.includes('sensor') || input.includes('iot')) {
      return `**FarmShield™ IoT System** 🛡️

Smart sensors for precision farming:

• **Soil Moisture Sensors**: Optimize irrigation
• **Temperature & Humidity**: Perfect climate control
• **Light Intensity**: Monitor sunlight exposure
• **Automated Alerts**: Get notified of issues
• **Solar Powered**: Sustainable operation

Available in Lite, Basic, Premium, and Pro packages.`;
    }

    // Pricing
    if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
      return `**Pricing Information** 💰

Here's an overview of our pricing:

**Smart Greenhouses**: 
• Start from RWF 50,000 (after 30% discount)
• Customizable based on size and features

**FarmCloud**:
• Bronze: FREE forever
• Silver: RWF 15,000/month
• Gold: RWF 35,000/month
• Platinum: Custom pricing

**FarmShield**:
• Lite: RWF 65,000
• Basic: RWF 155,000
• Premium: RWF 182,000
• Pro: RWF 275,000

Use our pricing calculator for exact quotes!`;
    }

    // Crops
    if (input.includes('crop') || input.includes('plant') || input.includes('grow')) {
      return `**Crop Management** 🌱

I can help with various crops:

• **Tomatoes**: Ideal for greenhouses, high yield potential
• **Bell Peppers**: Great for export markets
• **Strawberries**: High-value crop with proper care
• **Lettuce**: Fast-growing, high demand
• **Herbs for Export**: Premium pricing available

What specific crop are you interested in?`;
    }

    // Support
    if (input.includes('help') || input.includes('support') || input.includes('problem')) {
      return `**Support & Help** 🆘

I'm here to help! For:

• **Technical Issues**: Contact our support team at support@cratagri.rw
• **Product Information**: Check our detailed product pages
• **Emergency Support**: Call +250 788 123 456
• **Farm Advice**: Our agronomists are available for consultations

Would you like me to connect you with a human expert?`;
    }

    // Default response
    return `Thank you for your question about "${userInput}"! 

As an AI farming assistant, I can help you with:

🌿 **Smart Farming Solutions**
• Greenhouse setup and pricing
• Crop selection and management
• Irrigation systems

📱 **Digital Tools**
• FarmCloud platform features
• FarmShield IoT sensors
• Mobile app guidance

💰 **Business Aspects**
• Pricing and packages
• ROI calculations
• Market access

💡 **Technical Support**
• Installation help
• Troubleshooting
• Best practices

Could you provide more specific details about what you need help with?`;
  };

  const quickQuestions = [
    "Greenhouse prices?",
    "FarmCloud features",
    "Crop advice",
    "Contact support"
  ];

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">AgriBot Assistant</h3>
                    <p className="text-green-100 text-sm">Crat_Agri AI Helper</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-green-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[80%] rounded-2xl p-4 ${
                    message.sender === 'user'
                      ? 'bg-green-600 text-white rounded-br-none'
                      : 'bg-white border border-gray-200 rounded-bl-none shadow-sm'
                  }`}>
                    <div className="text-sm leading-relaxed">
                      {formatMessage(message.text)}
                    </div>
                    <div className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-green-200' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none p-4 shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputMessage(question)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about farming, products, or support..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;