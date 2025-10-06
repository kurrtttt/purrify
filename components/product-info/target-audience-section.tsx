import { GraduationCap, BookOpen, Car } from 'lucide-react';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Perfect for dorm life, campus dining, and study sessions',
    features: ['Fits in any backpack', 'Affordable refill system', 'Works on uniforms', 'Cute keychain design']
  },
  {
    icon: BookOpen,
    title: 'Teachers & Educators',
    description: 'Essential for classroom management and professional appearance',
    features: ['Quick classroom fixes', 'Professional discretion', 'Safe around students', 'Multiple applications']
  },
  {
    icon: Car,
    title: 'Daily Commuters',
    description: 'Always be prepared for life\'s unexpected moments',
    features: ['Portable design', 'Works on-the-go', 'Car-friendly size', 'Emergency stain solution']
  }
];

export function TargetAudienceSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#F7F9FA] to-[#E8F1FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6B9DCB] to-[#A7C7E7] bg-clip-text text-transparent">
            Perfect For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for anyone who values cleanliness, convenience, and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="group card-hover">
              <div className="bg-white rounded-2xl p-8 shadow-xl h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#6B9DCB] to-[#A7C7E7] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <audience.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{audience.title}</h3>
                  <p className="text-gray-600">{audience.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {audience.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#A7C7E7] to-[#9EBFD9] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}