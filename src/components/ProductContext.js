import React, { useState } from "react";
import img1 from "../images/girl.jpg"

function ProductContext(props) {
    const [productDetails] = useState(
    [
        { title: "Electronics", price: 2.1, rating: 5, image: {img1}, id: 1}
    ]);

    return(
        <ProductContext.Provider value = {{productDetails}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContext;
