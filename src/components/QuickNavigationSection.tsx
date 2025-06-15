
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Stethoscope, 
  Phone, 
  Bot, 
  FileText, 
  Heart, 
  Users, 
  Settings,
  LayoutDashboard,
  UserPlus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickNavigationSection = () => {
  const navigationCards = [
    {
      title: 'Dashboard',
      description: 'Your personalized health overview',
      icon: LayoutDashboard,
      route: '/dashboard',
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Book Appointment',
      description: 'Schedule with verified doctors',
      icon: Calendar,
      route: '/book-appointment',
      color: 'bg-green-50 hover:bg-green-100 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      title: 'Emergency Booking',
      description: 'Urgent medical assistance',
      icon: Phone,
      route: '/emergency-booking',
      color: 'bg-red-50 hover:bg-red-100 border-red-200',
      iconColor: 'text-red-600'
    },
    {
      title: 'AI Health Assistant',
      description: 'Chat with our medical AI',
      icon: Bot,
      route: '/ai-assistant',
      color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      title: 'My Reports',
      description: 'View and manage health reports',
      icon: FileText,
      route: '/reports',
      color: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
      iconColor: 'text-orange-600'
    },
    {
      title: 'Wellness & Tips',
      description: 'Health knowledge and remedies',
      icon: Heart,
      route: '/wellness',
      color: 'bg-pink-50 hover:bg-pink-100 border-pink-200',
      iconColor: 'text-pink-600'
    },
    {
      title: 'Family Health',
      description: 'Manage family member health',
      icon: Users,
      route: '/family-health',
      color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
      iconColor: 'text-indigo-600'
    },
    {
      title: 'Settings',
      description: 'Account and privacy settings',
      icon: Settings,
      route: '/settings',
      color: 'bg-gray-50 hover:bg-gray-100 border-gray-200',
      iconColor: 'text-gray-600'
    }
  ];

  const authCards = [
    {
      title: 'Sign Up',
      description: 'Create your health account',
      icon: UserPlus,
      route: '/signup',
      color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
      iconColor: 'text-teal-600'
    },
    {
      title: 'Login',
      description: 'Access your health dashboard',
      icon: Stethoscope,
      route: '/login',
      color: 'bg-cyan-50 hover:bg-cyan-100 border-cyan-200',
      iconColor: 'text-cyan-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quick Access to Your Health Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate to any service with just one click. Your complete healthcare management system at your fingertips.
          </p>
        </div>

        {/* Main Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {navigationCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Link key={index} to={card.route}>
                <Card className={`h-full transition-all duration-200 cursor-pointer ${card.color}`}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <IconComponent className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Authentication Section */}
        <div className="border-t border-gray-200 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Get Started Today
            </h3>
            <p className="text-gray-600">
              Join thousands of users managing their health digitally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {authCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Link key={index} to={card.route}>
                  <Card className={`h-full transition-all duration-200 cursor-pointer ${card.color}`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <IconComponent className={`w-8 h-8 ${card.iconColor}`} />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {card.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {card.description}
                      </p>
                      <Button className="w-full gradient-primary text-white">
                        {card.title}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-gray-600">Appointments Booked</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-gray-600">Verified Doctors</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Medical Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickNavigationSection;
