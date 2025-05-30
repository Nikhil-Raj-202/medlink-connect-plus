
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DoctorSection from '@/components/DoctorSection';
import HealthLockerSection from '@/components/HealthLockerSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DoctorSection />
      <HealthLockerSection />
      <Footer />
    </div>
  );
};

export default Index;
