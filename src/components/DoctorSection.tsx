
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, Video, Calendar } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Priya Sharma",
    specialization: "Cardiologist",
    experience: "15 years",
    rating: 4.9,
    reviews: 1250,
    location: "Mumbai, Maharashtra",
    nextAvailable: "Today, 2:00 PM",
    consultationFee: 800,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    verified: true,
    languages: ["Hindi", "English", "Marathi"]
  },
  {
    name: "Dr. Rajesh Kumar",
    specialization: "Pediatrician",
    experience: "12 years",
    rating: 4.8,
    reviews: 950,
    location: "Delhi, NCR",
    nextAvailable: "Tomorrow, 10:00 AM",
    consultationFee: 600,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    verified: true,
    languages: ["Hindi", "English"]
  },
  {
    name: "Dr. Anitha Reddy",
    specialization: "Dermatologist",
    experience: "10 years",
    rating: 4.9,
    reviews: 800,
    location: "Bangalore, Karnataka",
    nextAvailable: "Today, 4:30 PM",
    consultationFee: 700,
    image: "https://images.unsplash.com/photo-1594824505341-ec2d83c50b38?w=400&h=400&fit=crop&crop=face",
    verified: true,
    languages: ["Telugu", "English", "Kannada"]
  }
];

const DoctorSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Verified Doctors
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with top-rated, HPR-registered doctors across India. 
            All verified through ABDM standards for your safety and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Doctor Header */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                    />
                    {doctor.verified && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{doctor.name}</h3>
                    <p className="text-primary font-medium text-sm sm:text-base">{doctor.specialization}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{doctor.experience} experience</p>
                  </div>
                </div>

                {/* Rating and Reviews */}
                <div className="flex flex-col sm:flex-row sm:items-center mt-3 sm:mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-900 text-sm">{doctor.rating}</span>
                    <span className="text-gray-600 text-xs sm:text-sm">({doctor.reviews})</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{doctor.location}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="mt-3">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {doctor.languages.map((lang, langIndex) => (
                      <span key={langIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center text-green-700 text-xs sm:text-sm">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                    <span className="font-medium">Next available: {doctor.nextAvailable}</span>
                  </div>
                </div>

                {/* Consultation Fee */}
                <div className="mt-3 sm:mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs sm:text-sm text-gray-600">Consultation Fee</span>
                    <div className="text-base sm:text-lg font-bold text-gray-900">₹{doctor.consultationFee}</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-gray-100 p-3 sm:p-4 space-y-2">
                <Button className="w-full gradient-primary text-white text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
                <Button variant="outline" className="w-full text-sm">
                  <Video className="w-4 h-4 mr-2" />
                  Video Consultation
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Doctors Button */}
        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
