import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';

class Works extends Component {
  render() {
    return (
      <div className="works-page site-page"> 
        <Header/>
        <div className="home">
            <div className="wrapper">
              <h1>My Works</h1>
              <p className="intro-text">These are web pages that were created by me or with my participation. I have attached screenshots for desktop and mobile versions of the each website main page and listed technologies I used or parts I worked on</p>
              <div className="sites-gallery">
                <div className="site">
                  <div className="screens">
                    <img src={require("../images/zhivojrak.png")} alt="zhivojrak" />
                    <img src={require("../images/zhivojrak-mob.png")} alt="zhivojrak-mobile" />
                  </div>
                  <a href="https://www.zhivojrak.ru">www.zhivojrak.ru</a>
                  <p>CMS: <b>Joomla</b></p>
                  <p>Responsible for: HTML, CSS, @media queries, JS, JQuery, editing Joomla modules with a little bit of PHP.</p>
                </div>
                <div className="site">
                  <div className="screens">
                    <img src={require("../images/transart.png")} alt="transart" />
                    <img src={require("../images/transart-mob.png")} alt="transart-mobile" />
                  </div>
                  <a href="http://trans-art.ru">trans-art.ru</a>
                  <p>CMS: <b>WordPress</b></p>
                  <p>Responsible for: HTML, CSS, @media queries, JS, JQuery.</p>
                </div>
                <div className="site">
                  <div className="screens">
                    <img src={require("../images/transart-del.png")} alt="transart-del" />
                    <img src={require("../images/transart-del-mob.png")} alt="transart-del-mobile" />
                  </div>
                  <a href="http://trans-art.ru/delivery">trans-art.ru/delivery</a>
                  <p>CMS: <b>WordPress</b></p>
                  <p>Responsible for: HTML, CSS, @media queries, JS, JQuery.</p>
                </div>
                <div className="site">
                  <div className="screens">
                    <img src={require("../images/newwallet.png")} alt="newwallet" />
                    <img src={require("../images/newwallet-mob.png")} alt="newwallet-mobile" />
                  </div>
                  <a href="http://newwallet.ru">newwallet.ru/delivery</a>
                  <p>CMS: <b>Joomla</b></p>
                  <p>Responsible for: @media queries, JQuery.</p>
                </div>
              </div>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Works;