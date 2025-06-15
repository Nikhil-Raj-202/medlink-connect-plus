
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, User, Stethoscope, CheckCircle, AlertCircle, Filter } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const [selectedHospital, setSelectedHospital] = useState<string>('');
  const { toast } = useToast();

  // Mock data for available slots and doctors
  const timeSlots = [
    { time: '9:00 AM', available: true, load: 'low' },
    { time: '9:30 AM', available: false, load: 'high' },
    { time: '10:00 AM', available: true, load: 'medium' },
    { time: '10:30 AM', available: true, load: 'low' },
    { time: '11:00 AM', available: false, load: 'high' },
    { time: '11:30 AM', available: true, load: 'medium' },
    { time: '2:00 PM', available: true, load: 'low' },
    { time: '2:30 PM', available: true, load: 'low' },
    { time: '3:00 PM', available: false, load: 'high' },
    { time: '3:30 PM', available: true, load: 'medium' },
    { time: '4:00 PM', available: true, load: 'low' },
    { time: '4:30 PM', available: true, load: 'medium' }
  ];

  const doctors = [
    { id: '1', name: 'Dr. Sarah Johnson', specialty: 'Cardiology', hospital: 'City Hospital' },
    { id: '2', name: 'Dr. Michael Chen', specialty: 'General Medicine', hospital: 'Central Clinic' },
    { id: '3', name: 'Dr. Emily Davis', specialty: 'Dermatology', hospital: 'Skin Care Center' },
    { id: '4', name: 'Dr. Robert Wilson', specialty: 'Orthopedics', hospital: 'Bone & Joint Clinic' }
  ];

  const specialties = [
    'General Medicine', 'Cardiology', 'Dermatology', 
    'Orthopedics', 'Gynecology', 'Pediatrics'
  ];

  const hospitals = [
    'City Hospital', 'Central Clinic', 'Skin Care Center', 
    'Bone & Joint Clinic', 'Metro Medical Center'
  ];

  const getDayLoad = (date: Date) => {
    // Mock logic to determine day load
    const dayOfMonth = date.getDate();
    if (dayOfMonth % 3 === 0) return 'high';
    if (dayOfMonth % 2 === 0) return 'medium';
    return 'low';
  };

  const getDayLoadColor = (load: string) => {
    switch (load) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return '';
    }
  };

  const getSlotLoadColor = (load: string) => {
    switch (load) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-yellow-200 bg-yellow-50';
      case 'low': return 'border-green-200 bg-green-50';
      default: return '';
    }
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || (!selectedDoctor && !selectedSpecialty)) {
      toast({
        title: "Incomplete Selection",
        description: "Please select date, time, and doctor/specialty.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Appointment Booked Successfully!",
      description: `Your appointment is confirmed for ${selectedDate.toDateString()} at ${selectedTime}`,
    });

    // Reset form
    setSelectedTime('');
    setSelectedDoctor('');
  };

  const filteredDoctors = doctors.filter(doctor => 
    (!selectedSpecialty || doctor.specialty === selectedSpecialty) &&
    (!selectedHospital || doctor.hospital === selectedHospital)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Appointment</h1>
          <p className="text-gray-600">Schedule your consultation with our verified doctors</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Filters Section */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-primary" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Specialty</label>
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Specialties</SelectItem>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Hospital</label>
                  <Select value={selectedHospital} onValueChange={setSelectedHospital}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select hospital" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Hospitals</SelectItem>
                      {hospitals.map((hospital) => (
                        <SelectItem key={hospital} value={hospital}>{hospital}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Doctor</label>
                  <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any Available Doctor</SelectItem>
                      {filteredDoctors.map((doctor) => (
                        <SelectItem key={doctor.id} value={doctor.id}>
                          {doctor.name} - {doctor.specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Legend */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Availability Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
                  <span className="text-sm">Low traffic (Available)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-100 border border-yellow-200 rounded"></div>
                  <span className="text-sm">Medium traffic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
                  <span className="text-sm">High traffic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded opacity-50"></div>
                  <span className="text-sm">Unavailable</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calendar and Booking Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calendar Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Select Date
                </CardTitle>
                <CardDescription>Choose your preferred appointment date</CardDescription>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border w-full"
                  modifiers={{
                    high: (date) => getDayLoad(date) === 'high',
                    medium: (date) => getDayLoad(date) === 'medium',
                    low: (date) => getDayLoad(date) === 'low'
                  }}
                  modifiersStyles={{
                    high: { backgroundColor: '#fee2e2', color: '#991b1b' },
                    medium: { backgroundColor: '#fef3c7', color: '#92400e' },
                    low: { backgroundColor: '#dcfce7', color: '#166534' }
                  }}
                />
                
                {selectedDate && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Selected: {selectedDate.toDateString()}</span>
                      <Badge className={getDayLoadColor(getDayLoad(selectedDate))}>
                        {getDayLoad(selectedDate)} traffic
                      </Badge>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Time Slots */}
            {selectedDate && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Available Time Slots
                  </CardTitle>
                  <CardDescription>
                    Select your preferred time slot for {selectedDate.toDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot.time}
                        variant={selectedTime === slot.time ? "default" : "outline"}
                        size="sm"
                        className={`relative ${!slot.available ? 'opacity-50 cursor-not-allowed' : getSlotLoadColor(slot.load)}`}
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                        disabled={!slot.available}
                      >
                        {slot.time}
                        {!slot.available && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-0.5 bg-red-500 rotate-12"></div>
                          </div>
                        )}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Booking Summary */}
            {selectedDate && selectedTime && (selectedDoctor || selectedSpecialty) && (
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Booking Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-gray-600" />
                        <span>{selectedDate.toDateString()}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span>{selectedTime}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {selectedDoctor && (
                        <div className="flex items-center gap-3">
                          <User className="w-4 h-4 text-gray-600" />
                          <span>{doctors.find(d => d.id === selectedDoctor)?.name}</span>
                        </div>
                      )}
                      {selectedSpecialty && (
                        <div className="flex items-center gap-3">
                          <Stethoscope className="w-4 h-4 text-gray-600" />
                          <span>{selectedSpecialty}</span>
                        </div>
                      )}
                      {selectedHospital && (
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-gray-600" />
                          <span>{selectedHospital}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button 
                      className="flex-1 gradient-primary text-white"
                      onClick={handleBooking}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Confirm Booking
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Add to Google Calendar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookAppointment;
