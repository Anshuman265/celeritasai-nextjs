import React from "react";

const Product = (props) => {
  return (
    <>
      <section className="text-center bg-white relative text-black z-10 overflow-hidden p-20 lg:py-[120px]">
      <div className="grid grid-cols-2 gap-* bg-black p-15">
            <img src={props.imageSrc} alt="#9089fc" height={300} width={300}/>
            <div>{props.name}</div>
        </div>
      </section>
    </>
  );
};

export default Product;