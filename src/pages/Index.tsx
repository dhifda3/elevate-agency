import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TopographicBackground from '@/components/TopographicBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <TopographicBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
