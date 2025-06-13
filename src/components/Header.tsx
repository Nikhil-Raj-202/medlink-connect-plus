
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, User, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 gradient-healthcare rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gradient">MedLink+</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link to="/find-doctors" className="text-sm xl:text-base text-gray-700 hover:text-primary transition-colors">Find Doctors</Link>
            <a href="#" className="text-sm xl:text-base text-gray-700 hover:text-primary transition-colors">Specializations</a>
            <a href="#" className="text-sm xl:text-base text-gray-700 hover:text-primary transition-colors">Health Locker</a>
            <a href="#" className="text-sm xl:text-base text-gray-700 hover:text-primary transition-colors">About</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="gradient-primary text-white text-xs sm:text-sm">
                <span className="hidden lg:inline">Sign Up</span>
              </Button>
            </Link>
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 cursor-pointer hover:text-primary transition-colors" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-3">
              <Link to="/find-doctors" className="text-gray-700 hover:text-primary transition-colors py-2 px-2">Find Doctors</Link>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2 px-2">Specializations</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2 px-2">Health Locker</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors py-2 px-2">About</a>
              <div className="pt-3 border-t border-gray-200 space-y-3 px-2">
                <Link to="/login">
                  <Button variant="outline" size="sm" className="w-full justify-center">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="w-full gradient-primary text-white justify-center">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
