import { OverviewSection } from '@/components/product-info/overview-section';
import { FeaturesGrid } from '@/components/product-info/features-grid';
import { TargetAudienceSection } from '@/components/product-info/target-audience-section';

export const metadata = {
  title: 'Product Information - Purrify Stain Remover',
  description: 'Learn everything about Purrify stain remover - features, benefits, and why it is the perfect choice for students.',
};

export default function ProductInfoPage() {
  return (
    <div className="pt-16">
      <OverviewSection />
      <FeaturesGrid />
      <TargetAudienceSection />
    </div>
  );
}
