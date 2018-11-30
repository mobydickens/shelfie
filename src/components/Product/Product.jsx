import React from 'react';

function Product(props) {

  console.log("props in product", props.item);
  return(
    <div>
      <div>Product</div>
      <p>{props.item.name}</p>
      <p>{props.item.price}</p>
      <img src={ props.item.image_url ? props.item.image_url : "https://via.placeholder.com/300"} alt="product"/>
      <button onClick={ () => props.deleteFn(props.item.id) }>Delete</button>
    </div>
  )
}

export default Product;