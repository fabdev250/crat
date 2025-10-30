// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Projects from "./pages/Projects";
import Faqs from "./pages/Faqs";
import Pricing from "./pages/Pricing";
import Careers from "./pages/Careers";
import SmartGreenhouses from "./pages/SmartGreenhouses";
import FarmCloud from "./pages/FarmCloud";
import Contact from "./pages/Contact";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import FarmCloudLogin from "./pages/FarmCloudLogin";
import FarmCloudDashboard from "./pages/FarmCloudDashboard";
import AIChatbot from "./components/AIChatbot/AIChatbot";

// Main layout for regular pages
const MainLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <PWAInstallPrompt />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
    <AIChatbot />
  </div>
);

// Dashboard layout without header/footer
const DashboardLayout = ({ children }) => (
  <div className="min-h-screen">
    {children}
    {/* No chatbot in dashboard for now */}
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard route with special layout */}
        <Route path="/farmcloud-dashboard" element={
          <DashboardLayout>
            <FarmCloudDashboard />
          </DashboardLayout>
        } />
        
        {/* All other routes with main layout */}
        <Route path="*" element={
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/smart-greenhouses" element={<SmartGreenhouses />} />
              <Route path="/farmcloud" element={<FarmCloud />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/farmcloud-login" element={<FarmCloudLogin />} />
            </Routes>
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;