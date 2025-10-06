import { OrderForm } from '@/components/order/order-form';

export const metadata = {
  title: 'Order Purrify - Purrify Stain Remover',
  description: 'Order your Purrify stain remover pen today. Choose your favorite scent and get it delivered to your location.',
};

export default function OrderPage() {
  return (
    <div className="pt-16">
      <OrderForm />
    </div>
  );
}
