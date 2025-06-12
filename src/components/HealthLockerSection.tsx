
import { Button } from '@/components/ui/button';
import { FileText, Shield, Download, Share2, Calendar, Activity } from 'lucide-react';

const healthRecords = [
  {
    title: "Blood Test Report",
    date: "2024-05-28",
    doctor: "Dr. Priya Sharma",
    type: "Lab Report",
    status: "Normal",
    icon: Activity,
    color: "text-green-600 bg-green-100"
  },
  {
    title: "Cardiology Consultation",
    date: "2024-05-25",
    doctor: "Dr. Rajesh Kumar",
    type: "Prescription",
    status: "Completed",
    icon: FileText,
    color: "text-blue-600 bg-blue-100"
  },
  {
    title: "X-Ray Chest",
    date: "2024-05-20",
    doctor: "Dr. Anitha Reddy",
    type: "Diagnostic",
    status: "Normal",
    icon: FileText,
    color: "text-purple-600 bg-purple-100"
  }
];

const HealthLockerSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                ABHA-Linked & Secure
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Your Digital Health Locker
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Store, access, and share your complete health history securely. 
                ABHA-integrated for seamless healthcare continuity across India.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Unified Health Records</h4>
                  <p className="text-gray-600 text-sm">Access all your medical documents from different hospitals and labs in one place.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Secure Sharing</h4>
                  <p className="text-gray-600 text-sm">Share specific documents with doctors using ABHA consent management.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Emergency Access</h4>
                  <p className="text-gray-600 text-sm">Quick access to vital health information during medical emergencies.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="gradient-primary text-white w-full sm:w-auto">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Access Your Health Locker
            </Button>
          </div>

          {/* Health Locker Preview */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 max-w-md mx-auto lg:max-w-none">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Recent Health Records</h3>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <span className="text-xs sm:text-sm text-green-600 font-medium">ABHA Linked</span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {healthRecords.map((record, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg ${record.color} flex items-center justify-center flex-shrink-0`}>
                          <record.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{record.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 truncate">{record.doctor}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center mt-1 space-y-1 sm:space-y-0 sm:space-x-3">
                            <span className="text-xs text-gray-500 flex items-center">
                              <Calendar className="w-3 h-3 mr-1 flex-shrink-0" />
                              {record.date}
                            </span>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full w-fit">
                              {record.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-1 flex-shrink-0 ml-2">
                        <Button size="sm" variant="ghost" className="p-1 sm:p-2">
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="p-1 sm:p-2">
                          <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200">
                <Button variant="outline" className="w-full text-sm">
                  View All Records
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthLockerSection;
