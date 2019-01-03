import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Works from './components/pages/Works';
import Blog from './components/blog/Blog';
import Me from './components/pages/Me';
import BlogPost from './components/blog/BlogPost';
import CreateBlogPost from './components/blog/CreateBlogPost';
import AdminSignIn from './components/pages/AdminSignIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App white-text grey darken-4">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/works" component={Works} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/new" component={CreateBlogPost} />
            <Route exact path="/blog/:id" component={BlogPost} />
            <Route path="/about-me" component={Me} />
            <Route path="/signin" component={AdminSignIn} />

          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
