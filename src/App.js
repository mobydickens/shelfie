import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Form from './components/Form/Form.jsx';
import Header from './components/Header/Header.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [
        {
          name: "Christmas tree",
          price: "35.00",
          image: "https://via.placeholder.com/300"
        },
        {
          name: "Socks",
          price: "5.00",
          image: "https://via.placeholder.com/300"
        },
        {
          name: "T-Shirt",
          price: "35.00",
          image: "https://via.placeholder.com/300"
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
       <Header />
       <Dashboard inventory={ this.state.inventory }/>
       <Form />
      </div>
    );
  }
}

export default App;
