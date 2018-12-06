import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App white-text">
          <div className="overlay">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
