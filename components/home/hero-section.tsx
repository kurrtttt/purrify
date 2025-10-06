'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const productVariants = [
  { color: 'yellow', image: '/yellow.png', name: 'Lemeown' },
  { color: 'blue', image: '/blue.png', name: 'Meowgic Mist' },
  { color: 'purple', image: '/purple.png', name: 'Pawpple Blossom' },
  { color: 'green', image: '/green.png', name: 'Purrsley' },
  { color: 'pink', image: '/pink.png', name: 'Strawpurry' },
  { color: 'orange', image: '/orange.png', name: 'Whiskermelon' },
];

export function HeroSection() {
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVariantIndex((prev) => (prev + 1) % productVariants.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-[#F7F9FA] to-[#E8F1FA] min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 sparkle-animation">✨</div>
      <div className="absolute top-40 right-20 text-4xl opacity-30 float-animation">🐱</div>
      <div className="absolute bottom-32 left-20 text-5xl opacity-25 sparkle-animation" style={{ animationDelay: '1s' }}>💧</div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#6B9DCB] via-[#A7C7E7] to-[#6B9DCB] bg-clip-text text-transparent">
                Make It Clean,
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#A7C7E7] via-[#9EBFD9] to-[#A7C7E7] bg-clip-text text-transparent">
                Make It Purr
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
              Your portable, eco-friendly solution to unexpected stains — designed for students on the go.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/order">
                <Button className="btn-primary text-lg px-8 py-4">
                  Order Now
                </Button>
              </Link>
              <Link href="/variations">
                <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Product mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A7C7E7] to-[#9EBFD9] rounded-full opacity-20 float-animation"></div>
              <div className="absolute inset-8 bg-white rounded-2xl shadow-2xl flex items-center justify-center card-hover overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  {productVariants.map((variant, index) => (
                    <div
                      key={variant.color}
                      className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000"
                      style={{
                        opacity: currentVariantIndex === index ? 1 : 0,
                        pointerEvents: currentVariantIndex === index ? 'auto' : 'none',
                      }}
                    >
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-40 h-40 object-contain mb-4"
                      />
                      <p className="text-[#6B9DCB] font-semibold text-lg">{variant.name}</p>
                      <p className="text-gray-500 text-sm">Purrify Stain Remover</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#9EBFD9] rounded-full flex items-center justify-center text-2xl sparkle-animation">
                ✨
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#A7C7E7] rounded-full flex items-center justify-center text-2xl float-animation" style={{ animationDelay: '0.5s' }}>
                💧
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}