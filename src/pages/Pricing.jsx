// src/pages/Pricing.jsx
import React, { useState } from 'react';

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

  // Calculate total price
  const calculateTotal = () => {
    let total = 0;

    // Base price based on size and type
    if (greenhouseType === 'metallic') {
      total = size * 2500; // RWF per sqm for metallic
    } else {
      total = size * 2000; // RWF per sqm for wooden
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
  const projectedIncome = size * 3000; // RWF projection per sqm

  const tabs = [
    'all', 'smart-greenhouses', 'farmcloud', 'farmshield', 
    'screenhouse', 'nethouse', 'smart-drip-kits'
  ];

  const tabLabels = {
    'all': 'All',
    'smart-greenhouses': 'Smart Greenhouses',
    'farmcloud': 'FarmCloud',
    'farmshield': 'FarmShield',
    'screenhouse': 'Screenhouse',
    'nethouse': 'NetHouse',
    'smart-drip-kits': 'Smart Drip Kits'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We value transparency and that's why prices for all our products and services are shown here with no hidden charges! 
            What you see is what you pay.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${
                activeTab === tab
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        {/* Smart Greenhouses Calculator */}
        {(activeTab === 'all' || activeTab === 'smart-greenhouses') && (
          <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Smart Greenhouses Price Calculator</h2>
            <p className="text-gray-600 mb-6">Select the type of greenhouse you want a price for</p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="space-y-6">
                {/* Greenhouse Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Greenhouse Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setGreenhouseType('metallic')}
                      className={`p-4 border-2 rounded-lg text-center transition duration-300 ${
                        greenhouseType === 'metallic'
                          ? 'border-green-600 bg-green-50 text-green-700'
                          : 'border-gray-300 hover:border-green-400'
                      }`}
                    >
                      <div className="font-semibold">Metallic Greenhouse</div>
                      <div className="text-sm text-green-600 mt-1">-30% Discounted!</div>
                    </button>
                    <button
                      onClick={() => setGreenhouseType('wooden')}
                      className={`p-4 border-2 rounded-lg text-center transition duration-300 ${
                        greenhouseType === 'wooden'
                          ? 'border-green-600 bg-green-50 text-green-700'
                          : 'border-gray-300 hover:border-green-400'
                      }`}
                    >
                      <div className="font-semibold">Wooden Greenhouse</div>
                      <div className="text-sm text-green-600 mt-1">-30% Discounted!</div>
                    </button>
                  </div>
                </div>

                {/* Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What size of greenhouse in Sq.m do you want?
                  </label>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-600 mb-2">Standard sizes:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {['4M×5M=20 Sq.m', '4M×10M=40 Sq.m', '8M×15M=120 Sq.m', '8M×24M=192 Sq.m', 
                        '8M×30M=240 Sq.m', '16M×30M=480 Sq.m', '50M×100M=5,000 Sq.m'].map((sizeText) => (
                        <div key={sizeText} className="text-gray-600">{sizeText}</div>
                      ))}
                    </div>
                  </div>
                  <input
                    type="number"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    min="20"
                    step="1"
                  />
                </div>

                {/* Water Tank */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Would you like a water tank with your greenhouse?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['500L', '1000L', '2300L', 'none'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setWaterTank(option)}
                        className={`p-3 border rounded-lg text-center transition duration-300 ${
                          waterTank === option
                            ? 'border-green-600 bg-green-50 text-green-700'
                            : 'border-gray-300 hover:border-green-400'
                        }`}
                      >
                        {option === 'none' ? 'None' : option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Drip Kit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Would you like a drip irrigation kit with your greenhouse?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {['with', 'without'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setDripKit(option)}
                        className={`p-3 border rounded-lg text-center transition duration-300 ${
                          dripKit === option
                            ? 'border-green-600 bg-green-50 text-green-700'
                            : 'border-gray-300 hover:border-green-400'
                        }`}
                      >
                        {option === 'with' ? 'With drip kit' : 'Without drip kit'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Options */}
                {[
                  {
                    label: 'Trellising System',
                    state: trellising,
                    setState: setTrellising,
                    options: ['with', 'exclude'],
                    labels: ['With Trellising System', 'Exclude']
                  },
                  {
                    label: 'Farmers Kit',
                    state: farmersKit,
                    setState: setFarmersKit,
                    options: ['add', 'exclude'],
                    labels: ['Add Farmers Kit', 'Exclude']
                  },
                  {
                    label: 'Crop Insurance',
                    state: insurance,
                    setState: setInsurance,
                    options: ['add', 'exclude'],
                    labels: ['Add Crop Insurance', 'Exclude']
                  },
                  {
                    label: 'Farm Advisory',
                    state: farmAdvisory,
                    setState: setFarmAdvisory,
                    options: ['add', 'exclude'],
                    labels: ['Add Farm Advisory', 'Exclude']
                  }
                ].map((section, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {section.label}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {section.options.map((option, idx) => (
                        <button
                          key={option}
                          onClick={() => section.setState(option)}
                          className={`p-3 border rounded-lg text-center transition duration-300 ${
                            section.state === option
                              ? 'border-green-600 bg-green-50 text-green-700'
                              : 'border-gray-300 hover:border-green-400'
                          }`}
                        >
                          {section.labels[idx]}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {/* FarmShield */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Add FarmShield package
                  </label>
                  <select
                    value={farmShield}
                    onChange={(e) => setFarmShield(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  >
                    <option value="none">No FarmShield option selected</option>
                    <option value="lite">Lite - RWF 65,000</option>
                    <option value="basic">Basic - RWF 155,000</option>
                    <option value="premium">Premium - RWF 182,000</option>
                    <option value="pro">Pro - RWF 275,000</option>
                  </select>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-green-50 rounded-lg p-6 h-fit sticky top-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Total price</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  RWF {totalPrice.toLocaleString()}
                </div>
                <div className="text-gray-600 mb-6">
                  Original price: RWF {(totalPrice / 0.7).toLocaleString()}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Plants</span>
                    <span className="font-semibold">({totalPlants} plants)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Projected Income</span>
                    <span className="font-semibold text-green-600">RWF {projectedIncome.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    *Based on growing Red or Yellow Capsicums
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 font-semibold mt-6">
                  Speak to a consultant
                </button>
              </div>
            </div>
          </section>
        )}

        {/* FarmCloud Pricing */}
        {(activeTab === 'all' || activeTab === 'farmcloud') && (
          <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">FarmCloud™ Pricing</h2>
            <p className="text-gray-600 mb-6">
              Get started for free on FarmCloud™ and choose a plan later. Save 50% off when you choose a yearly plan.
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1">
                <button className="px-6 py-2 rounded-lg bg-white shadow-sm">Quarterly</button>
                <button className="px-6 py-2 rounded-lg text-green-600 font-semibold">Yearly (Save 50%)</button>
              </div>
            </div>

            {/* Pricing Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Features</th>
                    <th className="text-center p-4 bg-green-50">
                      <div className="font-bold">Bronze Package</div>
                      <div className="text-2xl text-green-600 font-bold">FREE</div>
                    </th>
                    <th className="text-center p-4">
                      <div className="font-bold">Silver Package</div>
                      <div className="text-gray-600">Book a Demo</div>
                    </th>
                    <th className="text-center p-4">
                      <div className="font-bold">Gold Package</div>
                      <div className="text-gray-600">Book a Demo</div>
                    </th>
                    <th className="text-center p-4">
                      <div className="font-bold">Platinum Package</div>
                      <div className="text-gray-600">Book a Demo</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    '1 farm only', '1 user only', 'Map <1 hectare',
                    '5 farms included', '5 users included', 'Map <50 hectares', 
                    '20 farms included', '20 users included', 'Map <500 hectares',
                    'Custom farms', 'Custom users', 'Custom hectares',
                    'Access real-time weather for crop planning and extreme weather alerts',
                    'Map your farm, get daily satellite crop health updates',
                    'Track daily farm activities and be export compliant ready',
                    'Add and manage your fertilisers and agrochemicals inventory',
                    'FULL ACCOUNTING MODULE',
                    'NEW FEATURE🔥 Export satellite index data',
                    'Add your Crop and Livestock Buyers',
                    'Connect FarmShield™ smart sensors',
                    'Generate crop traceability reports',
                    'Share production history with lenders',
                    'Integrate farm data with 3rd party apps',
                    'Digitize farm records and manage outgrower accounts',
                    'Access via USSD *384*1 and Mobile Web App'
                  ].map((feature, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4 text-gray-700">{feature}</td>
                      <td className="text-center p-4">
                        {index < 3 ? '✓' : index === 23 ? '✓' : ''}
                      </td>
                      <td className="text-center p-4">
                        {index >= 3 && index < 6 ? '✓' : index >= 12 && index < 23 ? '✓' : ''}
                      </td>
                      <td className="text-center p-4">
                        {index >= 6 && index < 9 ? '✓' : index >= 12 && index < 23 ? '✓' : ''}
                      </td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="p-4"></td>
                    <td className="text-center p-4">
                      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                        Try for free
                      </button>
                    </td>
                    <td className="text-center p-4">
                      <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">
                        Book a Demo
                      </button>
                    </td>
                    <td className="text-center p-4">
                      <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">
                        Book a Demo
                      </button>
                    </td>
                    <td className="text-center p-4">
                      <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">
                        Book a Demo
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>
        )}

        {/* FarmShield Pricing */}
        {(activeTab === 'all' || activeTab === 'farmshield') && (
          <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">FarmShield Pricing Structures</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="p-4 text-left">Capabilities</th>
                    <th className="p-4 text-center">Lite</th>
                    <th className="p-4 text-center">Basic</th>
                    <th className="p-4 text-center">Premium</th>
                    <th className="p-4 text-center">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Automatic open and closing of water valve based on time/amount', '✓', '✓', '✓', '✓'],
                    ['Data on amount of water irrigated from Flow meter sensor', '✓', '✓', '✓', '✓'],
                    ['Set and get alerts on parameters exceeded', '✓', '✓', '✓', '✓'],
                    ['Automatic valve control based on soil moisture', '-', '✓', '✓', '✓'],
                    ['Air Temperature and Humidity Sensor', '-', '1 Sensor', '1 Sensor', '1 Sensor'],
                    ['Soil Moisture Sensor - EC5', '-', '1 Sensor', '1 Sensor', '2 Sensor'],
                    ['Light Intensity Sensor', '-', '1 Sensor', '1 Sensor', '1 Sensor'],
                    ['CO2 Sensor', '-', '-', '1 Sensor', '1 Sensor'],
                    ['NPK Sensor', '-', '-', '-', '1 Sensor'],
                    ['SMS, Email and App alerts', '✓', '✓', '✓', '✓'],
                    ['FarmCloud™ Silver Package', '✓', '✓', '✓', '✓'],
                    ['Solar Panel and Batteries', '✓', '✓', '✓', '✓'],
                    ['Free farm delivery and installation', '✓', '✓', '✓', '✓']
                  ].map((row, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-4 text-center">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">Pricing Options</td>
                    <td className="p-4 text-center">
                      <div>RENT: RWF 21,000/a</div>
                      <div>OWN: RWF 65,000</div>
                    </td>
                    <td className="p-4 text-center">
                      <div>RENT: RWF 51,000/a</div>
                      <div>OWN: RWF 155,000</div>
                    </td>
                    <td className="p-4 text-center">
                      <div>RENT: RWF 61,000/a</div>
                      <div>OWN: RWF 182,000</div>
                    </td>
                    <td className="p-4 text-center">
                      <div>RENT: RWF 92,000/a</div>
                      <div>OWN: RWF 275,000</div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <div className="bg-green-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get your Crat_Agri product today!</h2>
          <p className="mb-6 opacity-90">
            Fill out your pre-site survey or speak to one of our consultants to get started.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold">
            Speak to a consultant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;