import { Leaf, Zap, Heart, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Refillable container reduces waste. Made with biodegradable ingredients that care for our planet.'
  },
  {
    icon: Zap,
    title: 'Fast Action',
    description: 'Works in just 2-3 minutes! Quick solution for those unexpected spills and stains.'
  },
  {
    icon: Heart,
    title: 'Portable Design',
    description: 'Cat-shaped cap doubles as a keychain. Always have it ready when you need it most.'
  },
  {
    icon: GraduationCap,
    title: 'Student-Friendly',
    description: 'Affordable pricing with refill options. Perfect for dorm life and campus adventures.'
  }
];

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6B9DCB] to-[#A7C7E7] bg-clip-text text-transparent">
            Why Choose Purrify?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've designed the perfect stain remover for the modern student lifestyle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center card-hover">
              <div className="bg-gradient-to-br from-[#F7F9FA] to-[#E8F1FA] rounded-2xl p-8 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6B9DCB] to-[#A7C7E7] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}