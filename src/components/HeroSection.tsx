
import { Button } from '@/components/ui/button';
import { Search, MapPin, Stethoscope, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-blue-100/30 rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-green-100/30 rounded-full blur-2xl sm:blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                ABHA Integrated & Secure
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Your Health,{' '}
                <span className="text-gradient block sm:inline">Connected</span> & Protected
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                India's smartest healthcare platform with ABHA integration. Find verified doctors, 
                book appointments, and securely store your health records in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/find-doctors">
                <Button size="lg" className="gradient-primary text-white px-6 sm:px-8 w-full sm:w-auto">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Find Doctors Near You
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Connect with ABHA
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">10K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Verified Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">50K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 space-y-4 max-w-md mx-auto lg:max-w-none">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Quick Search</h3>
                <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              
              <div className="space-y-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search doctors, specializations..."
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm sm:text-base"
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm sm:text-base"
                  />
                </div>
                
                <Link to="/find-doctors" className="block">
                  <Button className="w-full gradient-primary text-white text-sm sm:text-base">
                    Search Doctors
                  </Button>
                </Link>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs sm:text-sm text-gray-600 mb-3">Popular Specializations:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Cardiology</span>
                  <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Pediatrics</span>
                  <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Dermatology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
