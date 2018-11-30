import React, { Component } from 'react';
import Product from '../Product/Product.jsx';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
    }
    //binding inventory function
    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  deleteProduct = (id) => {
    axios.delete(`/api/inventory/${id}`)
      .then( () => {
        this.getInventory();
        console.log("deleted")
      })
  }

  render() {
    let inventoryList = this.state.inventory.map((item, i) => {
      return (
        <div key={i}>
          <Product 
            item={ item }
            deleteFn={ this.deleteProduct }
            // setSelectedProductFn={ this.props.setSelectedProductFn }
          />
        </div>
      )
    })

    return(
      <div className="dashboard">
        {inventoryList}
      </div>
    )
  }
}

export default Dashboard;