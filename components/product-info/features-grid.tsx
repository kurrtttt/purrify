import { Clock, Shield, Recycle, DollarSign, KeyRound as Keyround, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Quick Action',
    description: 'Works in just 2-3 minutes',
    details: 'Our fast-acting formula breaks down stains quickly, so you can get back to your day without delay.'
  },
  {
    icon: Shield,
    title: 'Fabric Safe',
    description: 'Safe for most fabrics including uniforms',
    details: 'Tested on cotton, polyester, and blends. Perfect for school uniforms, casual wear, and delicate fabrics.'
  },
  {
    icon: Recycle,
    title: 'Refillable Container',
    description: 'Reduces waste with eco-friendly refills',
    details: 'Each refill pack contains 3 months worth of cleaning power and reduces plastic waste by 80%.'
  },
  {
    icon: DollarSign,
    title: 'Student-Friendly Price',
    description: 'Affordable for any budget',
    details: 'Starting at just $12, with refill packs at $6. Much more cost-effective than traditional stain removers.'
  },
  {
    icon: Keyround,
    title: 'Keychain Design',
    description: 'Cat-cap doubles as a stylish accessory',
    details: 'Never forget your stain remover again! The adorable cat cap attaches to keys, bags, or lanyards.'
  },
  {
    icon: Sparkles,
    title: 'Multiple Uses',
    description: '20-30 applications per pen',
    details: 'Each pen provides weeks of protection against food spills, drink stains, and ink marks.'
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6B9DCB] to-[#A7C7E7] bg-clip-text text-transparent">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every detail designed with the modern student in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group card-hover">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 h-full shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#6B9DCB] to-[#A7C7E7] rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                
                <p className="text-[#6B9DCB] font-medium mb-4">{feature.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}