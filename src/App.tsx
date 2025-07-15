import React, { useState, useEffect } from 'react';
import { Heart, Microscope, Building2,  Moon, Sun, MessageCircle, X, Send } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', message: 'Hi! I\'m HopeBot 🦷✨ How can I help you today?' }
  ]);
  const [pricingPeriod, setPricingPeriod] = useState('monthly');

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Custom Cursor */}
      <div className="custom-cursor fixed w-5 h-5 rounded-full border-2 border-blue-400 bg-white/90 shadow-md pointer-events-none z-50" style={{boxShadow: '0 2px 8px 0 rgba(59,130,246,0.10)'}}></div>
      
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="logo-container relative group">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Heart className="w-8 h-8 text-cyan-400 animate-pulse" />
                    <div className="absolute inset-0 w-8 h-8 rounded-full bg-cyan-400 opacity-20 animate-ping"></div>
                  </div>
                  <span className="text-2xl font-bold text-navy-800 dark:text-white tracking-wide">
                    H.O.P.E
                  </span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors duration-300">Home</a>
              <a href="#features" className="nav-link text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors duration-300">Features</a>
              <a href="#pricing" className="nav-link text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors duration-300">Pricing</a>
              <a href="#use-cases" className="nav-link text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors duration-300">Use Cases</a>
              <a href="#contact" className="nav-link text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button className="magnetic-btn bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105">
                View Products
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden">
        {/* 3D Floating Medical Elements */}
        <div className="absolute inset-0">
          {/* 3D Medical Icons Container */}
          <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 perspective-1000">
            {/* Main 3D Platform */}
            <div className="relative transform-gpu animate-float-3d">
              {/* Base Platform */}
              <div className="w-80 h-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl transform rotateX-15 shadow-2xl backdrop-blur-sm border border-white/10"></div>
              
              {/* Medical Document Icon */}
              <div className="absolute -top-16 left-8 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl transform rotateY-15 rotateX-10 animate-float-icon hover:scale-110 transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-white">
                    <div className="w-8 h-10 bg-white/90 rounded-sm relative">
                      <div className="absolute top-2 left-2 w-4 h-1 bg-blue-500 rounded"></div>
                      <div className="absolute top-4 left-2 w-3 h-1 bg-blue-400 rounded"></div>
                      <div className="absolute top-6 left-2 w-4 h-1 bg-blue-300 rounded"></div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Analytics Chart Icon */}
              <div className="absolute -top-20 right-8 w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl transform rotateY-minus-15 rotateX-10 animate-float-icon hover:scale-110 transition-all duration-500 cursor-pointer" style={{animationDelay: '1s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-white">
                    <div className="flex items-end space-x-1">
                      <div className="w-2 h-4 bg-white/90 rounded-sm"></div>
                      <div className="w-2 h-6 bg-white/90 rounded-sm"></div>
                      <div className="w-2 h-3 bg-white/90 rounded-sm"></div>
                      <div className="w-2 h-7 bg-white/90 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* User Profile Icon */}
              <div className="absolute -top-12 left-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl shadow-2xl transform rotateY-5 rotateX-5 animate-float-icon hover:scale-110 transition-all duration-500 cursor-pointer" style={{animationDelay: '2s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-white">
                    <div className="w-6 h-6 bg-white/90 rounded-full mb-1"></div>
                    <div className="w-8 h-3 bg-white/90 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Dental Tooth Icon */}
              <div className="absolute -top-24 right-20 w-18 h-18 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-2xl transform rotateY-minus-10 rotateX-15 animate-float-icon hover:scale-110 transition-all duration-500 cursor-pointer" style={{animationDelay: '0.5s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-white text-2xl">🦷</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Spheres */}
          <div className="absolute top-1/4 right-1/3 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg animate-float-sphere opacity-80" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-2/3 right-1/5 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-float-sphere opacity-60" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/6 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg animate-float-sphere opacity-70" style={{animationDelay: '2.5s'}}></div>
          
          {/* Background Glow Effects */}
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute top-1/3 right-1/5 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up">
                H.O.P.E
              </h1>
              
              <div className="space-y-6 mb-8">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                  HOPE combines medical documentation, management, analysis & diagnostics into a single unified environment
                </p>
                
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed animate-fade-in-up" style={{animationDelay: '1s'}}>
                  so that you can focus on what really matters — <span className="text-white font-semibold">"To Save Life"</span>
                </p>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
                Get Started
              </button>
            </div>
            
            {/* Right side is handled by the floating elements */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Transforming Healthcare Across Industries
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our advanced AI platform serves diverse healthcare environments with specialized solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dental Clinics */}
            <div className="tilt-card bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden transform-gpu hover:scale-105 hover:-rotate-1">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* 3D Floating Elements */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className="w-8 h-8 transform rotate-45 group-hover:rotate-90 transition-transform duration-700">
                  <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg animate-pulse"></div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white group-hover:animate-heartbeat" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Dental Clinics</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Advanced diagnostic tools for early cavity detection, periodontal analysis, and oral cancer screening with 95% accuracy.
                </p>
                <div className="mt-6 flex items-center text-cyan-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <div className="ml-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Research Institutions */}
            <div className="tilt-card bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden transform-gpu hover:scale-105 hover:rotate-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* 3D DNA Helix Animation */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 border-2 border-blue-500 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-1 border-2 border-purple-600 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Microscope className="w-8 h-8 text-white group-hover:animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Research Institutions</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Comprehensive data analytics and AI-driven insights for groundbreaking oral pathology research and clinical studies.
                </p>
                <div className="mt-6 flex items-center text-blue-500 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <div className="ml-2 w-4 h-4 border-t-2 border-r-2 border-blue-500 transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Healthcare Centers */}
            <div className="tilt-card bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden transform-gpu hover:scale-105 hover:-rotate-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* 3D Medical Cross */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className="relative w-8 h-8 transform group-hover:rotate-45 transition-transform duration-500">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500 transform -translate-y-1/2"></div>
                  <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-500 transform -translate-x-1/2"></div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Healthcare Centers</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Integrated health monitoring systems connecting oral health to overall wellness with predictive analytics.
                </p>
                <div className="mt-6 flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <div className="ml-2 w-4 h-4 border-t-2 border-r-2 border-purple-600 transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced AI-Powered Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technology meets compassionate care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "AI Diagnosis", description: "95% accuracy in pathology detection", icon: "🧠", color: "from-cyan-400 to-blue-500" },
              { title: "Real-time Analysis", description: "Instant results with live imaging", icon: "⚡", color: "from-yellow-400 to-orange-500" },
              { title: "Predictive Analytics", description: "Early warning systems", icon: "🔮", color: "from-purple-500 to-pink-500" },
              { title: "Secure Cloud", description: "HIPAA compliant data storage", icon: "🔒", color: "from-green-400 to-teal-500" }
            ].map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-500 transform-gpu hover:-translate-y-2">
                {/* 3D Card Effect */}
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 text-3xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 relative overflow-hidden`}>
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-white/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    
                    {/* Icon with 3D effect */}
                    <span className="relative z-10 transform group-hover:scale-125 transition-transform duration-300 filter drop-shadow-lg">
                      {feature.icon}
                    </span>
                    
                    {/* Orbiting particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full animate-ping transform -translate-x-1/2"></div>
                      <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse transform -translate-x-1/2" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your needs. No hidden fees, no surprises.
            </p>
          </div>
          {/* Pricing Toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-sm">
              <button
                className={`px-6 py-2 rounded-full font-semibold focus:outline-none transition-colors duration-300 ${pricingPeriod === 'monthly' ? 'bg-blue-500 text-white' : 'text-gray-700 dark:text-gray-200'}`}
                onClick={() => setPricingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full font-semibold focus:outline-none transition-colors duration-300 ${pricingPeriod === 'yearly' ? 'bg-blue-500 text-white' : 'text-gray-700 dark:text-gray-200'}`}
                onClick={() => setPricingPeriod('yearly')}
              >
                Yearly
              </button>
            </div>
          </div>
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col items-center border-2 border-blue-100 dark:border-blue-900">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-blue-500">🦷</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Starter Plan</h3>
              <div className="text-3xl font-extrabold text-blue-500 mb-1">{pricingPeriod === 'monthly' ? '$0' : '$0'}</div>
              <div className="text-sm text-gray-500 mb-4">Always free!</div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-6 text-left w-full max-w-xs mx-auto">
                <li>Basic oral health screening</li>
                <li>Up to 50 screenings/month</li>
                <li>Basic analytics dashboard</li>
                <li>Community support</li>
                <li>Basic patient records</li>
                <li>Email notifications</li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300">Sign up</button>
            </div>
            {/* Professional Plan */}
            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-blue-400/30 transition-all duration-500 group flex flex-col items-center border-4 border-blue-400 scale-105 z-10">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">Most Popular</div>
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-blue-500">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional Plan</h3>
              <div className="text-3xl font-extrabold text-blue-500 mb-1">{pricingPeriod === 'monthly' ? '$29' : '$290'}</div>
              <div className="text-sm text-gray-500 mb-4">{pricingPeriod === 'monthly' ? 'Free during beta!' : 'Free during beta!'}</div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-6 text-left w-full max-w-xs mx-auto">
                <li>Everything in Starter +</li>
                <li>Unlimited screenings</li>
                <li>Advanced analytics & reporting</li>
                <li>Priority email support</li>
                <li>Custom patient forms</li>
                <li>Team collaboration tools</li>
                <li>API access</li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300">Get started</button>
              <div className="text-xs text-gray-400 mt-2">* Keep screening! It's free for now.<br/>We'll offer a special deal for our beta users.</div>
            </div>
            {/* Enterprise Plan */}
            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col items-center border-2 border-blue-100 dark:border-blue-900 opacity-80">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-blue-500">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise Plan</h3>
              <div className="text-3xl font-extrabold text-blue-500 mb-1">Coming soon</div>
              <div className="text-sm text-gray-500 mb-4">For large healthcare organizations</div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-6 text-left w-full max-w-xs mx-auto">
                <li>Everything in Professional +</li>
                <li>Custom integration options</li>
                <li>Advanced admin controls</li>
                <li>Dedicated support manager</li>
                <li>Custom model training</li>
                <li>SLA guarantees</li>
                <li>HIPAA compliance support</li>
                <li>Multi-location support</li>
              </ul>
              <button className="w-full bg-gray-400 text-white py-3 rounded-lg font-semibold cursor-not-allowed opacity-60">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-cyan-400 mr-2" />
                <span className="text-2xl font-bold">H.O.P.E</span>
              </div>
              <p className="text-gray-400">
                Transforming healthcare through innovative AI-powered oral pathology solutions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#use-cases" className="text-gray-400 hover:text-cyan-400 transition-colors">Use Cases</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Form</h4>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Your message"
                  rows={3}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 H.O.P.E. All rights reserved. Powered by advanced AI technology.</p>
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

export default App;