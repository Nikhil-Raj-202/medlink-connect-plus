
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MapPin, Phone, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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

interface OpenStreetMapProps {
  doctors: Doctor[];
  onDoctorSelect: (doctor: Doctor) => void;
}

const OpenStreetMap: React.FC<OpenStreetMapProps> = ({ doctors, onDoctorSelect }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<L.Map | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Custom icons for different doctor types
  const createDoctorIcon = (specialization: string) => {
    const color = getDoctorColor(specialization);
    return L.divIcon({
      html: `
        <div style="
          background-color: ${color};
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 3px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
          </svg>
        </div>
      `,
      className: 'custom-doctor-icon',
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
  };

  const getDoctorColor = (specialization: string) => {
    const colors: { [key: string]: string } = {
      'Cardiologist': '#ef4444',
      'Pediatrician': '#3b82f6',
      'Dermatologist': '#10b981',
      'Orthopedic': '#f59e0b',
      'Gynecologist': '#8b5cf6',
      'default': '#6b7280'
    };
    return colors[specialization] || colors.default;
  };

  const createUserIcon = () => {
    return L.divIcon({
      html: `
        <div style="
          background-color: #3b82f6;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        "></div>
      `,
      className: 'user-location-icon',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
  };

  useEffect(() => {
    // Get user location or default to Patna, Bihar
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          // Default to Patna, Bihar
          setUserLocation({ lat: 25.5941, lng: 85.1376 });
        }
      );
    } else {
      setUserLocation({ lat: 25.5941, lng: 85.1376 });
    }
  }, []);

  useEffect(() => {
    if (mapRef.current && userLocation) {
      // Initialize the map
      const mapInstance = L.map(mapRef.current).setView([userLocation.lat, userLocation.lng], 12);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(mapInstance);

      setMap(mapInstance);

      // Add user location marker
      L.marker([userLocation.lat, userLocation.lng], { icon: createUserIcon() })
        .addTo(mapInstance)
        .bindPopup('<b>Your Location</b>')
        .openPopup();

      // Add doctor markers
      doctors.forEach((doctor) => {
        const marker = L.marker([doctor.location.lat, doctor.location.lng], {
          icon: createDoctorIcon(doctor.specialization)
        }).addTo(mapInstance);

        const popupContent = `
          <div style="min-width: 200px; padding: 8px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; font-size: 16px;">${doctor.name}</h3>
            <p style="margin: 0 0 4px 0; color: #666; font-size: 14px;">${doctor.specialization}</p>
            <div style="display: flex; align-items: center; margin: 4px 0;">
              <span style="color: #fbbf24;">★</span>
              <span style="margin-left: 4px; font-size: 14px;">${doctor.rating}</span>
              <span style="margin-left: 8px; color: #666; font-size: 14px;">${doctor.experience}</span>
            </div>
            <p style="margin: 4px 0; font-size: 14px;">${doctor.address}</p>
            <p style="margin: 4px 0; font-weight: bold; color: #059669;">${doctor.consultationFee}</p>
            <button 
              onclick="window.selectDoctor(${doctor.id})" 
              style="
                background-color: #3b82f6;
                color: white;
                border: none;
                padding: 6px 12px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                margin-top: 8px;
              "
            >
              View Profile
            </button>
          </div>
        `;

        marker.bindPopup(popupContent);
      });

      // Global function for popup button
      (window as any).selectDoctor = (doctorId: number) => {
        const doctor = doctors.find(d => d.id === doctorId);
        if (doctor) {
          onDoctorSelect(doctor);
        }
      };

      // Cleanup function
      return () => {
        mapInstance.remove();
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

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default OpenStreetMap;
