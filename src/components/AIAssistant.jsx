import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AIAssistant = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm the AI assistant for this portfolio. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let response = "I'm sorry, I don't have enough information to answer that question. Feel free to ask something else about the portfolio or the developer!";

      const lowercaseInput = input.toLowerCase();

      if (lowercaseInput.includes('name')) {
        response = 'This portfolio belongs to Goutam Sharma, a passionate B.Tech CSE student at IPS Academy, Indore, focused on Web Development and Machine Learning.';
      } else if (lowercaseInput.includes('project') || lowercaseInput.includes('work')) {
        response = 'You’ll find a range of projects in this portfolio—from MERN stack web apps to deep learning experiments and real-world interview simulation tools. Explore the Projects section!';
      } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('hire') || lowercaseInput.includes('email')) {
        response = 'Feel free to reach out via the contact form or directly email at goutamsharma04052005@gmail.com. Goutam is open to internships and collaborations.';
      } else if (lowercaseInput.includes('skill') || lowercaseInput.includes('technology')) {
        response = 'The portfolio owner is skilled in ReactJS, Node.js, Python, C++, TensorFlow, and more. You can see the Skills section for a full list of technologies.';
      } else if (lowercaseInput.includes('education') || lowercaseInput.includes('degree') || lowercaseInput.includes('university')) {
        response = 'Goutam is currently pursuing a B.Tech in Computer Science from IPS Academy - Institute of Engineering and Science, with a stellar GPA of 9.5.';
      } else if (lowercaseInput.includes('about')) {
        response = 'Goutam Sharma is a passionate developer focused on solving real-world problems using web and AI technologies. His mission is to build intelligent, user-friendly software that makes a positive impact.';
      } else if (lowercaseInput.includes('experience') || lowercaseInput.includes('work history')) {
        response = 'Goutam has completed internships and built multiple products like SmartHire (AI interview platform), ML-based captioning tools, and more. Check the Experience or Projects section.';
      } else if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || lowercaseInput.includes('hey')) {
        response = 'Hey! 👋 I’m here to help you explore Goutam Sharma’s portfolio. Ask me about projects, skills, or how to get in touch.';
      } else if (lowercaseInput.includes('thank')) {
        response = 'You’re welcome! Let me know if you need help navigating any part of the site.';
      }

      const assistantMessage = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const chatVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed bottom-5 right-5 w-80 md:w-96 h-[500px] ${theme.bgSecondary} text-white rounded-lg shadow-xl z-50 flex flex-col`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={chatVariants}
        >
          <div className={`${theme.buttonBg} text-white py-4 px-6 rounded-t-lg flex justify-between items-center`}>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              <h3 className="font-semibold text-lg">Portfolio AI Assistant</h3>
            </div>
            <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-900">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="bg-gray-700 text-gray-200 rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700 bg-gray-800 rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                disabled={input.trim() === '' || isTyping}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIAssistant;