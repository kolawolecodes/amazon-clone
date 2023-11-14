import React from 'react';
import "./product2.css"

function ProductCombine({title,image}) {

  const images = {
    kitche: "{imgKitchen}",
    brush: "{imgKitchen}",
    computer:" {img1}",
    girl: "{imgGirl}"
  }

  return (
    <div className='product'>
        <div className='product__info'>
            <p className='product__title'>{title}</p>
        </div>
        
        <div className='images__wraper'>
            {
              images.map((image, index) => (
                <div key={index}>
                  <img className='product__image2' src={image.kitchen} alt="" />
                  <img className='product__image2' src={image.brush} alt="" />
                  <img className='product__image2' src={image.computer} alt="" />
                  <img className='product__image2' src={image.girl} alt="" />
                </div>
              ))
            }
        </div>
    </div>

  );
}

export default ProductCombine