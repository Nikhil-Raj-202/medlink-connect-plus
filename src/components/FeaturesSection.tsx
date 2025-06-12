
import { Shield, Heart, Calendar, FileText, Users, Bot, Video, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'ABHA Integration',
    description: 'Secure login with your ABHA number. Access your complete health history from anywhere in India.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Users,
    title: 'Verified Doctors',
    description: 'Connect with HPR-registered doctors. View ratings, reviews, and specializations.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Calendar,
    title: 'Smart Booking',
    description: 'AI-powered doctor recommendations based on your symptoms and medical history.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: FileText,
    title: 'Digital Health Locker',
    description: 'Store prescriptions, lab reports, and medical records securely in your ABHA-linked locker.',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Video,
    title: 'Telemedicine',
    description: 'High-quality video consultations with secure sharing of your health records.',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Bot,
    title: 'AI Health Assistant',
    description: 'Get instant symptom pre-screening and health insights powered by AI.',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    icon: Heart,
    title: 'Emergency Access',
    description: 'Quick access to vital health information during emergencies with OTP verification.',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Access your healthcare on-the-go with our responsive web platform.',
    color: 'bg-teal-100 text-teal-600'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Healthcare at Your Fingertips
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of healthcare with ABHA-integrated features designed for 
            seamless doctor-patient connectivity and secure health data management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${feature.color} flex items-center justify-center mb-3 sm:mb-4`}>
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* ABHA Highlight Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 sm:p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Powered by Ayushman Bharat Digital Mission
              </h3>
              <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base">
                MedLink+ is built on ABDM standards, ensuring your health data is interoperable, 
                secure, and accessible across all healthcare providers in India.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm sm:text-base">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>FHIR-compliant data exchange</span>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>Patient consent management</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100 text-sm sm:text-base">ABDM Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
