export function OverviewSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F7F9FA] to-[#E8F1FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6B9DCB] to-[#A7C7E7] bg-clip-text text-transparent">
            Meet Purrify
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The revolutionary stain remover that's changing how students handle life's messy moments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product overview */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Purrify is Different</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#6B9DCB] mb-3">🎯 Purpose-Built for Students</h3>
                <p>Designed specifically for the student lifestyle—portable, affordable, and always ready when you need it most.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#588DBA] mb-3">♻️ Eco-Conscious Design</h3>
                <p>Refillable container system reduces plastic waste by 80% compared to traditional stain removers.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#9EBFD9] mb-3">😸 Stylish & Functional</h3>
                <p>The cat-shaped cap isn't just adorable—it doubles as a keychain so you'll never leave home without it.</p>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Traditional vs. Purrify</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between py-4 border-b">
                  <span className="text-gray-600">Size & Portability</span>
                  <div className="flex space-x-4">
                    <span className="text-red-500">❌ Bulky bottles</span>
                    <span className="text-green-500">✅ Pocket-sized</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-4 border-b">
                  <span className="text-gray-600">Environmental Impact</span>
                  <div className="flex space-x-4">
                    <span className="text-red-500">❌ Single-use plastic</span>
                    <span className="text-green-500">✅ Refillable system</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-4 border-b">
                  <span className="text-gray-600">Student Budget</span>
                  <div className="flex space-x-4">
                    <span className="text-red-500">❌ Expensive</span>
                    <span className="text-green-500">✅ Affordable refills</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-4">
                  <span className="text-gray-600">Style Factor</span>
                  <div className="flex space-x-4">
                    <span className="text-red-500">❌ Generic design</span>
                    <span className="text-green-500">✅ Cute & trendy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}