import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

  constructor() {
    super();
    this.state = {
      image_url: '',
      product_name: '',
      price: '',
      currentProductId: ''
    }
  }
  
  componentDidUpdate(oldProps) {
    console.log("function running?");
    if(this.props.currentProduct === null) {
      return;
    }
    if(oldProps.product_name !== this.props.currentProduct.product_name) {
      console.log('component did update!');
      this.setState({
        currentProductId: this.props.currentProduct
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
      currentProductId: 12
    })
  }

  createRequest = () => {
    // console.log("function running?")
    axios.post('/api/product', this.state)
      .then(res => {
        this.props.getInventory();
        this.cancel();
      }).catch(error => {
        console.log('error in createRequest');
      })
  }
  //this won't be clicked until the state has been updated with all of our inputs
  editProduct = (id) => {
    axios.put(`/api/inventory/${id}`, { image_url: this.state.image_url, product_name: this.state.product_name, price: this.state.price})
      .then(res => {
        this.props.getInventory();
      })
  }

  render() {
    console.log(this.props)
    return(
      <div className="form">
        <img src="https://via.placeholder.com/300" alt="placeholder"/>
        <input 
          title="Image URL:" 
          type="text" 
          placeholder="image url" 
          onChange={ (e) => this.handleImageChange(e.target.value) } 
          value={ this.state.image_url }/>
        <input 
          title="Product Name:" 
          type="text" 
          placeholder="product name" 
          onChange={ (e) => this.handleProductChange(e.target.value) } 
          value={ this.state.product_name }/>
        <input 
          title="Price:"
          type="text" 
          placeholder="price" 
          onChange={ (e) => this.handlePriceChange(e.target.value) } value={ this.state.price }/>
        <button 
          onClick={ () => this.cancel() }>Cancel</button>
        <button onClick={ () => this.editProduct() }>Save Changes</button> 
        <button onClick={ () => this.createRequest() }>Add New Inventory</button>
      </div>
    )
  }
}

export default Form;