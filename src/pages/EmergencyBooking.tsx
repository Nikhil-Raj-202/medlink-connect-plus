
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Ambulance, MapPin, Clock, AlertTriangle, Heart } from 'lucide-react';

const EmergencyBooking = () => {
  const handleEmergencyCall = () => {
    console.log('Calling emergency services...');
    // In a real app, this would initiate an emergency call
  };

  const handleAmbulanceRequest = () => {
    console.log('Requesting ambulance...');
    // In a real app, this would request an ambulance
  };

  return (
    <div className="min-h-screen bg-red-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h1 className="text-3xl font-bold text-red-900">Emergency Services</h1>
          </div>
          <p className="text-red-700">Get immediate medical assistance when you need it most</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Emergency Call */}
          <Card className="border-red-200 bg-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-red-900">Emergency Call</CardTitle>
              <CardDescription>Connect instantly with emergency medical services</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
                onClick={handleEmergencyCall}
              >
                <Phone className="w-6 h-6 mr-2" />
                Call 108 - Emergency
              </Button>
            </CardContent>
          </Card>

          {/* Ambulance Request */}
          <Card className="border-red-200 bg-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ambulance className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-red-900">Request Ambulance</CardTitle>
              <CardDescription>Book an ambulance for immediate transport</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                size="lg" 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6"
                onClick={handleAmbulanceRequest}
              >
                <Ambulance className="w-6 h-6 mr-2" />
                Request Ambulance
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-600" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-900">Medical Emergency</h3>
                <p className="text-2xl font-bold text-red-600">108</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900">Police</h3>
                <p className="text-2xl font-bold text-blue-600">100</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-900">Fire</h3>
                <p className="text-2xl font-bold text-orange-600">101</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Location */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              Your Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Detecting current location for faster emergency response...</span>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Note:</strong> Your location will be automatically shared with emergency services 
                to ensure the fastest possible response time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default EmergencyBooking;
