
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, FileText, Plus, Video, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  // Mock data - in real app this would come from API
  const upcomingAppointments = [
    {
      id: 1,
      doctorName: "Dr. Sarah Wilson",
      specialty: "Cardiologist",
      date: "2025-06-15",
      time: "10:30 AM",
      type: "Video Consultation",
      status: "confirmed",
      location: "Online"
    },
    {
      id: 2,
      doctorName: "Dr. Raj Patel",
      specialty: "General Physician",
      date: "2025-06-18",
      time: "2:00 PM",
      type: "In-person",
      status: "pending",
      location: "Max Hospital, Delhi"
    }
  ];

  const recentReports = [
    {
      id: 1,
      name: "Blood Test Report",
      date: "2025-06-10",
      type: "Lab Report",
      status: "normal"
    },
    {
      id: 2,
      name: "ECG Report",
      date: "2025-06-08",
      type: "Diagnostic",
      status: "requires_attention"
    }
  ];

  const quickStats = {
    totalAppointments: 12,
    completedConsultations: 8,
    pendingReports: 2,
    linkedProviders: 3
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 gradient-healthcare rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
              <p className="text-gray-600">Here's your health dashboard overview</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{quickStats.totalAppointments}</div>
              <div className="text-sm text-gray-600">Total Appointments</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Video className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{quickStats.completedConsultations}</div>
              <div className="text-sm text-gray-600">Consultations</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <FileText className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{quickStats.pendingReports}</div>
              <div className="text-sm text-gray-600">Pending Reports</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <User className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{quickStats.linkedProviders}</div>
              <div className="text-sm text-gray-600">Linked Providers</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>Your scheduled consultations</CardDescription>
                </div>
                <Link to="/find-doctors">
                  <Button size="sm" className="gradient-primary text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Book New
                  </Button>
                </Link>
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
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(appointment.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{appointment.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{appointment.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm font-medium text-primary">{appointment.type}</span>
                      <div className="space-x-2">
                        {appointment.type === 'Video Consultation' && (
                          <Button size="sm" variant="outline">
                            <Video className="w-4 h-4 mr-2" />
                            Join Call
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                {upcomingAppointments.length === 0 && (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">No upcoming appointments</p>
                    <Link to="/find-doctors">
                      <Button className="gradient-primary text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        Book Your First Appointment
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/find-doctors">
                  <Button className="w-full justify-start" variant="outline">
                    <User className="w-4 h-4 mr-2" />
                    Find Doctors
                  </Button>
                </Link>
                <Link to="/reports">
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    View Reports
                  </Button>
                </Link>
                <Link to="/settings">
                  <Button className="w-full justify-start" variant="outline">
                    <User className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>Latest health reports</CardDescription>
                </div>
                <Link to="/reports">
                  <Button size="sm" variant="outline">
                    View All
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">{report.name}</h4>
                      <p className="text-xs text-gray-600">{new Date(report.date).toLocaleDateString()}</p>
                    </div>
                    <Badge 
                      variant={report.status === 'normal' ? 'default' : 'destructive'}
                      className="text-xs"
                    >
                      {report.status === 'normal' ? 'Normal' : 'Attention'}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
