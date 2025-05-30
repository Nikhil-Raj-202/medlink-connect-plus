
import { Button } from '@/components/ui/button';
import { Search, MapPin, Stethoscope, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                ABHA Integrated & Secure
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Health,{' '}
                <span className="text-gradient">Connected</span> & Protected
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                India's smartest healthcare platform with ABHA integration. Find verified doctors, 
                book appointments, and securely store your health records in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-white px-8">
                <Search className="w-5 h-5 mr-2" />
                Find Doctors Near You
              </Button>
              <Button size="lg" variant="outline">
                <Shield className="w-5 h-5 mr-2" />
                Connect with ABHA
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-gray-600">Verified Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Quick Search</h3>
                <Stethoscope className="w-5 h-5 text-primary" />
              </div>
              
              <div className="space-y-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search doctors, specializations..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                
                <Button className="w-full gradient-primary text-white">
                  Search Doctors
                </Button>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-3">Popular Specializations:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Cardiology</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Pediatrics</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Dermatology</span>
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
