import React, { Component } from 'react';
import Product from '../Product/Product.jsx';
import axios from 'axios';

class Dashboard extends Component {

  deleteProduct = (id) => {
    axios.delete(`/api/inventory/${id}`)
      .then(res => {
        console.log("res in delete", res.data)
        this.props.getInventory();
      })
  }

  render() {
    let inventoryList = this.props.inventory.map((item, i) => {
      return (
        <div key={i}>
          <Product 
            item={ item }
            deleteFn={ this.deleteProduct }/>
        </div>
      )
    })

    return(
      <div>
        <div>Dashboard</div>
        {inventoryList}
      </div>
    )
  }
}

export default Dashboard;