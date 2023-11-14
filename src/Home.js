import React, { useContext } from 'react';
import './home.css';
import Product from './Product';
import img1 from "./images/computer.jpg";
import imgGirl from "./images/girl.jpg";
import imgBrush from "./images/Brushes.jpg";
import imgFlatMoni from "./images/flat-monitor.jpg";


function Home() {
  // const {products} = useContext(StateContext)

  // console.log(products)

  return (
    <div className='home'>
      <img className='banner__image' src={"https://m.media-amazon.com/images/I/61+eWlUa0zL._SX1500_.jpg"} alt="amazonImage" />
      
      <div className='product__rows'>
        <div className='product__wrapper'>
         <Product 
                 id = "121314"
                 title = "Hp Pavillion"
                 price = {22.1}
                 rating = {4}
                 image = {img1}
                 />

        </div>

        <div className='product__wrapper'>
         <Product
            id = "121314"
            title = "Toys Under"
            price = {22.1}
            rating = {4}
            image = {imgGirl}
            />
        </div>

        <div className='product__wrapper'>
         <Product
            id = "121314"
            title = "Electronics"
            price = {22.1}
            rating = {4}
            image = {img1}
            />
        </div>

        <div className='product__wrapper'>
         <Product
            id = "121314"
            title = "Beauty picks"
            price = {22.1}
            rating = {4}
            image = {imgBrush}
            />
        </div>
      </div>

      {/* second roll */}
      <div className='product__rows'>
        <div className='product__wrapper'>
         <Product
            id = "121314"
            title = "Flat Mornitors"
            price = {22.1}
            rating = {4}
            image = {imgFlatMoni}
            />
        </div>

        <div className='product__wrapper'>
         <Product
            id = "121314"
            title = "Toys Under"
            price = {22.1}
            rating = {4}
            image = {img1}
            />
        </div>

        <div className='product__wrapper'>
         <Product
            id = "121314"
            title = "Electronics"
            price = {22.1}
            rating = {4}
            image = {imgGirl}
            />
        </div>

        <div className='product__wrapper'>
         <Product
            id = "121314"
            title = "Beauty picks"
            price = {22.1}
            rating = {4}
            image = {imgBrush}
            />
        </div>
      </div>
      
    </div>
  );
}

export default Home
