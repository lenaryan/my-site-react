import React, { Component } from 'react';
import Footer from '../Footer';

class Itsme extends Component {
  render() {
    return (
      <div className="me-page"> 
        <div className="home">
            <div className="wrapper">
                It's me
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Itsme;