import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import tw from 'tailwind-styled-components';
import { ProductInfo } from '../data/productInfo';

function Products() {
  const [showPopup, setShowPopup] = useState(false);
  const [productSelected, setProductSelected] = useState([]);


  const openPopup = (product) => {
    console.log(product)
    setProductSelected([product]);
    console.log(productSelected)
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 pt-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {ProductInfo.map((product, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 p-4 w-full"
                onClick={() => openPopup(product)}
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.image}
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.name}
                  </h2>
                  <p className="mt-1">{`${product.price}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {showPopup && productSelected && (
        <Popup>
          <div className="h-14 text-lg rounded-t-lg flex font-medium justify-center items-center text-white max-w-xl bg-[#0080ff] w-full md:w-5/6">
            <h2>Product Info</h2>
          </div>
          <PopupContent>
            <CloseButton onClick={closePopup}>
              <img
                className="h-4"
                src="https://img.icons8.com/?size=512&id=46&format=png"
                alt="Close"
              />
            </CloseButton>
            {productSelected.map((info, index) => (
              <div key={index} id={index} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-lg'>{info.name}</h1>
                <h1 className='font-semibold text-base'>{info.price}</h1></div>
                <ul className="flex flex-col gap-1 items-start">
                    <li className='ml-2 text-sm'>The Above Cost Includes</li>
                  {info.features.map((feature, i) => (
                    <li className='ml-5' key={i}>&#x2022; {feature}</li>
                  ))}
                </ul>
                <h5 className='text-sm'>Cost Of Any Additional Repairs Apart From The List Mentioned Above Will Be Charged Additional.</h5>
              </div>
            ))}
          </PopupContent>
        </Popup>
      )}
    </>
  );
}

export default Products;

const Popup = tw.div`
  fixed top-0 left-0 right-0 bottom-0 flex items-center flex-col justify-center bg-black bg-opacity-50 p-2 z-10 text-black
`;

const PopupContent = tw.div`
  bg-white rounded-b-lg max-w-xl w-full md:w-5/6 h-auto flex justify-center items-center flex-col p-2
`;

const CloseButton = tw.button`
  absolute top-4 right-4 p-2 rounded-full text-black bg-white
`;
