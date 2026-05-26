import Hero from '@/components/home/Hero';
import BigThree from '@/components/home/BigThree';
import ClientLogos from '@/components/home/ClientLogos';
import ServiceCards from '@/components/home/ServiceCards';
import CaseStudies from '@/components/home/CaseStudies';
import ChrisBio from '@/components/home/ChrisBio';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <BigThree />
      <ServiceCards />
      <CaseStudies />
      <ChrisBio />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
