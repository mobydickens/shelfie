import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Form from './components/Form/Form.jsx';
import Header from './components/Header/Header.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Dashboard />
       <Form />
      </div>
    );
  }
}

export default App;
