import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

  constructor() {
    super();
    this.state = {
      image_url: '',
      product_name: '',
      price: '',
      currentProductId: null
    }
  }

  componentDidUpdate(oldProps) {
    console.log("function running?")
    if(oldProps.currentProductId !== this.props.currentProduct.id) {
      this.setState({
        image_url: this.props.image_url,
        product_name: this.props.product_name,
        price: this.props.price,
        currentProductId: this.props.currentProduct.id
      })
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
      price: '',
      currentProductId: null
    })
  }

  createRequest = () => {
    console.log("function running?")
    axios.post('/api/product', this.state)
      .then(res => {
        this.props.getInventory();
        this.cancel();
      }).catch(error => {
        console.log('error in createRequest', error);
      })
  }

  render() {
    return(
      <div className="form">
        <img src="https://via.placeholder.com/300" alt="placeholder"/>
        <input type="text" placeholder="image url" onChange={ (e) => this.handleImageChange(e.target.value) } value={ this.state.image_url }/>
        <input type="text" placeholder="product name" onChange={ (e) => this.handleProductChange(e.target.value) } value={ this.state.product_name }/>
        <input type="text" placeholder="price" onChange={ (e) => this.handlePriceChange(e.target.value) } value={ this.state.price }/>
        <button onClick={ () => this.cancel() }>Cancel</button>
        <button onClick={ () => this.createRequest() }>{this.state.currentProductId !== null ? 'Save Changes' : 'Add to Inventory'}</button>
      </div>
    )
  }
}

export default Form;