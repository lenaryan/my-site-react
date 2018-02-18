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
              <h1>My Works</h1>
              <p className="intro-text">There are web pages that were created by me or with my participation. I have attached screenshots for desktop and mobile versions of the each website main page and listed technologies I used or parts I worked on</p>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Works;