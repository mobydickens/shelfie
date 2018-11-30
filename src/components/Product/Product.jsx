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
          <button onClick={ () => props.setSelectedProductFn(props.item) }>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Product;

//The edit starts in PRODUCT when user clicks edit button. That fires 
//SET SELECTED PRODUCT FN in APP which sets apps state to the current product to be edited. 
// We need to then be INPUTING our EDITS, which will reset STATE in FORM and be sent as the axios request to the BACK END. Once we recieve those edits BACK, we'll send the updated list to APP

//So really, I need to say when SAVE CHANGES is clicked, THEN run the axios request. And I need to show save changes when

