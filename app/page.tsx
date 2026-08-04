import CampusSection from '@/components/CampusSection';
import CoursesSection from '@/components/CoursesSection';
import Hero from '@/components/Hero';
import ImpactSection from '@/components/ImpactSection';
import LeadershipSection from '@/components/LeadershipSection';
import NationwideImpact from '@/components/nationwideImpact';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ImpactSection />
      <NationwideImpact />
      <CampusSection />
      <CoursesSection />
      <LeadershipSection />
      <TestimonialSection />
    </div>
  );
}
