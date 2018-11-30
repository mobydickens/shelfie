import React, { Component } from 'react';
import Product from '../Product/Product.jsx';

class Dashboard extends Component {

  render() {
    return(
      <div>
        <div>Dashboard</div>
        <Product />
      </div>
    )
  }
}

export default Dashboard;