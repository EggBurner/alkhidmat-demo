import CampusSection from '@/components/CampusSection';
import Hero from '@/components/Hero';
import ImpactSection from '@/components/ImpactSection';
import NationwideImpact from '@/components/nationwideImpact';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ImpactSection />
      <NationwideImpact />
      <CampusSection />
    </div>
  );
}
