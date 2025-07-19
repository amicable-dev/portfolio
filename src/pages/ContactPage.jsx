import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, Copy, Check, Download, FileText } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  // EmailJS Configuration
  const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const userEmail = "raghavsinghkhatri01@gmail.com";
  const resumeUrl = "https://drive.google.com/file/d/1ejCM_iBqeeRBX5oWOA7kn87CtxJrLfoZ/view?usp=sharing";


  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => {
      window.emailjs.init(EMAIL_PUBLIC_KEY);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [EMAIL_PUBLIC_KEY]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    

    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Please enter a message';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(userEmail);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = userEmail;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const openResume = async () => {
    setIsOpening(true);
    try {
      // Open resume in a new tab
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open resume:', error);
    } finally {
      setTimeout(() => setIsOpening(false), 1000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('validation_error');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    // Check if EmailJS is loaded
    if (!window.emailjs) {
      setSubmitStatus('config_error');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    // Check if configuration is set up
    if (!EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_PUBLIC_KEY || 
        EMAIL_SERVICE_ID === "YOUR_SERVICE_ID" || 
        EMAIL_TEMPLATE_ID === "YOUR_TEMPLATE_ID" || 
        EMAIL_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      setSubmitStatus('config_error');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Raghav Singh',
        reply_to: formData.email,
        subject: `New Contact Form Message from ${formData.name}`
      };

      const response = await window.emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams,
        EMAIL_PUBLIC_KEY
      );
      
      console.log('EmailJS Response:', response);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Show success message for 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      // Show error message for 8 seconds to give user time to read
      setTimeout(() => setSubmitStatus(null), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A120B] text-[#E5E5CB] pt-16 pb-8 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        
        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-4 mb-12">
          {/* Email Card */}
          <div>
            <div 
              className="bg-white/10 backdrop-blur-xl hover:scale-[1.01] rounded-2xl p-6 transition-all cursor-pointer"
              onClick={copyToClipboard}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#1A120B] rounded-full">
                    <Mail className="w-6 h-6 text-[#E5E5CB]" />
                  </div>
                  <div>
                    <div className="text-[#E5E5CB] text-lg font-medium">Email Me</div>
                    <div className="text-[#E5E5CB] text-sm opacity-70 break-all">{userEmail}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 text-[#E5E5CB]">
                  {isCopied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </div>
              </div>
              {isCopied && (
                <div className="mt-2 text-green-400 text-sm">Email copied to clipboard!</div>
              )}
            </div>
          </div>

          {/* LinkedIn Card */}
          <div>
            <a href="https://www.linkedin.com/in/raghav-singh-8a3589263/" target="_blank" rel="noopener noreferrer">
              <div className="bg-white/10 backdrop-blur-xl hover:scale-[1.01] rounded-2xl p-6 transition-transform cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#1A120B] rounded-full">
                    <Linkedin className="w-6 h-6 text-[#E5E5CB]" />
                  </div>
                  <div>
                    <div className="text-[#E5E5CB] text-lg font-medium">LinkedIn Profile</div>
                    <div className="text-[#E5E5CB] text-sm opacity-70">Connect with me</div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* GitHub Card */}
          <div>
            <a href="https://github.com/amicable-dev" target="_blank" rel="noopener noreferrer">
              <div className="bg-white/10 backdrop-blur-xl hover:scale-[1.01] rounded-2xl p-6 transition-transform cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#1A120B] rounded-full">
                    <Github className="w-6 h-6 text-[#E5E5CB]" />
                  </div>
                  <div>
                    <div className="text-[#E5E5CB] text-lg font-medium">Github Profile</div>
                    <div className="text-[#E5E5CB] text-sm opacity-70">Find more of my repositories</div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Resume Card - Mobile */}
          <div>
            <div 
              className="bg-white/10 backdrop-blur-xl hover:scale-[1.01] rounded-2xl p-6 transition-all cursor-pointer"
              onClick={openResume}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#1A120B] rounded-full">
                    <FileText className="w-6 h-6 text-[#E5E5CB]" />
                  </div>
                  <div>
                    <div className="text-[#E5E5CB] text-lg font-medium">My Resume</div>
                    <div className="text-[#E5E5CB] text-sm opacity-70">View my latest resume</div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 text-[#E5E5CB]">
                  {isOpening ? (
                    <div className="w-5 h-5 border-2 border-[#E5E5CB] border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-6 grid-rows-8 gap-4 mb-16">
          <div 
            className="col-span-2 row-span-4 col-start-2 bg-white/10 backdrop-blur-xl hover:scale-[1.01] rounded-2xl p-8 transition-all cursor-pointer"
            onClick={copyToClipboard}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#1A120B] rounded-full mb-6">
              <Mail className="w-8 h-8 text-[#E5E5CB]" />
            </div>
            <div className="text-[#E5E5CB] text-lg">Email Me</div>
            <div className="text-[#E5E5CB] text-sm opacity-70 text-wrap mt-2 break-all">{userEmail}</div>
            <div className="flex items-center gap-2 mt-4 text-[#E5E5CB] text-sm">
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Click to copy</span>
                </>
              )}
            </div>
          </div>

          <a href="https://www.linkedin.com/in/raghav-singh-8a3589263/" target="_blank" rel="noopener noreferrer" className="col-span-2 row-span-4 col-start-2 row-start-5">
            <div className="w-full h-full bg-white/10 backdrop-blur-xl hover:scale-[1.01] rounded-2xl p-8 transition-transform cursor-pointer block">
              <div className="flex items-center justify-center w-16 h-16 bg-[#1A120B] rounded-full mb-6">
                <Linkedin className="w-8 h-8 text-[#E5E5CB]" />
              </div>
              <div className="text-[#E5E5CB] text-lg">LinkedIn Profile</div>
            </div>
          </a>

          {/* GitHub Card - Reduced to 4 rows (square) */}
          <a href="https://github.com/amicable-dev" target="_blank" rel="noopener noreferrer" className="col-span-2 row-span-4 col-start-4 row-start-1">
            <div className="w-full h-full bg-white/10 backdrop-blur-xl hover:scale-[1.01] rounded-2xl p-8 transition-transform cursor-pointer block">
              <div className="flex items-center justify-center w-16 h-16 bg-[#1A120B] rounded-full mb-6">
                <Github className="w-8 h-8 text-[#E5E5CB]" />
              </div>
              <h3 className="text-[#E5E5CB] text-xl font-bold mb-2">Github Profile</h3>
              <p className="text-[#E5E5CB] text-sm">Find more of my repositories</p>
            </div>
          </a>

          {/* Resume Card - Desktop */}
          <div 
            className="col-span-2 row-span-4 col-start-4 row-start-5 bg-white/10 backdrop-blur-xl hover:scale-[1.01] rounded-2xl p-8 transition-all cursor-pointer"
            onClick={openResume}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#1A120B] rounded-full mb-6">
              <FileText className="w-8 h-8 text-[#E5E5CB]" />
            </div>
            <h3 className="text-[#E5E5CB] text-xl font-bold mb-2">My Resume</h3>
            <p className="text-[#E5E5CB] text-sm mb-4">View my latest resume</p>
            <div className="flex items-center gap-2 text-[#E5E5CB] text-sm">
              {isOpening ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#E5E5CB] border-t-transparent rounded-full animate-spin"></div>
                  <span>Opening...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Click to view</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact with me</h2>
          <p className="text-[#E5E5CB] mb-6 sm:mb-8">You can also get in touch with me through this form below.</p>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div className="text-red-400">
                <p className="font-medium">Failed to send message.</p>
                <p className="text-sm mt-1">Please check the console for details or contact me directly via email.</p>
              </div>
            </div>
          )}

          {submitStatus === 'config_error' && (
            <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <div className="text-yellow-400">
                <p className="font-medium">EmailJS not configured properly.</p>
                <p className="text-sm mt-1">Please set up your EmailJS credentials or contact me directly via email.</p>
              </div>
            </div>
          )}

          {submitStatus === 'validation_error' && (
            <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <span className="text-yellow-400">Please fix the errors below and try again.</span>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-[#E5E5CB] text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
                className={`w-full px-4 py-3 bg-white/10 backdrop-blur-xl border rounded-lg text-[#E5E5CB] placeholder-[#E5E5CB]/70 focus:outline-none focus:ring-2 focus:ring-[#bbb3ac] focus:border-[#bbb3ac] ${
                  validationErrors.name ? 'border-red-500' : 'border-[#E5E5CB]'
                }`}
              />
              {validationErrors.name && (
                <p className="mt-1 text-sm text-red-400">{validationErrors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-[#E5E5CB] text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john.doe@example.com"
                required
                className={`w-full px-4 py-3 bg-white/10 backdrop-blur-xl border rounded-lg text-[#E5E5CB] placeholder-[#E5E5CB]/70 focus:outline-none focus:ring-2 focus:ring-[#bbb3ac] focus:border-[#bbb3ac] ${
                  validationErrors.email ? 'border-red-500' : 'border-[#E5E5CB]'
                }`}
              />
              {validationErrors.email && (
                <p className="mt-1 text-sm text-red-400">{validationErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-[#E5E5CB] text-sm font-medium mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message here"
                rows={6}
                required
                className={`w-full px-4 py-3 bg-white/10 backdrop-blur-xl border rounded-lg text-[#E5E5CB] placeholder-[#E5E5CB]/70 focus:outline-none focus:ring-2 focus:ring-[#bbb3ac] focus:border-[#bbb3ac] resize-none ${
                  validationErrors.message ? 'border-red-500' : 'border-[#E5E5CB]'
                }`}
              />
              {validationErrors.message && (
                <p className="mt-1 text-sm text-red-400">{validationErrors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="w-full bg-[#E5E5CB] hover:bg-[#bbb3ac] disabled:bg-[#7a6a5c] text-[#1A120B] font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#1A120B] border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}