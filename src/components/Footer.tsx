
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-healthcare rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MedLink+</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              India's smartest healthcare platform with ABHA integration for seamless 
              doctor-patient connectivity and secure health data management.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>support@medlinkplus.in</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 1800-123-HEALTH</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Find Doctors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Book Appointments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Locker</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lab Tests</a></li>
            </ul>
          </div>

          {/* ABHA & Compliance */}
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">ABHA & Compliance</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">ABHA Registration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ABDM Standards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Support</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Doctor Registration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner with Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 MedLink+. All rights reserved. | Powered by Ayushman Bharat Digital Mission
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <span>🏥 ABDM Compliant</span>
              <span>🔒 FHIR Enabled</span>
              <span>🇮🇳 Made in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
