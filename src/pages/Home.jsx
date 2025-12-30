import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import Features from '../components/features/Features';
import Testimonials from '../components/testimonials/Testimonials';
import Benefits from '../components/benefits/Benefits';
import Footer from '../components/footer/Footer';
import Future from '../components/future/Future';
import Product from '../components/product/Product';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Benefits/>
      <Features />
      <Product/>
      <Testimonials />
      <Future />
      <Footer/>
    </>
  );
};

export default Home;
