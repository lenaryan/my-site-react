import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';

class Blog extends Component {
  render() {
    return (
      <div className="blog-page"> 
        <Header/>
        <div className="home">
            <div className="wrapper">
                Blog
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;