import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, X, Send, Moon, Sun, Menu } from 'lucide-react';

const Products = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', message: "Hi! I'm HopeBot 🦷✨ How can I help you today?" }
  ]);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setChatHistory(prev => [...prev, { type: 'user', message: chatMessage }]);
    setTimeout(() => {
      const responses = [
        "That's a great question! Our AI can help analyze oral pathology with 95% accuracy. 🎯",
        "I'd be happy to help! Would you like to schedule a demo or learn more about our features? 🚀",
        "Interesting! Our platform combines cutting-edge AI with medical expertise for better outcomes. 💡",
        "Let me help you with that! Our team of experts is standing by to assist. 🌟"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatHistory(prev => [...prev, { type: 'bot', message: randomResponse }]);
    }, 1000);
    setChatMessage('');
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Custom Cursor */}
      <div className="custom-cursor fixed w-5 h-5 rounded-full border-2 border-blue-400 bg-white/90 shadow-md pointer-events-none z-50" style={{boxShadow: '0 2px 8px 0 rgba(59,130,246,0.10)'}}></div>
      {/* Header */}
      <header className="sticky top-0 z-40 w-full">
        <nav className="max-w-7xl mx-auto mt-4 px-2 sm:px-4 lg:px-8 rounded-2xl shadow-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 backdrop-blur-md flex items-center justify-between py-3 transition-all duration-500 relative">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="logo-container relative group flex items-center space-x-2">
              <div className="relative">
                <Heart className="w-8 h-8 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 w-8 h-8 rounded-full bg-cyan-400 opacity-20 animate-ping"></div>
              </div>
              <span className="text-2xl font-bold text-navy-800 dark:text-white tracking-wide drop-shadow-lg">
                H.O.P.E
              </span>
            </div>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a href="/" className="nav-link px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300">Home</a>
            <a href="/#features" className="nav-link px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300">Features</a>
            <a href="/#pricing" className="nav-link px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300">Pricing</a>
            <a href="/products" className="nav-link px-3 py-2 rounded-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md hover:from-blue-500 hover:to-cyan-400 transition-all duration-300">Our Products</a>
            <a href="/#contact" className="nav-link px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300">Contact</a>
          </div>
          {/* Mobile Nav Toggle */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setNavOpen(!navOpen)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-cyan-200 dark:hover:bg-cyan-800 shadow transition-colors duration-300 focus:outline-none">
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </button>
          </div>
          {/* Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-2 ml-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-cyan-200 dark:hover:bg-cyan-800 shadow transition-colors duration-300"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          {/* Mobile Nav Dropdown */}
          {navOpen && (
            <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 rounded-b-2xl shadow-xl flex flex-col items-center py-4 space-y-2 md:hidden animate-fadeInUp z-50">
              <a href="/" className="w-11/12 text-center nav-link px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300" onClick={()=>setNavOpen(false)}>Home</a>
              <a href="/#features" className="w-11/12 text-center nav-link px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300" onClick={()=>setNavOpen(false)}>Features</a>
              <a href="/#pricing" className="w-11/12 text-center nav-link px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300" onClick={()=>setNavOpen(false)}>Pricing</a>
              <a href="/products" className="w-11/12 text-center nav-link px-4 py-3 rounded-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md hover:from-blue-500 hover:to-cyan-400 transition-all duration-300" onClick={()=>setNavOpen(false)}>Our Products</a>
              <a href="/#contact" className="w-11/12 text-center nav-link px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300" onClick={()=>setNavOpen(false)}>Contact</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-cyan-200 dark:hover:bg-cyan-800 shadow transition-colors duration-300"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          )}
        </nav>
      </header>
      {/* Products Section */}
      <section className="py-10 sm:py-16 bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-[60vh]">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12">Discover our suite of advanced healthcare solutions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* OraCare */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-2 border-blue-100 dark:border-blue-900">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl sm:text-3xl">🦷</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2 flex items-center">OraCare <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Logo</span></h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Advanced oral health screening platform empowering healthcare professionals with quick, accurate assessments.</p>
              <button className="bg-blue-500 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 text-sm sm:text-base">Get Started</button>
            </div>
            {/* O.D.D */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center opacity-80 border-2 border-blue-100 dark:border-blue-900">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl sm:text-3xl">🔬</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">O.D.D</h3>
              <div className="text-xs sm:text-sm text-gray-500 mb-2">Coming Soon</div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Oncological Diffrencal Diagnotics System - Advanced AI-powered diagnostic system for oral oncology.</p>
              <button className="bg-gray-400 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-full font-semibold cursor-not-allowed opacity-60 text-sm sm:text-base">Coming Soon</button>
            </div>
            {/* P.A.G.E.S */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center opacity-80 border-2 border-blue-100 dark:border-blue-900">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl sm:text-3xl">📊</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">P.A.G.E.S</h3>
              <div className="text-xs sm:text-sm text-gray-500 mb-2">Coming Soon</div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Patient Analytics & Genomic Evaluation System - Comprehensive patient data analysis platform.</p>
              <button className="bg-gray-400 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-full font-semibold cursor-not-allowed opacity-60 text-sm sm:text-base">Coming Soon</button>
            </div>
            {/* E.A.S.Y */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center opacity-80 border-2 border-blue-100 dark:border-blue-900">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl sm:text-3xl">⚡</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">E.A.S.Y</h3>
              <div className="text-xs sm:text-sm text-gray-500 mb-2">Coming Soon</div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Enhanced Automated Screening Yield - Streamlined screening process with automated workflows.</p>
              <button className="bg-gray-400 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-full font-semibold cursor-not-allowed opacity-60 text-sm sm:text-base">Coming Soon</button>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 text-gray-200 text-base sm:text-lg">More innovative healthcare solutions coming soon...</div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="mb-4 md:mb-0">
              <span className="font-bold text-xl">2025 H.O.P.E Organization. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Us</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      {/* HopeBot Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className="mb-4 w-80 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transform-gpu animate-fadeInUp">
            <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-4 text-white relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                <div className="absolute top-4 right-8 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-3 left-12 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* 3D Animated Avatar */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3 relative transform-gpu hover:scale-110 transition-all duration-300 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full animate-spin-slow opacity-30"></div>
                    <div className="relative z-10 transform hover:rotate-12 transition-transform duration-300">
                      <span className="text-xl animate-bounce">🦷</span>
                    </div>
                    {/* Floating particles around avatar */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">HopeBot</h3>
                    <p className="text-sm opacity-90 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      Your AI Health Assistant
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setChatOpen(false)}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-900">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`} style={{animationDelay: `${index * 0.1}s`}}>
                  <div className={`max-w-xs px-4 py-3 rounded-2xl shadow-md transform hover:scale-105 transition-all duration-300 ${
                    chat.type === 'user'
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-cyan-400/25'
                      : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600'
                  }`}>
                    {chat.message}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 dark:bg-gray-700 dark:text-white transition-all duration-300 bg-gray-50 dark:bg-gray-600"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-3 rounded-xl hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        )}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="hopebot-btn bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-cyan-400/50 transition-all duration-500 flex items-center justify-center group hover:scale-110 relative overflow-hidden transform-gpu"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
          {/* Icon */}
          <div className="relative z-10 transform group-hover:rotate-12 transition-transform duration-300">
            {chatOpen ? (
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
            )}
          </div>
          {/* Notification dot */}
          {!chatOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-xs font-bold">!</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Products; 