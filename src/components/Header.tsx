
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, User, Bell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-healthcare rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">MedLink+</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Find Doctors</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Specializations</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Health Locker</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">About</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Login with ABHA
            </Button>
            <Button size="sm" className="gradient-primary text-white">
              Book Appointment
            </Button>
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-primary transition-colors" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2">Find Doctors</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2">Specializations</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2">Health Locker</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2">About</a>
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  <User className="w-4 h-4 mr-2" />
                  Login with ABHA
                </Button>
                <Button size="sm" className="w-full gradient-primary text-white">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
