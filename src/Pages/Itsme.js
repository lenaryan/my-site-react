import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';

class Itsme extends Component {
  render() {
    return (
      <div className="me-page"> 
        <Header/>
        <div className="home">
            <div className="wrapper">
              <h1>About me</h1>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Itsme;