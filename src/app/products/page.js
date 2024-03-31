"use client";
import React from 'react';
import Navbar from '../components/navbar/navbar';
import FooterSection from '../components/footerSection';
import Product from '../components/product';

const products = [
  {
    name: 'TOTA',
    description: ['Full Funnel Analytics','Data Integration and Automated Dashboard Development','Ceaseless Monitoring and Evaluation'], 
    imgurl: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwMzV8MHwxfGFsbHwxf'
  },
  {
    name: 'KUBER',
    intro: 'KUBER is AI/ML and Deep Learning based trading assistance for Stock Market Analysis and Stock Prices Prediction.',
    features: ['Voice Based Trading Assistance Enabled: Integrated with Alexa and Google Assistance','Configurable: Long, Mid, Short term Investors','Cloud Based & API based Services'],
    imgurl: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwMzV8MHwxfGFsbHwxf'
  },
  {
    name: 'Data Science and Data Engineering',
    description: ['Data Discovery','Augmented Analytics','Data Intelligence'],
    imgurl: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwMzV8MHwxfGFsbHwxf'
  },
  {
    name: 'Strategic Management',
    description: ['Business Model Transformation','Corporate and Sustainable Strategy','Financial Strategy Formulation'],
    imgurl: 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwMzV8MHwxfGFsbHwxf'
  },
]



const Home = () => {
  return (
    <div>
    <Navbar/>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Our products
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We believe that growth lies in continuous innovation and
                making easier to access technology to each and everyone
                by providing them realy simple medium of access
              </p>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
      <div className='p-10 bg-black'>
        {products.map((product,i) => (
          <Product imgurl={product.imgSrc} name={product.name}  key={i} />
        ))}
      </div>
    <FooterSection/>
    </div>
  )
}

export default Home;
