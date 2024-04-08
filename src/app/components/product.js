import React from "react";
import Image from 'next/image'

const Product = (props) => {
  return (
    <div>
      <section className="bg-white relative text-black z-10 overflow-hidden p-20 lg:py-[120px]">
      <div className="flex flex-row grid grid-cols-2 gap-* p-15 space-x-5">
        <Image className="" src={props.imgurl} alt="#9089fc" height={350} width={350} style={{ borderRadius: '25%'}}/>
              <div>
                 <h1 className="text-3xl text-center font-black"> {props.name} </h1> 
                 <br></br>
                 <div className="text-xl"> {props.intro} </div> 
                 <br></br>
                 <div className="font-black text-xl">Features:</div>
                 <ul className="list-disc text-lg">
                    {props.features.map((feature,i) => (
                      <li key={i}>{feature}</li>
                    ))}
                 </ul>
              </div>
      </div>
      </section>
    </div>
  );
};

export default Product;