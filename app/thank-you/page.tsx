import { ThankYouContent } from '@/components/order/thank-you-content';

export const metadata = {
  title: 'Thank You - Purrify Order Confirmation',
  description: 'Thank you for your order! We will contact you soon with confirmation.',
};

export default function ThankYouPage() {
  return (
    <div className="pt-16">
      <ThankYouContent />
    </div>
  );
}
