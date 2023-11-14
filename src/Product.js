import React, { useContext } from 'react';
import { StateContext } from './components/StateProvider';
import "./product.css";

function Product(props) {
  // useContext{State}
  
  const {initialState, dispatch} = useContext(StateContext);
  
  
  const addToBucket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        rating: props.rating
      }

    })
  }
  return (
    <div className='product'>
        <div className='product__info'>
            <p className='product__title'>{props.title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
        </div>
        <div className='product__rating'>
          {
             Array(props.rating).fill().map((_) =>  <p>*</p>)
          }
          </div>
        <img className='product__image' src={props.image} alt="" />
        <button onClick={addToBucket} className='order__btn'>Add to Cart</button>
    </div>

  );
}

export default Product