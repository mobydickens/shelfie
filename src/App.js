import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Form from './components/Form/Form.jsx';
import Header from './components/Header/Header.jsx';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  
  render() {
    
    return (
      <div>
       <Header />
       <div className="container">
        <Switch>
          <Route exact path="/" component={ Dashboard } />
          <Route path="/add" component={ Form }/>
          <Route path="/edit/:id" component={ Form } />
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
