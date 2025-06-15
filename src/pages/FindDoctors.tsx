import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OpenStreetMap from '@/components/OpenStreetMap';
import { Button } from '@/components/ui/button';
import { Search, Filter, MapPin, List } from 'lucide-react';
import AmbulanceService from '@/components/AmbulanceService';

// Sample doctor data with locations in Patna and nearby areas
const sampleDoctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Cardiologist",
    rating: 4.9,
    experience: "15 years",
    location: {
      lat: 25.5941,
      lng: 85.1376,
    },
    address: "Boring Road, Patna",
    phone: "+91 98765 43210",
    availability: "Mon-Fri 9AM-6PM",
    consultationFee: "₹800",
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialization: "Pediatrician",
    rating: 4.8,
    experience: "12 years",
    location: {
      lat: 25.6093,
      lng: 85.1547,
    },
    address: "Kankarbagh, Patna",
    phone: "+91 98765 43211",
    availability: "Mon-Sat 10AM-7PM",
    consultationFee: "₹600",
  },
  {
    id: 3,
    name: "Dr. Anitha Reddy",
    specialization: "Dermatologist",
    rating: 4.9,
    experience: "10 years",
    location: {
      lat: 25.6138,
      lng: 85.1194,
    },
    address: "Patna City, Patna",
    phone: "+91 98765 43212",
    availability: "Tue-Sun 11AM-8PM",
    consultationFee: "₹700",
  },
  {
    id: 4,
    name: "Dr. Sunil Mehta",
    specialization: "Orthopedic",
    rating: 4.7,
    experience: "18 years",
    location: {
      lat: 25.5788,
      lng: 85.1658,
    },
    address: "Rajendra Nagar, Patna",
    phone: "+91 98765 43213",
    availability: "Mon-Fri 8AM-5PM",
    consultationFee: "₹900",
  },
  {
    id: 5,
    name: "Dr. Kavya Nair",
    specialization: "Gynecologist",
    rating: 4.8,
    experience: "14 years",
    location: {
      lat: 25.6121,
      lng: 85.1025,
    },
    address: "Fraser Road, Patna",
    phone: "+91 98765 43214",
    availability: "Mon-Sat 9AM-6PM",
    consultationFee: "₹750",
  }
];

const FindDoctors = () => {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(sampleDoctors);

  const specializations = [
    'All Specializations',
    'Cardiologist',
    'Pediatrician',
    'Dermatologist',
    'Orthopedic',
    'Gynecologist'
  ];

  const handleSearch = () => {
    let filtered = sampleDoctors;

    if (searchQuery) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedSpecialization && selectedSpecialization !== 'All Specializations') {
      filtered = filtered.filter(doctor =>
        doctor.specialization === selectedSpecialization
      );
    }

    setFilteredDoctors(filtered);
  };

  const handleDoctorSelect = (doctor: any) => {
    console.log('Selected doctor:', doctor);
    // Here you can implement navigation to booking page or show more details
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Find Doctors Near You</h1>
          <p className="text-gray-600">Discover verified doctors in your area using our interactive map powered by OpenStreetMap</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 sm:p-6 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search doctors, specializations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>
            <div>
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
            <div>
              <Button onClick={handleSearch} className="w-full gradient-primary text-white">
                <Filter className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Found {filteredDoctors.length} doctors</span>
          </div>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'map'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <MapPin className="w-4 h-4 mr-1 inline" />
              Map View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'list'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <List className="w-4 h-4 mr-1 inline" />
              List View
            </button>
          </div>
        </div>

        {/* Content Area */}
        {viewMode === 'map' ? (
          <OpenStreetMap doctors={filteredDoctors} onDoctorSelect={handleDoctorSelect} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-lg">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{doctor.name}</h3>
                    <p className="text-primary font-medium">{doctor.specialization}</p>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {doctor.address}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-lg font-bold text-gray-900">{doctor.consultationFee}</span>
                      <span className="text-sm text-gray-600">Rating: {doctor.rating}/5</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4 gradient-primary text-white" onClick={() => handleDoctorSelect(doctor)}>
                  Book Appointment
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      <AmbulanceService />
      <Footer />
    </div>
  );
};

export default FindDoctors;
