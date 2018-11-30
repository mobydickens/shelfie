import React, { Component } from 'react';
import Product from '../Product/Product.jsx';

class Dashboard extends Component {

  render() {
    let inventoryList = this.props.inventory.map((item, i) => {
      return (
        <div key={i}>
          <Product inventory={ this.props.inventory }/>
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