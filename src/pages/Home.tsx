import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Solutions from '../components/Solutions';
import ZoliBuild from '../components/ZoliBuild';
import Marketplace from '../components/Marketplace';
import Ecommerce from '../components/Ecommerce';
import Certifications from '../components/Certifications';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Solutions />
      <ZoliBuild />
      <Marketplace />
      <Ecommerce />
      <Certifications />
    </>
  );
}