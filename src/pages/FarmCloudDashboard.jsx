// src/pages/FarmCloudDashboard.jsx
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Droplets, 
  Thermometer, 
  Sun, 
  Wind, 
  Calendar,
  Settings,
  Bell,
  User,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Download,
  RefreshCw,
  ChevronDown,
  Cloud,
  Sprout,
  Shield,
  Home,
  Database,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin
} from 'lucide-react';

const FarmCloudDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  // Mock data
  const farmData = {
    name: "Green Valley Farm",
    location: "Kigali, Rwanda",
    size: "5.2 hectares",
    crops: [
      { id: 1, name: "Tomatoes", variety: "Roma", area: "1.2 ha", health: 85, growth: 65, yield: "8.2 tons" },
      { id: 2, name: "Bell Peppers", variety: "California Wonder", area: "0.8 ha", health: 92, growth: 45, yield: "6.1 tons" },
      { id: 3, name: "Strawberries", variety: "Chandler", area: "0.5 ha", health: 78, growth: 80, yield: "3.5 tons" },
      { id: 4, name: "Lettuce", variety: "Butterhead", area: "0.7 ha", health: 88, growth: 30, yield: "4.8 tons" }
    ],
    sensors: [
      { id: 1, type: "Soil Moisture", value: "65%", status: "optimal", location: "Tomato Field A", trend: "stable" },
      { id: 2, type: "Temperature", value: "28°C", status: "optimal", location: "Greenhouse 1", trend: "rising" },
      { id: 3, type: "Humidity", value: "75%", status: "high", location: "Greenhouse 1", trend: "stable" },
      { id: 4, type: "Light Intensity", value: "850 lux", status: "optimal", location: "Pepper Field", trend: "falling" }
    ],
    alerts: [
      { id: 1, type: "warning", message: "Low soil moisture in Strawberry field", time: "2 hours ago", read: false },
      { id: 2, type: "info", message: "Irrigation scheduled for Tomato field", time: "1 hour ago", read: true },
      { id: 3, type: "success", message: "Harvest ready in Lettuce field", time: "5 hours ago", read: false }
    ],
    tasks: [
      { id: 1, task: "Apply fertilizer to Tomato field", due: "Today", priority: "high", completed: false },
      { id: 2, task: "Prune Strawberry plants", due: "Tomorrow", priority: "medium", completed: false },
      { id: 3, task: "Inspect irrigation system", due: "This week", priority: "low", completed: true }
    ]
  };

  const navigation = [
    { id: 'overview', name: 'Overview', icon: Home },
    { id: 'crops', name: 'Crop Management', icon: Sprout },
    { id: 'sensors', name: 'Sensors', icon: Database },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'tasks', name: 'Tasks', icon: CheckCircle },
    { id: 'alerts', name: 'Alerts', icon: AlertTriangle },
    { id: 'weather', name: 'Weather', icon: Cloud },
  ];

  useEffect(() => {
    setTimeout(() => {
      setWeatherData({
        temperature: 28,
        humidity: 75,
        rainfall: 2.5,
        windSpeed: 12,
        forecast: "Partly Cloudy"
      });
      setIsLoading(false);
    }, 1500);
  }, []);

  const StatCard = ({ icon: Icon, title, value, change, color = "green" }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-${color}-100`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        <div className={`text-sm font-medium text-${color}-600 bg-${color}-50 px-2 py-1 rounded-full`}>
          {change}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-1">{value}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Sprout}
          title="Active Crops"
          value={farmData.crops.length}
          change="+2 this month"
          color="green"
        />
        <StatCard 
          icon={BarChart3}
          title="Yield Forecast"
          value="12.5 tons"
          change="+15%"
          color="blue"
        />
        <StatCard 
          icon={Droplets}
          title="Water Usage"
          value="2,450 L"
          change="-8%"
          color="cyan"
        />
        <StatCard 
          icon={Shield}
          title="Crop Health"
          value="86%"
          change="+5%"
          color="emerald"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Crops */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Crops</h3>
          <div className="space-y-4">
            {farmData.crops.slice(0, 3).map(crop => (
              <div key={crop.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-green-300 transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Sprout className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{crop.name}</h4>
                    <p className="text-sm text-gray-500">{crop.variety}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{crop.yield}</div>
                  <div className="text-xs text-gray-500">Projected</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sensor Status */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Sensor Status</h3>
          <div className="space-y-3">
            {farmData.sensors.map(sensor => (
              <div key={sensor.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    sensor.status === 'optimal' ? 'bg-green-500' : 
                    sensor.status === 'high' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <span className="text-sm text-gray-700">{sensor.type}</span>
                </div>
                <span className="text-sm font-medium text-gray-800">{sensor.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCrops = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Crop Management</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
            <Plus className="w-4 h-4" />
            Add Crop
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {farmData.crops.map(crop => (
          <div key={crop.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <Sprout className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{crop.name}</h3>
                  <p className="text-sm text-gray-500">{crop.variety}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{crop.area}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Health</span>
                  <span className="font-medium text-gray-800">{crop.health}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${crop.health}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Growth Stage</span>
                  <span className="font-medium text-gray-800">{crop.growth}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${crop.growth}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-green-50 text-green-600 py-2 rounded-lg hover:bg-green-100 transition-colors duration-200 text-sm font-medium flex items-center justify-center gap-1">
                <Eye className="w-4 h-4" />
                View
              </button>
              <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-sm font-medium flex items-center justify-center gap-1">
                <Edit className="w-4 h-4" />
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'crops':
        return renderCrops();
      case 'sensors':
        return <div className="text-center py-12 text-gray-500">Sensors View - Coming Soon</div>;
      case 'analytics':
        return <div className="text-center py-12 text-gray-500">Analytics View - Coming Soon</div>;
      case 'tasks':
        return <div className="text-center py-12 text-gray-500">Tasks View - Coming Soon</div>;
      case 'alerts':
        return <div className="text-center py-12 text-gray-500">Alerts View - Coming Soon</div>;
      case 'weather':
        return <div className="text-center py-12 text-gray-500">Weather View - Coming Soon</div>;
      default:
        return renderOverview();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading FarmCloud Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`bg-white shadow-xl border-r border-gray-200 transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="text-lg font-bold text-gray-800">FarmCloud™</h1>
                <p className="text-xs text-gray-500">Dashboard</p>
              </div>
            )}
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {sidebarOpen && <span className="font-medium">{item.name}</span>}
              </button>
            );
          })}
        </nav>

        {/* Farm Info */}
        {sidebarOpen && (
          <div className="p-4 border-t border-gray-200 mt-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 text-sm mb-2">Farm Info</h3>
              <div className="space-y-2 text-xs text-green-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  <span>{farmData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sprout className="w-3 h-3" />
                  <span>{farmData.size}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                
                <div>
                  <h1 className="text-xl font-bold text-gray-800 capitalize">{activeTab}</h1>
                  <p className="text-sm text-gray-600">{farmData.name}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search farm data..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 w-64"
                  />
                </div>
                
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200 relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Settings className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-green-600" />
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default FarmCloudDashboard;