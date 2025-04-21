"use client";

import React from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
        Our Information
      </h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFC0CB]/10 flex items-center justify-center">
            <MapPin className="h-5 w-5 text-[#FFC0CB]" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">Store Location</h3>
            <p className="mt-1 text-gray-600">
              123 Elegance Avenue<br />
              Suite 200<br />
              San Francisco, CA 94107
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFC0CB]/10 flex items-center justify-center">
            <Clock className="h-5 w-5 text-[#FFC0CB]" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">Store Hours</h3>
            <div className="mt-1 text-gray-600 space-y-1">
              <div className="flex justify-between">
                <span className="font-medium min-w-[120px]">Monday - Friday:</span>
                <span>10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium min-w-[120px]">Saturday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium min-w-[120px]">Sunday:</span>
                <span>12:00 PM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFC0CB]/10 flex items-center justify-center">
            <Phone className="h-5 w-5 text-[#FFC0CB]" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
            <a 
              href="tel:+14155552671" 
              className="mt-1 text-gray-600 hover:text-[#FFC0CB] transition-colors"
            >
              (415) 555-2671
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFC0CB]/10 flex items-center justify-center">
            <Mail className="h-5 w-5 text-[#FFC0CB]" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            <a 
              href="mailto:contact@mdstores.com" 
              className="mt-1 text-gray-600 hover:text-[#FFC0CB] transition-colors"
            >
              contact@mdstores.com
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center">
            <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium rounded-sm">
              Private Appointments
            </span>
          </div>
          <p className="mt-3 text-gray-600">
            We offer private consultations for custom jewelry design, bridal selections, 
            and exclusive collections. Please contact us to schedule your appointment.
          </p>
        </div>
      </div>
    </div>
  );
} 