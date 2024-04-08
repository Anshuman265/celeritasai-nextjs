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
    imgurl: "/static/images/Kuber.png"
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



const Products = () => {
  return (
    <div className='bg-white p-5'>
      <h2 className="bg-white text-center p-5 mt-2 text-3xl font-bold tracking-tight text-gray-900 lg:text-center sm:text-4xl text-indigo-600">Our Products</h2>
      <div className='p-10 bg-white'>
        {products.map((product,i) => (
          <Product imgurl={product.imgurl} intro={product.intro} name={product.name}  key={i} features={product.features}/>
        ))}
      </div>
    </div>
  )
}

export default Products;
