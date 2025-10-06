'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { Mail, Phone, MapPin, User, Package, MessageSquare } from 'lucide-react';

const variations = [
  { id: 'mint', name: 'Fresh Mint Spark', price: 'PHP 120' },
  { id: 'lavender', name: 'Lavender Calm', price: 'PHP 120' },
  { id: 'citrus', name: 'Citrus Pop', price: 'PHP 120' },
  { id: 'ocean', name: 'Ocean Breeze', price: 'PHP 120' },
  { id: 'cherry', name: 'Cherry Blossom', price: 'PHP 120' },
  { id: 'vanilla', name: 'Vanilla Dream', price: 'PHP 120' },
  { id: 'sample', name: 'Sample Pack (All 6)', price: 'PHP 600' },
  { id: 'refill', name: 'Refill Only', price: 'PHP 80' },
];

export function OrderForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    product: '',
    quantity: '1',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/thank-you');
      } else {
        alert('There was an error submitting your order. Please try again or contact us directly.');
        setIsSubmitting(false);
      }
    } catch (error) {
      alert('There was an error submitting your order. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F7F9FA] to-[#E8F1FA] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6B9DCB] to-[#A7C7E7] bg-clip-text text-transparent">
            Order Purrify
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with order confirmation and payment details
          </p>
        </div>

        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Place Your Order</CardTitle>
            <CardDescription>
              We'll contact you within 24 hours to confirm your order and arrange delivery
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-[#6B9DCB]" />
                    <span>Full Name *</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Dela Cruz"
                    required
                    className="border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-[#6B9DCB]" />
                    <span>Email Address *</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@example.com"
                    required
                    className="border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-[#6B9DCB]" />
                    <span>Phone Number *</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0912 345 6789"
                    required
                    className="border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product" className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-[#6B9DCB]" />
                    <span>Select Product *</span>
                  </Label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 py-2 text-sm rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#6B9DCB]"
                  >
                    <option value="">Choose a variation...</option>
                    {variations.map((variation) => (
                      <option key={variation.id} value={variation.id}>
                        {variation.name} - {variation.price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">
                  Quantity *
                </Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  max="50"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-[#6B9DCB]" />
                  <span>Delivery Address *</span>
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Complete address including street, barangay, city, and postal code"
                  required
                  rows={3}
                  className="border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-[#6B9DCB]" />
                  <span>Additional Notes (Optional)</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requests or questions?"
                  rows={4}
                  className="border-gray-300"
                />
              </div>

              <div className="bg-gradient-to-r from-[#E8F1FA] to-[#F7F9FA] rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Payment Information</h3>
                <p className="text-sm text-gray-600">
                  After submitting this form, we'll send you payment instructions via email or SMS.
                  We accept GCash, bank transfer, and cash on delivery (for Naga City area).
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-6"
              >
                {isSubmitting ? 'Submitting Order...' : 'Place Order'}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By placing an order, you agree to receive order updates via email and SMS.
                We respect your privacy and will never share your information.
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <Mail className="h-8 w-8 text-[#6B9DCB] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">pawlish.co.purrify@gmail.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <MapPin className="h-8 w-8 text-[#6B9DCB] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600">Peñafrancia Avenue, Naga City</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Package className="h-8 w-8 text-[#6B9DCB] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-sm text-gray-600">3-5 business days nationwide</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
