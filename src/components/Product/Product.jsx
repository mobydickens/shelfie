import React from 'react';

function Product(props) {
  console.log("product props", props)
  let products = props.inventory.map((item, i) => {
    return(
      <div key={i}>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <img src="https://via.placeholder.com/300" alt="product image"/>
      </div>
    )
  })
  return(
    <div>
      <div>Product</div>
      {products}
    </div>
  )
}

export default Product;