import CampusSection from '@/components/CampusSection';
import ContactSection from '@/components/ContactSection';
import CoursesSection from '@/components/CoursesSection';
import EmpoweringSection from '@/components/EmpoweringSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ImpactSection from '@/components/ImpactSection';
import LeadershipSection from '@/components/LeadershipSection';
import NationwideImpact from '@/components/nationwideImpact';
import PartnerSection from '@/components/PartnerSection';
import SuccessSection from '@/components/SuccessSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ImpactSection />
      <NationwideImpact />
      <CampusSection />
      <CoursesSection />
      <LeadershipSection />
      <TestimonialSection />
      <SuccessSection />
      <EmpoweringSection />
      <ContactSection />
      <PartnerSection />
      <Footer />
    </div>
  );
}
