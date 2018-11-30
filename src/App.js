import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Form from './components/Form/Form.jsx';
import Header from './components/Header/Header.jsx';
import axios from 'axios';
// import { HashRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      currentProduct: 0
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

  setSelectedProduct = (id) => {
    // console.log('selected product', product)
    this.setState({
      currentProduct: id
    })
  }

  render() {
    console.log("current product", this.state.currentProduct)
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
          currentProductId={ this.state.currentProduct }/>
        </div>
      </div>
    );
  }
}

export default App;
