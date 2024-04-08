"use client";
import React from 'react';
import Header from '../body/header';
import FeatureSection from '../featureSection/featureSection';
import AboutUs from '../aboutus';
import ContactSales from '../contactSales';
import FooterSection from '../footerSection';
import OurServices from '../ourservices/ourservices';
import Products from '@/app/products/page';

const Home = () => {
  return (
    <div>
        <Header/>
        <FeatureSection/>
        <OurServices/>
        <Products/>
        <ContactSales/>
        <FooterSection/>
    </div>
  )
}

export default Home;
