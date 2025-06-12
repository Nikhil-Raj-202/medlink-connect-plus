
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  rating: number;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  consultationFee: number;
  image: string;
}

interface DoctorMapProps {
  doctors: Doctor[];
  onDoctorSelect?: (doctor: Doctor) => void;
}

const DoctorMap: React.FC<DoctorMapProps> = ({ doctors, onDoctorSelect }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [apiKey, setApiKey] = useState<string>('');

  // Get user's current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          // Default to Mumbai if location access is denied
          setUserLocation({ lat: 19.0760, lng: 72.8777 });
        }
      );
    } else {
      // Default to Mumbai if geolocation is not supported
      setUserLocation({ lat: 19.0760, lng: 72.8777 });
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (!mapRef.current || !userLocation || !apiKey) return;

    // Initialize the map
    const map = new google.maps.Map(mapRef.current, {
      center: userLocation,
      zoom: 13,
      styles: [
        {
          featureType: 'poi.medical',
          elementType: 'geometry',
          stylers: [{ color: '#e3f2fd' }]
        }
      ]
    });

    mapInstanceRef.current = map;

    // Add user location marker
    new google.maps.Marker({
      position: userLocation,
      map: map,
      title: 'Your Location',
      icon: {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
            <circle cx="12" cy="12" r="3" fill="#ffffff"/>
          </svg>
        `),
        scaledSize: new google.maps.Size(24, 24),
        anchor: new google.maps.Point(12, 12)
      }
    });

    // Add doctor markers
    doctors.forEach((doctor) => {
      const marker = new google.maps.Marker({
        position: doctor.location,
        map: map,
        title: doctor.name,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z" fill="#10b981" stroke="#ffffff" stroke-width="1"/>
            </svg>
          `),
          scaledSize: new google.maps.Size(32, 32),
          anchor: new google.maps.Point(16, 16)
        }
      });

      // Create info window for each doctor
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div class="p-3 max-w-xs">
            <div class="flex items-center space-x-3">
              <img src="${doctor.image}" alt="${doctor.name}" class="w-12 h-12 rounded-full object-cover">
              <div>
                <h3 class="font-semibold text-gray-900">${doctor.name}</h3>
                <p class="text-sm text-blue-600">${doctor.specialization}</p>
                <p class="text-xs text-gray-600">Rating: ${doctor.rating}/5</p>
                <p class="text-sm font-medium text-gray-900">₹${doctor.consultationFee}</p>
              </div>
            </div>
            <button 
              onclick="window.selectDoctor('${doctor.id}')"
              class="mt-3 w-full bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        `
      });

      marker.addListener('click', () => {
        setSelectedDoctor(doctor);
        infoWindow.open(map, marker);
      });
    });

    // Global function to handle doctor selection from info window
    (window as any).selectDoctor = (doctorId: string) => {
      const doctor = doctors.find(d => d.id === doctorId);
      if (doctor && onDoctorSelect) {
        onDoctorSelect(doctor);
      }
    };

  }, [userLocation, doctors, onDoctorSelect, apiKey]);

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      // Load Google Maps script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  };

  if (!apiKey) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6">
        <div className="text-center space-y-4">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-900">Google Maps Integration</h3>
          <p className="text-gray-600">Enter your Google Maps API key to find doctors near you</p>
          <form onSubmit={handleApiKeySubmit} className="space-y-3">
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter Google Maps API Key"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              required
            />
            <Button type="submit" className="w-full gradient-primary text-white">
              Load Map
            </Button>
          </form>
          <p className="text-xs text-gray-500">
            Get your API key from <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Cloud Console</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Doctors Near You</h3>
        <Button
          onClick={getCurrentLocation}
          variant="outline"
          size="sm"
          className="flex items-center space-x-2"
        >
          <Navigation className="w-4 h-4" />
          <span>My Location</span>
        </Button>
      </div>
      <div ref={mapRef} className="w-full h-96" />
      {selectedDoctor && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-3">
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{selectedDoctor.name}</h4>
              <p className="text-sm text-primary">{selectedDoctor.specialization}</p>
              <p className="text-xs text-gray-600">{selectedDoctor.location.address}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">₹{selectedDoctor.consultationFee}</p>
              <p className="text-xs text-gray-600">Rating: {selectedDoctor.rating}/5</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorMap;
