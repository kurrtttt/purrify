'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { CheckCircle, Heart, Home, Package } from 'lucide-react';

export function ThankYouContent() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F7F9FA] to-[#E8F1FA] min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 relative">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-[#6B9DCB] to-[#A7C7E7] rounded-full shadow-2xl mb-6">
            <CheckCircle className="h-16 w-16 text-white" />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <div className="text-6xl sparkle-animation">✨</div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6B9DCB] to-[#A7C7E7] bg-clip-text text-transparent">
          Thank You!
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your order has been received successfully! We're excited to get your Purrify stain remover to you.
        </p>

        <Card className="shadow-xl mb-8">
          <CardContent className="pt-6">
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#E8F1FA] rounded-full flex items-center justify-center mt-1">
                  <span className="text-[#6B9DCB] font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Order Confirmation</h3>
                  <p className="text-sm text-gray-600">
                    You'll receive an email confirmation within 24 hours with your order details and payment instructions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#E8F1FA] rounded-full flex items-center justify-center mt-1">
                  <span className="text-[#6B9DCB] font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Payment Processing</h3>
                  <p className="text-sm text-gray-600">
                    Complete your payment using the instructions we'll send you (GCash, bank transfer, or COD).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-[#E8F1FA] rounded-full flex items-center justify-center mt-1">
                  <span className="text-[#6B9DCB] font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Your Purrify pen will be on its way! Expect delivery within 3-5 business days.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-[#E8F1FA] to-[#F7F9FA] rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Heart className="h-6 w-6 text-[#6B9DCB] fill-current" />
            <h3 className="text-lg font-semibold text-gray-900">Thank you for supporting student entrepreneurs!</h3>
          </div>
          <p className="text-sm text-gray-600">
            Every purchase helps students at Naga City Science High School continue creating eco-friendly solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="btn-primary w-full sm:w-auto">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/variations">
            <Button variant="outline" className="btn-secondary w-full sm:w-auto">
              <Package className="h-4 w-4 mr-2" />
              View More Products
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p className="mb-2">Questions about your order?</p>
          <a href="mailto:pawlish.co.purrify@gmail.com" className="text-[#6B9DCB] hover:text-[#588DBA] font-medium">
            Contact us at pawlish.co.purrify@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
