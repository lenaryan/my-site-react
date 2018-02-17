import React, { Component } from 'react';
import Footer from '../Footer';

class Blog extends Component {
  render() {
    return (
      <div className="blog-page"> 
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