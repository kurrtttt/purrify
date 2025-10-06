'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Is Purrify safe for school uniforms?',
    answer: 'Yes! Purrify has been tested on cotton, polyester, and cotton-poly blends commonly used in school uniforms. It\'s gentle enough for daily use and won\'t damage or discolor most fabrics. We always recommend testing on a hidden area first, especially for delicate or specialty fabrics.'
  },
  {
    question: 'Can I refill the container myself?',
    answer: 'Absolutely! Refilling is super easy and takes less than 30 seconds. Simply twist off the cat cap, pour in the refill pack, and twist the cap back on. Our refill packs are available for all 6 scent variations and help reduce plastic waste by 80%.'
  },
  {
    question: 'How many uses can I get per pen?',
    answer: 'Each Purrify pen provides approximately 20-30 applications, depending on the size of the stains. For typical small stains (like food drops or ink marks), you can expect about a month of regular use. Larger stains may require more product.'
  },
  {
    question: 'Does Purrify work on all types of stains?',
    answer: 'Purrify works best on fresh food stains, drink spills, ink marks, and most organic stains. It\'s particularly effective on coffee, soda, ketchup, chocolate, and pen marks. For oil-based stains or very old set-in stains, results may vary. Always treat stains as quickly as possible for best results.'
  },
  {
    question: 'Is the formula environmentally friendly?',
    answer: 'Yes! Our formula is biodegradable and breaks down naturally without harming waterways or soil. The refillable container system reduces plastic waste by 80% compared to traditional stain removers. We\'re committed to both effectiveness and environmental responsibility.'
  },
  {
    question: 'How long does the scent last?',
    answer: 'The pleasant scent typically lasts 2-4 hours after application, depending on the fabric and environment. Our scents are designed to be noticeable but not overwhelming—perfect for school and professional settings where strong fragrances aren\'t appropriate.'
  },
  {
    question: 'Can I take Purrify on airplanes?',
    answer: 'Yes! Purrify\'s compact size (under 3 oz) makes it perfect for carry-on luggage. The secure cap prevents leaks, and the keychain design means you won\'t lose it during travel. It\'s the perfect companion for business trips, vacations, or study abroad programs.'
  },
  {
    question: 'What if Purrify doesn\'t work on my stain?',
    answer: 'While Purrify is highly effective on most common stains, we understand that every situation is different. If you\'re not completely satisfied with the results, contact our customer service team within 30 days for a full refund or replacement. We stand behind our product 100%!'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6B9DCB] to-[#A7C7E7] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about using Purrify
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#6B9DCB] flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#E8F1FA] to-[#F7F9FA] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Our friendly customer service team is here to help! We typically respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Support
              </button>
              <button className="btn-secondary">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}