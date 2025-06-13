
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { User, Bell, Shield, Users, Heart, Save, Plus, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { toast } = useToast();
  
  // Mock user data
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+91 9876543210',
    dateOfBirth: '1990-05-15',
    bloodGroup: 'O+',
    emergencyContact: '+91 9876543211'
  });

  const [notifications, setNotifications] = useState({
    appointmentReminders: true,
    healthReports: true,
    medicationAlerts: false,
    promotionalEmails: false,
    smsNotifications: true
  });

  const [abhaLinked, setAbhaLinked] = useState(false);
  const [abhaId, setAbhaId] = useState('');

  const [familyMembers, setFamilyMembers] = useState([
    { id: 1, name: 'Jane Doe', relation: 'Spouse', phone: '+91 9876543212' },
    { id: 2, name: 'Mike Doe', relation: 'Son', phone: '+91 9876543213' }
  ]);

  const handleProfileSave = () => {
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleNotificationSave = () => {
    toast({
      title: "Notification preferences updated",
      description: "Your notification settings have been saved.",
    });
  };

  const handleAbhaLink = () => {
    if (abhaId.trim()) {
      setAbhaLinked(true);
      toast({
        title: "ABHA ID linked",
        description: "Your ABHA ID has been successfully linked to your account.",
      });
    }
  };

  const handleAbhaUnlink = () => {
    setAbhaLinked(false);
    setAbhaId('');
    toast({
      title: "ABHA ID unlinked",
      description: "Your ABHA ID has been unlinked from your account.",
    });
  };

  const addFamilyMember = () => {
    const newMember = {
      id: Date.now(),
      name: '',
      relation: '',
      phone: ''
    };
    setFamilyMembers([...familyMembers, newMember]);
  };

  const removeFamilyMember = (id: number) => {
    setFamilyMembers(familyMembers.filter(member => member.id !== id));
    toast({
      title: "Family member removed",
      description: "Family member has been removed from your account.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 gradient-healthcare rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-600">Manage your account and preferences</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-primary" />
                <CardTitle>Profile Information</CardTitle>
              </div>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    type="date"
                    value={profile.dateOfBirth}
                    onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="bloodGroup">Blood Group</Label>
                  <Input
                    id="bloodGroup"
                    value={profile.bloodGroup}
                    onChange={(e) => setProfile({...profile, bloodGroup: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="emergency">Emergency Contact</Label>
                  <Input
                    id="emergency"
                    value={profile.emergencyContact}
                    onChange={(e) => setProfile({...profile, emergencyContact: e.target.value})}
                  />
                </div>
              </div>
              <Button onClick={handleProfileSave} className="gradient-primary text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Profile
              </Button>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-primary" />
                <CardTitle>Notification Preferences</CardTitle>
              </div>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Appointment Reminders</Label>
                    <p className="text-sm text-gray-600">Get notified about upcoming appointments</p>
                  </div>
                  <Switch
                    checked={notifications.appointmentReminders}
                    onCheckedChange={(checked) => setNotifications({...notifications, appointmentReminders: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Health Reports</Label>
                    <p className="text-sm text-gray-600">Notifications when new reports are available</p>
                  </div>
                  <Switch
                    checked={notifications.healthReports}
                    onCheckedChange={(checked) => setNotifications({...notifications, healthReports: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Medication Alerts</Label>
                    <p className="text-sm text-gray-600">Reminders for medication schedules</p>
                  </div>
                  <Switch
                    checked={notifications.medicationAlerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, medicationAlerts: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Promotional Emails</Label>
                    <p className="text-sm text-gray-600">Updates about new features and offers</p>
                  </div>
                  <Switch
                    checked={notifications.promotionalEmails}
                    onCheckedChange={(checked) => setNotifications({...notifications, promotionalEmails: checked})}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-gray-600">Receive notifications via SMS</p>
                  </div>
                  <Switch
                    checked={notifications.smsNotifications}
                    onCheckedChange={(checked) => setNotifications({...notifications, smsNotifications: checked})}
                  />
                </div>
              </div>
              <Button onClick={handleNotificationSave} className="gradient-primary text-white">
                <Save className="w-4 h-4 mr-2" />
                Save Preferences
              </Button>
            </CardContent>
          </Card>

          {/* ABHA Integration */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <CardTitle>ABHA Integration</CardTitle>
              </div>
              <CardDescription>Link your Ayushman Bharat Health Account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {abhaLinked ? (
                <div className="flex items-center justify-between p-4 border border-green-200 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">ABHA ID Linked</p>
                      <p className="text-sm text-green-700">Your health records are synced</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Connected
                  </Badge>
                </div>
              ) : (
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="abha">ABHA ID</Label>
                      <Input
                        id="abha"
                        placeholder="Enter your 14-digit ABHA ID"
                        value={abhaId}
                        onChange={(e) => setAbhaId(e.target.value)}
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      Linking your ABHA ID will allow you to access your health records across all healthcare providers.
                    </p>
                  </div>
                </div>
              )}
              <div className="flex space-x-4">
                {abhaLinked ? (
                  <Button variant="destructive" onClick={handleAbhaUnlink}>
                    Unlink ABHA ID
                  </Button>
                ) : (
                  <Button onClick={handleAbhaLink} className="gradient-primary text-white">
                    Link ABHA ID
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Family Accounts */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <CardTitle>Family Accounts</CardTitle>
                    <CardDescription>Manage healthcare for your family members</CardDescription>
                  </div>
                </div>
                <Button onClick={addFamilyMember} size="sm" className="gradient-primary text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Member
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {familyMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                    <Input
                      placeholder="Name"
                      value={member.name}
                      onChange={(e) => {
                        setFamilyMembers(familyMembers.map(m => 
                          m.id === member.id ? {...m, name: e.target.value} : m
                        ));
                      }}
                    />
                    <Input
                      placeholder="Relation"
                      value={member.relation}
                      onChange={(e) => {
                        setFamilyMembers(familyMembers.map(m => 
                          m.id === member.id ? {...m, relation: e.target.value} : m
                        ));
                      }}
                    />
                    <Input
                      placeholder="Phone Number"
                      value={member.phone}
                      onChange={(e) => {
                        setFamilyMembers(familyMembers.map(m => 
                          m.id === member.id ? {...m, phone: e.target.value} : m
                        ));
                      }}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFamilyMember(member.id)}
                    className="ml-4 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              {familyMembers.length === 0 && (
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">No family members added yet</p>
                  <Button onClick={addFamilyMember} className="gradient-primary text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Your First Family Member
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Settings;
