
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { 
  Calendar, 
  Clock, 
  User, 
  FileText, 
  Plus, 
  Video, 
  MapPin, 
  Heart,
  Stethoscope,
  TestTube,
  Users,
  BookOpen,
  Phone,
  Download,
  Eye,
  X,
  RotateCcw,
  Bot,
  Bell,
  Sun,
  Moon,
  ChevronRight,
  Activity,
  Droplets,
  ThermometerSun,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState('self');

  // Mock user data
  const userData = {
    name: "Nikhil",
    avatar: "/placeholder.svg",
    age: 28,
    bloodGroup: "B+",
    abhaId: "12-3456-7890-1234",
    lastVisit: "2025-06-10",
    healthScore: 85
  };

  // Mock family members
  const familyMembers = [
    { id: 'self', name: 'Nikhil', relation: 'Self' },
    { id: 'mom', name: 'Priya', relation: 'Mother' },
    { id: 'dad', name: 'Rajesh', relation: 'Father' },
    { id: 'grandpa', name: 'Ramesh', relation: 'Grandfather' }
  ];

  // Quick action cards data
  const quickActions = [
    { icon: Stethoscope, title: "Book Appointment", color: "bg-blue-500", href: "/find-doctors" },
    { icon: FileText, title: "My Health Reports", color: "bg-green-500", href: "/reports" },
    { icon: TestTube, title: "Home Test Booking", color: "bg-purple-500", href: "/tests" },
    { icon: Users, title: "Family Health", color: "bg-orange-500", href: "/family" },
    { icon: BookOpen, title: "Wellness Tips", color: "bg-teal-500", href: "/wellness" },
    { icon: Phone, title: "Emergency Call", color: "bg-red-500", href: "/emergency" }
  ];

  // Upcoming appointments
  const upcomingAppointments = [
    {
      id: 1,
      doctorName: "Dr. Sarah Wilson",
      specialty: "Cardiologist",
      date: "2025-06-15",
      time: "10:30 AM",
      status: "confirmed",
      location: "Max Hospital, Delhi"
    },
    {
      id: 2,
      doctorName: "Dr. Raj Patel",
      specialty: "General Physician",
      date: "2025-06-18",
      time: "2:00 PM",
      status: "pending",
      location: "Apollo Clinic, Mumbai"
    }
  ];

  // Health timeline data
  const healthTimeline = [
    {
      id: 1,
      type: "Lab Report",
      name: "Complete Blood Count",
      date: "2025-06-10",
      doctor: "Dr. Smith",
      status: "normal"
    },
    {
      id: 2,
      type: "Prescription",
      name: "Hypertension Medication",
      date: "2025-06-08",
      doctor: "Dr. Wilson",
      status: "active"
    },
    {
      id: 3,
      type: "Scan",
      name: "Chest X-Ray",
      date: "2025-06-05",
      doctor: "Dr. Kumar",
      status: "normal"
    }
  ];

  // Alerts and reminders
  const alerts = [
    {
      id: 1,
      type: "warning",
      message: "Your sugar test is due this week",
      priority: "high"
    },
    {
      id: 2,
      type: "info",
      message: "Grandpa's ECG is scheduled tomorrow",
      priority: "medium"
    },
    {
      id: 3,
      type: "error",
      message: "You missed your last appointment",
      priority: "high"
    }
  ];

  // AI suggestions
  const aiSuggestions = [
    "Stay hydrated. Today's weather may cause fatigue.",
    "Based on your symptoms, you might want to check Vitamin B12",
    "Your sleep pattern suggests you might benefit from a wellness check"
  ];

  // Wellness feed articles
  const wellnessArticles = [
    { title: "5 Minute Morning Meditation", category: "Mental Health" },
    { title: "Healthy Heart Foods", category: "Nutrition" },
    { title: "Home Remedies for Cold", category: "Natural Health" },
    { title: "Benefits of Walking", category: "Fitness" }
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header Section with Dark Mode Toggle */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <select 
              value={selectedFamily} 
              onChange={(e) => setSelectedFamily(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              {familyMembers.map(member => (
                <option key={member.id} value={member.id}>
                  {member.name} ({member.relation})
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <Sun className="w-4 h-4" />
            <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            <Moon className="w-4 h-4" />
          </div>
        </div>

        {/* User Overview Section */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback>{userData.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {getGreeting()}, {userData.name}! 👋
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                    <span>Age: {userData.age}</span>
                    <span>Blood Group: {userData.bloodGroup}</span>
                    <span>ABHA ID: {userData.abhaId}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Last visit: {new Date(userData.lastVisit).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{userData.healthScore}</div>
                <div className="text-sm text-gray-600">Health Score</div>
                <Progress value={userData.healthScore} className="w-20 mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Action Cards */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.href}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-medium text-sm">{action.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Bookings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Upcoming Appointments</span>
                  <Link to="/find-doctors">
                    <Button size="sm" className="gradient-primary text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Book New
                    </Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{appointment.doctorName}</h3>
                        <p className="text-sm text-gray-600">{appointment.specialty}</p>
                      </div>
                      <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                        {appointment.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(appointment.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{appointment.location}</span>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <RotateCcw className="w-4 h-4 mr-1" />
                          Reschedule
                        </Button>
                        <Button size="sm" variant="outline">
                          <X className="w-4 h-4 mr-1" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Health Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Health Timeline</CardTitle>
                <CardDescription>Recent reports and prescriptions</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64">
                  <div className="space-y-4">
                    {healthTimeline.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <p className="text-xs text-gray-600">{item.type} • Dr. {item.doctor}</p>
                            <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={item.status === 'normal' ? 'default' : 'secondary'}>
                            {item.status}
                          </Badge>
                          <Button size="sm" variant="ghost">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Alerts & Reminders */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Alerts & Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${
                    alert.type === 'error' ? 'border-red-500 bg-red-50' :
                    alert.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                    'border-blue-500 bg-blue-50'
                  }`}>
                    <div className="flex items-start">
                      <AlertTriangle className={`w-4 h-4 mt-0.5 mr-2 ${
                        alert.type === 'error' ? 'text-red-500' :
                        alert.type === 'warning' ? 'text-yellow-500' :
                        'text-blue-500'
                      }`} />
                      <p className="text-sm">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="w-5 h-5 mr-2" />
                  AI Health Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <p className="text-sm text-gray-700">{suggestion}</p>
                  </div>
                ))}
                <Separator />
                <div className="space-y-2">
                  <Button className="w-full" variant="outline">
                    <Bot className="w-4 h-4 mr-2" />
                    Chat with HealthBot
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Activity className="w-4 h-4 mr-2" />
                    Take Wellness Check
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Wellness Feed */}
            <Card>
              <CardHeader>
                <CardTitle>Wellness Feed</CardTitle>
                <CardDescription>Health tips and articles</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-48">
                  <div className="space-y-3">
                    {wellnessArticles.map((article, index) => (
                      <div key={index} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <h4 className="font-medium text-sm">{article.title}</h4>
                        <p className="text-xs text-gray-600">{article.category}</p>
                        <ChevronRight className="w-4 h-4 text-gray-400 float-right mt-1" />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Mini Calendar */}
            <Card>
              <CardHeader>
                <CardTitle>Health Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  <div className="font-semibold p-2">S</div>
                  <div className="font-semibold p-2">M</div>
                  <div className="font-semibold p-2">T</div>
                  <div className="font-semibold p-2">W</div>
                  <div className="font-semibold p-2">T</div>
                  <div className="font-semibold p-2">F</div>
                  <div className="font-semibold p-2">S</div>
                  {Array.from({ length: 30 }, (_, i) => (
                    <div key={i} className={`p-2 rounded ${
                      i === 14 ? 'bg-green-500 text-white' : // Appointment
                      i === 17 ? 'bg-blue-500 text-white' : // Test
                      i === 20 ? 'bg-red-500 text-white' : // Emergency
                      'hover:bg-gray-100'
                    }`}>
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Appointments</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span>Tests</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span>Emergency</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Daily Health Quote */}
        <Card className="mt-6">
          <CardContent className="p-6 text-center bg-gradient-to-r from-blue-50 to-purple-50">
            <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <blockquote className="text-lg font-medium text-gray-800 mb-2">
              "Health is not about the weight you lose, but about the life you gain."
            </blockquote>
            <p className="text-sm text-gray-600">Daily Health Inspiration</p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
