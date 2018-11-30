import React from 'react';

function Product(props) {

  console.log("props in product", props.item);
  return(
    <div className="product-box">
      <div className="product-inner-all">
        <img src={ props.item.image_url ? props.item.image_url : "https://via.placeholder.com/300"} alt="product"/>
        <div className="product-inner-text">
          <p>{props.item.name}</p>
          <p>{props.item.price}</p>
          <button onClick={ () => props.deleteFn(props.item.id) }>Delete</button>
          <button onClick={ () => props.setSelectedProductFn(props.item.id) }>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Product;