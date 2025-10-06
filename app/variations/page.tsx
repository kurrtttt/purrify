import { PurrifyVariantsGrid } from '@/components/variations/purrify-variants-grid';

export const metadata = {
  title: 'Product Variations - Purrify Stain Remover',
  description: 'Explore our 6 official Purrify variants with unique scents and colors.',
};

export default function VariationsPage() {
  return (
    <div className="pt-16">
      <PurrifyVariantsGrid />
    </div>
  );
}
