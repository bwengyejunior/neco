
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! I\'m neco\'s virtual assistant. How can I help you today?',
    isUser: false,
    timestamp: new Date()
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const generateResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let response = '';
    
    // Simple rule-based responses
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      response = 'Hello there! How can I help you today?';
    } else if (lowerCaseMessage.includes('service')) {
      response = 'We offer Custom Software Development, Strategic IT Consulting, and Cloud Migration & Management. Would you like to learn more about any of these services?';
    } else if (lowerCaseMessage.includes('pricing') || lowerCaseMessage.includes('cost')) {
      response = 'Our pricing depends on the specific needs of your project. Would you like to schedule a consultation to discuss your requirements?';
    } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('talk')) {
      response = 'You can reach us through the contact form on our website, or schedule a consultation. Would you like me to guide you there?';
    } else if (lowerCaseMessage.includes('thanks') || lowerCaseMessage.includes('thank you')) {
      response = 'You\'re welcome! Is there anything else I can help you with?';
    } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
      response = 'Thank you for chatting! Feel free to reach out if you have any other questions.';
    } else {
      response = 'I appreciate your question. For more detailed information, our team would be happy to help. Would you like to schedule a consultation?';
    }
    
    setIsTyping(false);
    
    return response;
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Generate bot response
    const response = await generateResponse(input);
    
    // Add bot message
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: response,
      isUser: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, botMessage]);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-button" onClick={toggleChatbot} aria-label="Open chat">
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
      </div>
      
      {isOpen && (
        <div className="chatbot-panel animate-fade-in">
          <div className="chatbot-header">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>neco Assistant</span>
            </div>
            <button onClick={toggleChatbot} className="text-white hover:text-white/80">
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`chatbot-message ${message.isUser ? 'chatbot-user-message' : 'chatbot-bot-message'}`}
              >
                {message.text}
              </div>
            ))}
            
            {isTyping && (
              <div className="chatbot-message chatbot-bot-message">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSendMessage} className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
              className="flex-1 bg-transparent focus:outline-none"
              aria-label="Type your message"
            />
            <button 
              type="submit" 
              className="p-2 text-primary hover:text-primary/80 transition-colors"
              disabled={input.trim() === ''}
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
