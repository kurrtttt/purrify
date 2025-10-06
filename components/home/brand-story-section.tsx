import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function BrandStorySection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#F7F9FA] to-[#E8F1FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6B9DCB] to-[#A7C7E7] bg-clip-text text-transparent">
              Our Purr-fect Story
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Purrify was born in Naga City Science High School from a simple observation: students face stains at the worst possible moments,
                but existing solutions are bulky, wasteful, and definitely not stylish.
              </p>
              <p className="mb-6">
                Created by Pawlish Co., a student-led cooperative, we imagined a world where stain removal could be both effective and adorable. The cat-shaped cap
                isn't just cute, it's functional, doubling as a keychain so you'll never forget it at home.
              </p>
              <p className="mb-6">
                Every Purrify pen is designed with sustainability in mind. Our refillable system means less plastic
                waste, and our biodegradable formula means better outcomes for our planet.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <p className="text-[#6B9DCB] font-semibold text-lg italic">
                  "Because every student deserves to look their best, feel confident, and protect the planet." 🐱✨
                </p>
              </div>
              <Link href="/order">
                <Button className="btn-primary text-lg px-8 py-4">
                  Get Your Purrify Pen
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Visual element */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A7C7E7] to-[#9EBFD9] rounded-full opacity-30 float-animation"></div>
              <div className="absolute inset-4 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-8">
                <div className="text-8xl mb-4">🌱</div>
                <h3 className="text-[#6B9DCB] font-bold text-xl mb-2">Eco-Conscious</h3>
                <p className="text-gray-600 text-center">Sustainable solutions for a cleaner tomorrow</p>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#9EBFD9] to-[#A7C7E7] rounded-full flex items-center justify-center text-3xl sparkle-animation">
                🐱
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}