
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Heart, Shield, ChevronRight, ChevronLeft, User, Phone, Mail, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    password: '',
    confirmPassword: '',
    abhaId: '',
    linkAbha: false,
    acceptTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    console.log('Creating account with data:', formData);
    // Handle account creation logic here
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Create a password"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder="Confirm your password"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-blue-900 mb-2">Link ABHA ID (Optional)</h3>
                  <p className="text-sm text-blue-700 mb-4">
                    Connect your ABHA ID to access your complete health records across India's healthcare ecosystem.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="linkAbha"
                      checked={formData.linkAbha}
                      onCheckedChange={(checked) => handleInputChange('linkAbha', checked as boolean)}
                    />
                    <Label htmlFor="linkAbha" className="text-sm text-blue-900">
                      I want to link my ABHA ID
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            {formData.linkAbha && (
              <div className="space-y-2">
                <Label htmlFor="abhaId">ABHA ID</Label>
                <Input
                  id="abhaId"
                  value={formData.abhaId}
                  onChange={(e) => handleInputChange('abhaId', e.target.value)}
                  placeholder="Enter your 14-digit ABHA ID"
                  maxLength={14}
                />
              </div>
            )}

            <div className="flex items-start space-x-2">
              <Checkbox
                id="acceptTerms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => handleInputChange('acceptTerms', checked as boolean)}
              />
              <Label htmlFor="acceptTerms" className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </Label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return 'Personal Information';
      case 2: return 'Account Details';
      case 3: return 'ABHA Integration';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-healthcare rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">MedLink+</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Join India's smartest healthcare platform</p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{getStepTitle()}</CardTitle>
                  <CardDescription>Step {step} of 3</CardDescription>
                </div>
                <Badge variant="outline">{step}/3</Badge>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="gradient-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </CardHeader>
            <CardContent>
              {renderStep()}

              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <Button variant="outline" onClick={handlePrevious}>
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                )}
                
                <div className="ml-auto">
                  {step < 3 ? (
                    <Button onClick={handleNext} className="gradient-primary text-white">
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleSubmit} 
                      className="gradient-primary text-white"
                      disabled={!formData.acceptTerms}
                    >
                      Create Account
                    </Button>
                  )}
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
