import React, { Component } from 'react';
import axios from 'axios';

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

  createRequest = () => {
    console.log("function running?")
    axios.post('/api/product', this.state)
      .then(res => {
        console.log("create request data", res.data);
        this.props.getInventory();
        this.cancel();
      }).catch(error => {
        console.log('error in createRequest', error);
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
        <button onClick={ () => this.createRequest() }>Add to Inventory</button>
      </div>
    )
  }
}

export default Form;