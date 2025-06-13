
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Shield, Phone, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Login = () => {
  const [abhaId, setAbhaId] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSendOtp = () => {
    console.log('Sending OTP to ABHA ID:', abhaId);
    setIsOtpSent(true);
  };

  const handleAbhaLogin = () => {
    console.log('Logging in with ABHA ID:', abhaId, 'OTP:', otp);
    // Handle ABHA login logic here
  };

  const handleEmailLogin = () => {
    console.log('Logging in with email:', email);
    // Handle email login logic here
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
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to access your healthcare dashboard</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Choose your preferred login method</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="abha" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="abha" className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>ABHA ID</span>
                  </TabsTrigger>
                  <TabsTrigger value="email" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Email</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="abha" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="abha">ABHA ID</Label>
                    <Input
                      id="abha"
                      type="text"
                      placeholder="Enter your 14-digit ABHA ID"
                      value={abhaId}
                      onChange={(e) => setAbhaId(e.target.value)}
                      maxLength={14}
                    />
                  </div>

                  {!isOtpSent ? (
                    <Button onClick={handleSendOtp} className="w-full gradient-primary text-white" disabled={!abhaId}>
                      <Phone className="w-4 h-4 mr-2" />
                      Send OTP
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="otp">Enter OTP</Label>
                        <Input
                          id="otp"
                          type="text"
                          placeholder="6-digit OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          maxLength={6}
                        />
                      </div>
                      <Button onClick={handleAbhaLogin} className="w-full gradient-primary text-white" disabled={!otp}>
                        Sign In with ABHA
                      </Button>
                      <Button variant="outline" onClick={() => setIsOtpSent(false)} className="w-full">
                        Resend OTP
                      </Button>
                    </div>
                  )}

                  <div className="text-xs text-gray-600 bg-blue-50 p-3 rounded-lg">
                    <Shield className="w-4 h-4 inline mr-1" />
                    Secure login powered by Ayushman Bharat Digital Mission
                  </div>
                </TabsContent>

                <TabsContent value="email" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button onClick={handleEmailLogin} className="w-full gradient-primary text-white">
                    Sign In
                  </Button>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-primary hover:underline font-medium">
                    Sign up here
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

export default Login;
