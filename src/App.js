import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Form from './components/Form/Form.jsx';
import Header from './components/Header/Header.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      currentProduct: []
    }
    //binding inventory function
    this.getInventory = this.getInventory.bind(this);
    this.setSelectedProduct = this.setSelectedProduct.bind(this);
  }

  componentDidMount() {
    // console.log('component did mount running')
    this.getInventory();
  }

  getInventory = () => {
    // console.log("get inventory running")
    axios.get('/api/inventory').then(res => {
      // console.log(res.data, 'in axios get')
      this.setState({
        inventory: res.data
      })
    })
  }

  setSelectedProduct = (product) => {
    // console.log('selected product', product)
    this.setState({
      currentProduct: product
    })
  }

  render() {
    return (
      <div>
       <Header />
       <div className="container">
        <Dashboard 
          inventory={ this.state.inventory } 
          getInventory={ this.getInventory }
          setSelectedProductFn={ this.setSelectedProduct } />
        <Form 
          getInventory={ this.getInventory }
          currentProduct={ this.state.currentProduct }/>
        </div>
      </div>
    );
  }
}

export default App;
