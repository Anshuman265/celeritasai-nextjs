"use client";
import React from 'react';
import Image from 'next/image'
import Navbar from '../components/navbar/navbar';
import FooterSection from '../components/footerSection';
import Product from '../components/product';

const products = [
  {
    name: 'TOTA',
    intro: 'In-house Deployment with state-of-the-art LLM Technology (private/public cloud platform)',
    features: [
      " Using the state-of-the-art open-source software to generate question-answer pairs from the text  and then check the overlap of the user’s question with the generated question and identify the corresponding answer with maximum overlap as chatbot’s response.",
      " Using pre-trained models: Roberta/BERT/LAMA2 with text as context for generation of answer to user’s question",
      " Lastly, Fine tuning the pre-trained models with content scrapped from urls."
    ], 
    imgurl: "/static/images/tota.jpg"
  },
  {
    name: 'KUBER',
    intro: 'KUBER is AI/ML and Deep Learning based trading assistance for Stock Market Analysis and Stock Prices Prediction.',
    features: [
      "Voice Based Trading Assistance Enabled: Integrated with Alexa and Google Assistance','Configurable: Long, Mid, Short term Investors','Cloud Based & API based Services",
      "Configurable: Long, Mid, Short term Investors",
      "Cloud Based & API based Services"
    ],
    imgurl: "/static/images/kuber.png"
  },
  {
    name: 'IRIS',
    intro: 'IRIS is an AI-powered e-commerce recommendation system, utilizing machine learning and a Smart Mailer Engine to suggest trending products to online shoppers.',
    features: [
      "IRIS is Intelligent e-commerce Recommend-er Information System, based on AI/ML technologies integrated with Smart Mailer Engine (SME) for suggesting hot-products on e-commerce platforms to their customers."
    ],
    imgurl: "/static/images/IRIS.png"
  },
  {
    name: 'Vircalp',
    intro: 'VIRCALP AUTO is AI/ML based virtual calibration platform for Automotive OEMs.',
    features: [
      "It enables co-simulation while calibrating Controllers with Plant Models",
      "Reduce V-Cycle time, cost & efforts",
      "Reduce Software Development Cost, time & Efforts",
      "On-Road Vehicle Development/ Off-Road (Agro-Tech) Vehicle Development​"
    ],
    imgurl:  "/static/images/Vircalp.png"
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
      <div className='p-10 bg-white'>
        {products.map((product,i) => (
          <Product imgurl={product.imgurl} intro={product.intro} name={product.name}  key={i} features={product.features}/>
        ))}
      </div>
    <FooterSection/>
    </div>
  )
}

export default Home;
