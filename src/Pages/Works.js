import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';

class Works extends Component {
  render() {
    return (
      <div className="works-page"> 
        <Header/>
        <div className="home">
            <div className="wrapper">
                Works
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Works;