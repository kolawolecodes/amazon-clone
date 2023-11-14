import React from 'react';
import "./checkOut.css"
import SubTotal from "../SubTotal"

function CheckOut() {
    return ( 
      <div className = 'checkout'>
        <div className = 'checkOut__content__wrap' >
          <div className = 'left__side' >
            <span> You have no Item in Basket.Buy one!</span> 
          </div> 
          <div className = 'right__side'>
            <SubTotal />
          </div> 
        </div> 
      </div>
  );
}

export default CheckOut