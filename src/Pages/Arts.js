import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';

class Arts extends Component {
  render() {
    return (
      <div className="arts-page"> 
        <Header/>
        <div className="home">
            <div className="wrapper">
                Arts
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Arts;