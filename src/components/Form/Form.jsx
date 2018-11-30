import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      product_name: '',
      price: '',
      currentProductId: this.props.match.params.id
    }
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id) {
      console.log('component did update!');
      this.setState({
        image_url: '',
        product_name: '',
        price: ''
      })
    }
  }

  componentDidMount() {
    this.getSingleProduct = () => {
      axios.get(`/api/product/${this.props.match.params.id}`)
        .then(res => {
          this.setState({
            image_url: res.data.image_url,
            product_name: res.data.name,
            price: res.data.price
          })
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
    // console.log("function running?")
    axios.post('/api/product', this.state)
      .then(res => {
        this.cancel();
      }).catch(error => {
        console.log('error in createRequest');
      })
  }
  //this won't be clicked until the state has been updated with all of our inputs
  editProduct = (id) => {
    axios.put(`/api/inventory/${id}`, { image_url: this.state.image_url, product_name: this.state.product_name, price: this.state.price})
      .then(res => {
        this.setState({
          image_url: '',
          product_name: '',
          price: '',
          currentProductId: null
        })
      })
  }

  render() {
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
        <Link to="/"><button 
          onClick={ () => this.cancel() }>Cancel</button></Link>
        <Link to="/"><button onClick={ () => this.editProduct(this.state.currentProductId) }>Save Changes</button></Link>
        <Link to="/"><button onClick={ () => this.createRequest() }>Add New Inventory</button></Link>
      </div>
    )
  }
}

export default Form;