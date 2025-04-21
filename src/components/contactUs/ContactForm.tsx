"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Send form data to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Get response data
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setSubmitStatus({
        success: true,
        message: "Thank you for your message. We'll get back to you soon!"
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : "There was an error sending your message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
        Send Us a Message
      </h2>
      
      {submitStatus && (
        <div 
          className={`p-4 mb-6 rounded-sm ${
            submitStatus.success 
              ? "bg-green-50 border border-green-200 text-green-800" 
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]/30 focus:border-[#FFC0CB] transition-colors"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]/30 focus:border-[#FFC0CB] transition-colors"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]/30 focus:border-[#FFC0CB] transition-colors"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]/30 focus:border-[#FFC0CB] transition-colors"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="" disabled>Select Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Custom Order">Custom Order</option>
              <option value="Repair Service">Repair Service</option>
              <option value="Appointment">Appointment</option>
              <option value="Product Question">Product Question</option>
            </select>
          </div>
        </div>
        
        <div>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FFC0CB]/30 focus:border-[#FFC0CB] transition-colors"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FFC0CB] hover:bg-[#ffaabb] text-white font-medium px-6 py-3 rounded-sm transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
        
        <div className="text-center">
          <span className="text-xs text-gray-600">
            We&apos;ll never share your information with anyone else.
          </span>
        </div>
      </form>
    </div>
  );
} 