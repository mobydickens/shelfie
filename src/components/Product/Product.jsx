import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {

  return(
    <div className="product-box">
      <div className="product-inner-all">
        <img src={ props.item.image_url ? props.item.image_url : "https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png" } alt="product"/>
        <div className="product-inner-text">
          <p className="product-name">{props.item.name}</p>
          <p>${props.item.price}.00</p>
          <button className="delete" onClick={ () => props.deleteFn(props.item.id) }>Delete</button>
          <Link to={`/edit/${props.item.id}`}><button className="edit">Edit</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Product;
