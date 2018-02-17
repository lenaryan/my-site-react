import React, { Component } from 'react';
import Home from './Pages/Home';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
