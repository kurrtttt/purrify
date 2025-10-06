import { StepByStepGuide } from '@/components/how-to-use/step-by-step-guide';
import { FAQSection } from '@/components/how-to-use/faq-section';
import { EcoTipSection } from '@/components/how-to-use/eco-tip-section';

export const metadata = {
  title: 'How to Use - Purrify Stain Remover',
  description: 'Learn how to use Purrify stain remover effectively with our step-by-step guide and frequently asked questions.',
};

export default function HowToUsePage() {
  return (
    <div className="pt-16">
      <StepByStepGuide />
      <EcoTipSection />
      <FAQSection />
    </div>
  );
}
