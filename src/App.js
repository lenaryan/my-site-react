import React, { Component } from 'react';
import Home from './Pages/Home';
import './Styles/CSS/default.min.css';
import './scripts.js';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Home/>
      </div>
    );
  }
}

export default App;
