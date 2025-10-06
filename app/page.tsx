import { HeroSection } from '@/components/home/hero-section';
import { WhyChooseSection } from '@/components/home/why-choose-section';
import { BrandStorySection } from '@/components/home/brand-story-section';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseSection />
      <BrandStorySection />
    </div>
  );
}