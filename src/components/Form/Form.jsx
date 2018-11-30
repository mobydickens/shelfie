import React, { Component } from 'react';

class Form extends Component {

  constructor() {
    super();
    this.state = {
      image_url: '',
      product_name: '',
      price: ''
    }
  }

  handleImageChange = (value) => {
    this.setState({
      image_url: value
    })
  }

  handleProductChange = (value) => {
    this.setState({
      product_name: value
    })
  }

  handlePriceChange = (value) => {
    this.setState({
      price: value
    })
  }
  
  cancel = () => {
    this.setState({
      image_url: '',
      product_name: '',
      price: ''
    })
  }

  render() {
    return(
      <div>
        <div>Form</div>
        <input type="text" placeholder="image url" onChange={ (e) => this.handleImageChange(e.target.value) } value={ this.state.image_url }/>
        <input type="text" placeholder="product name" onChange={ (e) => this.handleProductChange(e.target.value) } value={ this.state.product_name }/>
        <input type="text" placeholder="price" onChange={ (e) => this.handlePriceChange(e.target.value) } value={ this.state.price }/>
        <button onClick={ () => this.cancel() }>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    )
  }
}

export default Form;