import ProductContext from "./components/ProductContext";
import React, { useContext } from React;

function ProdUpgraded(detail.title, detail.price, detail.rating, id) {
    const {prodDetails} = useContext(ProductContext)
  return (
    <>
        prodDetails.map(detail => {
            return (
            <div className='product__info' key={detail.key}>
                <p className='product__title'>{detail.title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{
                    detail.price}</strong>
                </p>
            </div>
            <div className='product__rating'>
            {
                Array(detail.rating).fill().map((_) =>  <p>*</p>)
            }
            </div>
            <img className='product__image' src={detail.image} alt="" />
            <button onClick={addToBucket} className='order__btn'>Add to Cart</button>
            )
        })
    </>
  );
}

export default ProdUpgraded;
