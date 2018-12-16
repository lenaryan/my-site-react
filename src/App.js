import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Works from './components/pages/Works';
import Blog from './components/pages/Blog';
import Me from './components/pages/Me';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App white-text grey darken-4">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/works" component={Works} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/about-me" component={Me} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
