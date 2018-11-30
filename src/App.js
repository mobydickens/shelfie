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
      inventory: []
    }
    //binding inventory function
    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory = () => {
    axios.get('/api/inventory').then(res => {
      console.log(res.data)
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
       <Header />
       <Dashboard inventory={ this.state.inventory }/>
       <Form getInventory={ this.getInventory }/>
      </div>
    );
  }
}

export default App;
