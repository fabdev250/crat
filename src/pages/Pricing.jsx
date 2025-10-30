// src/pages/Pricing.jsx
import React, { useState } from 'react';
import { 
  Calculator, 
  Cloud, 
  Shield, 
  Sprout, 
  Home, 
  Droplets, 
  Sun,
  Check,
  Star,
  Zap,
  ArrowRight,
  Users,
  TrendingUp,
  Target,
  Leaf
} from 'lucide-react';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [greenhouseType, setGreenhouseType] = useState('metallic');
  const [size, setSize] = useState(20);
  const [waterTank, setWaterTank] = useState('none');
  const [dripKit, setDripKit] = useState('without');
  const [trellising, setTrellising] = useState('exclude');
  const [farmersKit, setFarmersKit] = useState('exclude');
  const [insurance, setInsurance] = useState('exclude');
  const [farmAdvisory, setFarmAdvisory] = useState('exclude');
  const [farmShield, setFarmShield] = useState('none');
  const [billingCycle, setBillingCycle] = useState('yearly');

  // Calculate total price
  const calculateTotal = () => {
    let total = 0;

    // Base price based on size and type
    if (greenhouseType === 'metallic') {
      total = size * 2500;
    } else {
      total = size * 2000;
    }

    // Water tank
    if (waterTank === '500L') total += 50000;
    if (waterTank === '1000L') total += 80000;
    if (waterTank === '2300L') total += 120000;

    // Drip kit
    if (dripKit === 'with') total += 75000;

    // Trellising
    if (trellising === 'with') total += 30000;

    // Farmers kit
    if (farmersKit === 'add') total += 100000;

    // Insurance
    if (insurance === 'add') total += 50000;

    // Farm advisory
    if (farmAdvisory === 'add') total += 150000;

    // FarmShield
    if (farmShield === 'lite') total += 65000;
    if (farmShield === 'basic') total += 155000;
    if (farmShield === 'premium') total += 182000;
    if (farmShield === 'pro') total += 275000;

    return total;
  };

  const totalPrice = calculateTotal();
  const totalPlants = size * 4;
  const projectedIncome = size * 3000;

  const tabs = [
    { id: 'all', label: 'All Products', icon: Home },
    { id: 'smart-greenhouses', label: 'Greenhouses', icon: Sprout },
    { id: 'farmcloud', label: 'FarmCloud', icon: Cloud },
    { id: 'farmshield', label: 'FarmShield', icon: Shield },
    { id: 'smart-drip-kits', label: 'Drip Kits', icon: Droplets },
  ];

  const OptionButton = ({ value, currentValue, onChange, children, className = '' }) => (
    <button
      onClick={() => onChange(value)}
      className={`p-4 border-2 rounded-xl text-center transition-all duration-300 font-medium ${
        currentValue === value
          ? 'border-green-500 bg-green-50 text-green-700 shadow-md scale-105'
          : 'border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:shadow-sm'
      } ${className}`}
    >
      {children}
    </button>
  );

  const FeatureRow = ({ feature, plans, highlight }) => (
    <div className={`flex items-center py-4 px-4 rounded-lg transition-colors ${
      highlight ? 'bg-green-50 border border-green-100' : 'hover:bg-gray-50'
    }`}>
      <div className="flex-1">
        <span className="text-gray-800 font-medium">{feature}</span>
      </div>
      <div className="grid grid-cols-4 gap-4 flex-1">
        {plans.map((included, index) => (
          <div key={index} className="text-center">
            {included === '✓' && <Check className="w-5 h-5 text-green-500 mx-auto" />}
            {included === '-' && <span className="text-gray-300">-</span>}
            {typeof included === 'string' && included !== '✓' && included !== '-' && (
              <span className="text-sm text-gray-600">{included}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-green-50 rounded-full px-6 py-3 mb-6">
              <Calculator className="w-6 h-6 text-green-600" />
              <span className="text-green-700 font-semibold">Transparent Pricing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Honest Pricing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              No hidden fees. No surprises. Everything you need to transform your farm with modern technology.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Smart Greenhouses Calculator */}
        {(activeTab === 'all' || activeTab === 'smart-greenhouses') && (
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Smart Greenhouse Calculator</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Build your perfect greenhouse with our interactive calculator. See real-time pricing as you customize.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Calculator Form */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Sprout className="w-6 h-6 text-green-600" />
                    Configure Your Greenhouse
                  </h3>

                  {/* Greenhouse Type */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Greenhouse Type
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <OptionButton
                        value="metallic"
                        currentValue={greenhouseType}
                        onChange={setGreenhouseType}
                      >
                        <div className="font-semibold">Metallic</div>
                        <div className="text-sm text-green-600 mt-1">-30% Discount</div>
                      </OptionButton>
                      <OptionButton
                        value="wooden"
                        currentValue={greenhouseType}
                        onChange={setGreenhouseType}
                      >
                        <div className="font-semibold">Wooden</div>
                        <div className="text-sm text-green-600 mt-1">-30% Discount</div>
                      </OptionButton>
                    </div>
                  </div>

                  {/* Size */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Size (Square Meters)
                    </label>
                    <div className="bg-green-50 rounded-xl p-4 mb-4">
                      <p className="text-sm text-gray-600 mb-2 font-medium">Standard Sizes:</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {['4×5m = 20m²', '4×10m = 40m²', '8×15m = 120m²', '8×24m = 192m²'].map((sizeText) => (
                          <div key={sizeText} className="text-gray-600">{sizeText}</div>
                        ))}
                      </div>
                    </div>
                    <input
                      type="number"
                      value={size}
                      onChange={(e) => setSize(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      min="20"
                      step="1"
                    />
                  </div>

                  {/* Additional Options */}
                  {[
                    {
                      label: 'Water Tank',
                      value: waterTank,
                      onChange: setWaterTank,
                      options: ['500L', '1000L', '2300L', 'none'],
                      labels: ['500L', '1000L', '2300L', 'No Tank']
                    },
                    {
                      label: 'Drip Irrigation Kit',
                      value: dripKit,
                      onChange: setDripKit,
                      options: ['with', 'without'],
                      labels: ['With Drip Kit', 'Without Drip Kit']
                    },
                    {
                      label: 'Trellising System',
                      value: trellising,
                      onChange: setTrellising,
                      options: ['with', 'exclude'],
                      labels: ['With Trellising', 'Exclude']
                    },
                    {
                      label: 'Farmers Kit',
                      value: farmersKit,
                      onChange: setFarmersKit,
                      options: ['add', 'exclude'],
                      labels: ['Add Farmers Kit', 'Exclude']
                    },
                    {
                      label: 'Crop Insurance',
                      value: insurance,
                      onChange: setInsurance,
                      options: ['add', 'exclude'],
                      labels: ['Add Insurance', 'Exclude']
                    },
                    {
                      label: 'Farm Advisory',
                      value: farmAdvisory,
                      onChange: setFarmAdvisory,
                      options: ['add', 'exclude'],
                      labels: ['Add Advisory', 'Exclude']
                    }
                  ].map((section, index) => (
                    <div key={index} className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        {section.label}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {section.options.map((option, idx) => (
                          <OptionButton
                            key={option}
                            value={option}
                            currentValue={section.value}
                            onChange={section.onChange}
                            className="py-3"
                          >
                            {section.labels[idx]}
                          </OptionButton>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* FarmShield */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      FarmShield Package
                    </label>
                    <select
                      value={farmShield}
                      onChange={(e) => setFarmShield(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                    >
                      <option value="none">No FarmShield</option>
                      <option value="lite">Lite - RWF 65,000</option>
                      <option value="basic">Basic - RWF 155,000</option>
                      <option value="premium">Premium - RWF 182,000</option>
                      <option value="pro">Pro - RWF 275,000</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-2">Your Custom Greenhouse</h3>
                  <p className="text-green-100 mb-6">Complete package with all selected features</p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                    <div className="text-4xl font-bold mb-2">RWF {totalPrice.toLocaleString()}</div>
                    <div className="text-green-200 line-through text-lg">
                      RWF {(totalPrice / 0.7).toLocaleString()}
                    </div>
                    <div className="text-green-200 text-sm mt-1">30% discount applied</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-green-500/30">
                      <span className="text-green-100">Total Plants</span>
                      <span className="font-semibold">{totalPlants} plants</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-green-500/30">
                      <span className="text-green-100">Projected Income/Season</span>
                      <span className="font-semibold">RWF {projectedIncome.toLocaleString()}</span>
                    </div>
                    <div className="text-green-200 text-sm">
                      *Based on Red/Yellow Capsicums with FarmCloud Marketplace
                    </div>
                  </div>

                  <button className="w-full bg-white text-green-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Get Your Greenhouse
                  </button>
                  
                  <div className="text-center mt-4">
                    <button className="text-green-200 hover:text-white text-sm font-medium transition-colors">
                      Need help? Speak to our experts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FarmCloud Pricing */}
        {(activeTab === 'all' || activeTab === 'farmcloud') && (
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">FarmCloud Plans</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the perfect plan for your farm management needs. Start free and upgrade as you grow.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-2xl p-2">
                <button
                  onClick={() => setBillingCycle('quarterly')}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                    billingCycle === 'quarterly'
                      ? 'bg-white text-gray-900 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Quarterly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                    billingCycle === 'yearly'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  Yearly (Save 50%)
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                {
                  name: 'Bronze',
                  price: 'Free',
                  description: 'Perfect for small farms',
                  features: ['1 farm', '1 user', 'Basic weather alerts', 'Mobile app access'],
                  buttonText: 'Get Started',
                  popular: false,
                  color: 'gray'
                },
                {
                  name: 'Silver',
                  price: 'RWF 15,000',
                  period: '/month',
                  description: 'Growing farms',
                  features: ['5 farms', '5 users', 'Advanced analytics', 'Marketplace access', 'Export compliance'],
                  buttonText: 'Start Free Trial',
                  popular: true,
                  color: 'green'
                },
                {
                  name: 'Gold',
                  price: 'RWF 35,000',
                  period: '/month',
                  description: 'Commercial farms',
                  features: ['20 farms', '20 users', 'Full accounting', 'API access', 'Priority support'],
                  buttonText: 'Start Free Trial',
                  popular: false,
                  color: 'yellow'
                },
                {
                  name: 'Platinum',
                  price: 'Custom',
                  description: 'Enterprise solution',
                  features: ['Unlimited farms', 'Custom users', 'White label', 'Dedicated support', 'Custom integrations'],
                  buttonText: 'Contact Sales',
                  popular: false,
                  color: 'purple'
                }
              ].map((plan, index) => (
                <div
                  key={plan.name}
                  className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-green-500 transform -translate-y-2' 
                      : 'border-gray-100 hover:border-green-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-green-500 text-white text-center py-2 rounded-t-2xl font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && <span className="text-gray-600">{plan.period}</span>}
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}>
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of farmers who have increased their yields and income with Crat_Agri technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-600 transition-all">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;