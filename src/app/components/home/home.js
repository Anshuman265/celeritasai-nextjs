"use client";
import React from 'react';
import Header from '../body/header';
import FeatureSection from '../featureSection/featureSection';
import AboutUs from '../aboutus';
import ContactSales from '../contactSales';
import FooterSection from '../footerSection';

const Home = () => {
  return (
    <div>
        <Header/>
        <FeatureSection/>
        <ContactSales/>
        <FooterSection/>
    </div>
  )
}

export default Home;
