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

  //clears inputs when navigating from edit to add URL. 
  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id) {
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
  //My POST request
  createRequest = () => {
    axios.post('/api/product', this.state)
      .then(res => {
        this.cancel();
      }).catch(error => {
        console.log('error in createRequest');
      })
  }

  editProduct = (id) => {
    axios.put(`/api/inventory/${id}`, { image_url: this.state.image_url, product_name: this.state.product_name, price: this.state.price})
      .then(res => {
        this.setState({
          image_url: '',
          product_name: '',
          price: ''
        })
      })
  }

  render() {
    return(
      <div className="form">
        <img src={this.state.url !== '' ? this.state.image_url : 'http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg' } alt="placeholder"/>
        <label htmlFor="image">Image URL:</label>
        <input 
          id="image"
          type="text" 
          placeholder="image url" 
          onChange={ (e) => this.handleImageChange(e.target.value) } 
          value={ this.state.image_url }/>
        <label htmlFor="product">Product Name:</label>
        <input 
          id="product"
          type="text" 
          placeholder="product name" 
          onChange={ (e) => this.handleProductChange(e.target.value) } 
          value={ this.state.product_name }/>
        <label htmlFor="price">Price: </label>
        <input 
          id="price"
          type="text" 
          placeholder="price" 
          onChange={ (e) => this.handlePriceChange(e.target.value) } value={ this.state.price }/>

        {this.props.match.params.id ?  <Link to="/"><button onClick={ () => this.editProduct(this.state.currentProductId) }>Save Changes</button></Link> : <Link to="/"><button onClick={ () => this.createRequest() }>Add New Inventory</button></Link>}
        <Link to="/"><button 
          onClick={ () => this.cancel() }>Cancel</button></Link>
      </div>
    )
  }
}

export default Form;