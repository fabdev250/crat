// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import Mission from '../components/Mission/Mission';
import Products from '../components/Products/Products';
import Testimonials from '../components/Testimonials/Testimonials';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Products />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;