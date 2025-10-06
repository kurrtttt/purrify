import { Recycle, Droplet, Heart } from 'lucide-react';

export function EcoTipSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F7F9FA] to-[#E8F1FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="bg-gradient-to-br from-[#6B9DCB] to-[#A7C7E7] p-12 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="flex justify-center space-x-4 mb-6">
                  <Recycle className="h-16 w-16 animate-pulse" />
                  <Heart className="h-16 w-16 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <h2 className="text-4xl font-bold mb-4">Eco-Friendly Choice</h2>
                <p className="text-xl text-white/90">Refill, Reuse, Reduce Waste</p>
                <div className="mt-8 text-6xl">🌱</div>
              </div>
            </div>

            <div className="p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Sustainability Tips</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#E8F1FA] rounded-full flex items-center justify-center">
                    <Recycle className="h-5 w-5 text-[#6B9DCB]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Refill Instead of Replace</h4>
                    <p className="text-gray-600 text-sm">
                      Each Purrify pen is designed to be refillable. When your pen runs low, simply purchase a refill
                      instead of a new container. One refill = less plastic waste!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#E8F1FA] rounded-full flex items-center justify-center">
                    <Droplet className="h-5 w-5 text-[#6B9DCB]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Use Every Last Drop</h4>
                    <p className="text-gray-600 text-sm">
                      Store your Purrify pen upright when not in use to ensure you can use every bit of the formula.
                      Each pen contains enough solution for 50-100 stain treatments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#E8F1FA] rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 text-[#6B9DCB]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Keep Your Favorite Cap</h4>
                    <p className="text-gray-600 text-sm">
                      Our handcrafted cat-shaped caps are collectible and reusable. When you refill, you keep your
                      favorite cap design. Collect different designs to match your style!
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#E8F1FA] to-[#F7F9FA] rounded-xl p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-[#6B9DCB]">Did you know?</span> By choosing refillable Purrify,
                    you're helping reduce plastic waste. If every student used refillable products, we could save
                    thousands of containers from landfills each year!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
