import { RotateCw, Target, Clock, Hand } from 'lucide-react';

const steps = [
  {
    icon: RotateCw,
    title: 'Shake Gently',
    description: 'Give your Purrify pen 3-4 gentle shakes before use',
    details: 'This activates the cleaning formula and ensures optimal performance',
    tip: 'The cat cap should rattle slightly—that\'s normal!'
  },
  {
    icon: Target,
    title: 'Apply Directly',
    description: 'Apply directly to the stain with gentle pressure',
    details: 'Cover the entire stained area with a thin, even layer',
    tip: 'Don\'t oversaturate—a little goes a long way!'
  },
  {
    icon: Clock,
    title: 'Wait 2-3 Minutes',
    description: 'Let the formula work its magic',
    details: 'The active ingredients need time to break down the stain molecules',
    tip: 'Perfect time to grab a tissue or cloth for the next step'
  },
  {
    icon: Hand,
    title: 'Dab Gently',
    description: 'Dab with a clean cloth or tissue',
    details: 'Use a blotting motion rather than rubbing to avoid spreading',
    tip: 'For stubborn stains, repeat the process once more'
  }
];

export function StepByStepGuide() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F7F9FA] to-[#E8F1FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6B9DCB] to-[#A7C7E7] bg-clip-text text-transparent">
            How to Use Purrify
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to stain-free confidence
          </p>
        </div>

        {/* Step-by-step visual guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="group text-center card-hover">
              <div className="bg-white rounded-2xl p-8 shadow-xl h-full">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6B9DCB] to-[#A7C7E7] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Step info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-[#6B9DCB] font-medium mb-4">{step.description}</p>
                <p className="text-gray-600 text-sm mb-4">{step.details}</p>
                
                {/* Pro tip */}
                <div className="bg-gradient-to-r from-[#E8F1FA] to-[#F7F9FA] rounded-xl p-3">
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold text-[#6B9DCB]">💡 Pro Tip:</span> {step.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video placeholder and additional tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Video section */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-[#A7C7E7] to-[#9EBFD9] flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Watch the Demo</h3>
                  <p className="text-white/90">See Purrify in action</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visual Guide Coming Soon!</h3>
                <p className="text-gray-600">We're creating a helpful video demonstration to show you exactly how to get the best results with your Purrify pen.</p>
              </div>
            </div>
          </div>

          {/* Additional tips */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Pro Tips for Best Results</h3>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-[#6B9DCB] mb-2">🚀 For Fresh Stains</h4>
                <p className="text-gray-600 text-sm">Act quickly! Fresh stains come out much easier than set-in ones. Keep your Purrify pen handy at all times.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-[#588DBA] mb-2">🧪 For Tough Stains</h4>
                <p className="text-gray-600 text-sm">For stubborn stains, apply Purrify, wait the full 3 minutes, then gently work in with your finger before dabbing.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-[#9EBFD9] mb-2">👕 For Different Fabrics</h4>
                <p className="text-gray-600 text-sm">Always test on a hidden area first. Purrify works on most fabrics, but it's better to be safe!</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-[#A7C7E7] mb-2">♻️ Storage & Care</h4>
                <p className="text-gray-600 text-sm">Store at room temperature. Replace the cap tightly after use to prevent evaporation. Each pen lasts 6+ months.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}