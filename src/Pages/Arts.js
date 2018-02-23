import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';

class Arts extends Component {
  render() {
    return (
      <div className="arts-page site-page"> 
        <Header/>
        <div className="home">
            <div className="wrapper">
                <h1>My Arts</h1>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Arts;