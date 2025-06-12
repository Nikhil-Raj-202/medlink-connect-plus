
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  rating: number;
  experience: string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
  phone: string;
  availability: string;
  consultationFee: string;
}

interface DoctorMapProps {
  doctors: Doctor[];
  onDoctorSelect: (doctor: Doctor) => void;
}

const DoctorMap: React.FC<DoctorMapProps> = ({ doctors, onDoctorSelect }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          // Default to Mumbai if geolocation fails
          setUserLocation({ lat: 19.0760, lng: 72.8777 });
        }
      );
    } else {
      setUserLocation({ lat: 19.0760, lng: 72.8777 });
    }
  }, []);

  useEffect(() => {
    if (mapRef.current && userLocation && window.google) {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: userLocation,
        zoom: 12,
        styles: [
          {
            featureType: 'poi.medical',
            elementType: 'geometry',
            stylers: [{ color: '#ffeaa7' }],
          },
        ],
      });

      setMap(mapInstance);

      // Add user location marker
      new window.google.maps.Marker({
        position: userLocation,
        map: mapInstance,
        title: 'Your Location',
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8" fill="#3b82f6"/>
              <circle cx="12" cy="12" r="3" fill="white"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(24, 24),
        },
      });

      // Add doctor markers
      doctors.forEach((doctor) => {
        const marker = new window.google.maps.Marker({
          position: doctor.location,
          map: mapInstance,
          title: doctor.name,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#10b981"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(32, 32),
          },
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-3 max-w-sm">
              <h3 class="font-semibold text-lg">${doctor.name}</h3>
              <p class="text-sm text-gray-600">${doctor.specialization}</p>
              <div class="flex items-center mt-1">
                <span class="text-yellow-500">★</span>
                <span class="ml-1 text-sm">${doctor.rating}</span>
                <span class="ml-2 text-sm text-gray-500">${doctor.experience}</span>
              </div>
              <p class="text-sm mt-1">${doctor.address}</p>
              <div class="mt-2">
                <button onclick="window.selectDoctor(${doctor.id})" class="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                  View Profile
                </button>
              </div>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(mapInstance, marker);
        });
      });

      // Global function for info window button
      (window as any).selectDoctor = (doctorId: number) => {
        const doctor = doctors.find(d => d.id === doctorId);
        if (doctor) {
          onDoctorSelect(doctor);
        }
      };
    }
  }, [userLocation, doctors, onDoctorSelect]);

  if (!userLocation) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-96 rounded-lg" />;
};

export default DoctorMap;
