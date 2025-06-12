
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Clock, AlertTriangle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AmbulanceService = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    emergency: '',
    patientCondition: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmergencyCall = () => {
    // Direct emergency call
    window.open('tel:108', '_self');
  };

  const handleBookAmbulance = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate booking ambulance
    toast({
      title: "Ambulance Booked Successfully!",
      description: "Emergency services will reach you within 10-15 minutes. Stay calm and keep your phone nearby.",
    });
    
    setIsOpen(false);
    setFormData({
      name: '',
      phone: '',
      address: '',
      emergency: '',
      patientCondition: '',
    });
  };

  return (
    <>
      {/* Fixed Emergency Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-white rounded-full shadow-2xl animate-pulse h-16 w-16 p-0"
            >
              <div className="flex flex-col items-center">
                <AlertTriangle className="w-6 h-6" />
                <span className="text-xs mt-1">SOS</span>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="w-5 h-5" />
                24x7 Emergency Ambulance Service
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              {/* Emergency Call Button */}
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Immediate Emergency?</h3>
                <Button 
                  onClick={handleEmergencyCall}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold"
                  size="lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call 108 - Emergency Helpline
                </Button>
                <p className="text-xs text-red-600 mt-2 text-center">
                  For life-threatening emergencies, call immediately
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>GPS Tracking</span>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBookAmbulance} className="space-y-4 border-t pt-4">
                <h3 className="font-semibold">Book Ambulance Service</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Patient Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter patient name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your contact number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Pickup Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter complete address with landmarks"
                    required
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="emergency">Type of Emergency</Label>
                  <Input
                    id="emergency"
                    name="emergency"
                    value={formData.emergency}
                    onChange={handleInputChange}
                    placeholder="e.g., Heart attack, Accident, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="patientCondition">Patient Condition</Label>
                  <Textarea
                    id="patientCondition"
                    name="patientCondition"
                    value={formData.patientCondition}
                    onChange={handleInputChange}
                    placeholder="Brief description of patient's current condition"
                    rows={2}
                  />
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  Book Ambulance Service
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Our ambulance will reach you within 10-15 minutes
                </p>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default AmbulanceService;
