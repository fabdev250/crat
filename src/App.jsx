// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Projects from './pages/Projects';
import Faqs from './pages/Faqs';
import Pricing from './pages/Pricing';
import Careers from './pages/Careers';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import FarmCloudLogin from './pages/FarmCloudLogin';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <PWAInstallPrompt />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/farmcloud-login" element={<FarmCloudLogin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;