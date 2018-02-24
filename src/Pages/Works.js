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
                  <div class="site-info">
                    <a href="http://www.zhivojrak.ru">www.zhivojrak.ru</a>
                    <p>CMS: <b>Joomla</b></p>
                    <p class="resp">Responsible for:
                      <img src={require("../images/html.png")} alt="html" />
                      <img src={require("../images/css.png")} alt="css" />
                      <img src={require("../images/js.png")} alt="js" />
                      <img src={require("../images/jquery.png")} alt="jquery" />
                      <img src={require("../images/rwd.png")} alt="rwd" />
                    </p>
                  </div>
                </div>
                <div className="site">                 
                  <div className="screens">
                    <img src={require("../images/transart.png")} alt="transart" />
                    <img src={require("../images/transart-mob.png")} alt="transart-mobile" />
                  </div>
                  <div class="site-info">       
                    <a href="http://trans-art.ru">trans-art.ru</a>           
                    <p>CMS: <b>WordPress</b></p>
                    <p class="resp">Responsible for:
                      <img src={require("../images/html.png")} alt="html" />
                      <img src={require("../images/css.png")} alt="css" />
                      <img src={require("../images/js.png")} alt="js" />
                      <img src={require("../images/jquery.png")} alt="jquery" />
                      <img src={require("../images/rwd.png")} alt="rwd" />
                    </p>
                  </div>
                </div>
                <div className="site">                
                  <div className="screens">
                    <img src={require("../images/transart-del.png")} alt="transart-del" />
                    <img src={require("../images/transart-del-mob.png")} alt="transart-del-mobile" />
                  </div> 
                  <div class="site-info">
                    <a href="http://trans-art.ru/delivery">trans-art.ru/delivery</a>                
                    <p>CMS: <b>WordPress</b></p>
                    <p class="resp">Responsible for:
                      <img src={require("../images/html.png")} alt="html" />
                      <img src={require("../images/css.png")} alt="css" />
                      <img src={require("../images/js.png")} alt="js" />
                      <img src={require("../images/jquery.png")} alt="jquery" />
                      <img src={require("../images/rwd.png")} alt="rwd" />
                    </p>
                  </div>
                </div>
                <div className="site">                
                  <div className="screens">
                    <img src={require("../images/newwallet.png")} alt="newwallet" />
                    <img src={require("../images/newwallet-mob.png")} alt="newwallet-mobile" />
                  </div>  
                  <div class="site-info">    
                    <a href="https://newwallet.ru">newwallet.ru</a>           
                    <p>CMS: <b>Joomla</b></p>
                    <p class="resp">Responsible for: 
                      <img src={require("../images/jquery.png")} alt="jquery" />
                      <img src={require("../images/rwd.png")} alt="rwd" />
                    </p>
                  </div>
                </div>
                <div className="site"> 
                  <div className="screens">
                    <img src={require("../images/mtseti.png")} alt="mtseti" />
                    <img src={require("../images/mtseti-mob.png")} alt="mtseti-mobile" />
                  </div> 
                  <div class="site-info">         
                    <a href="http://mtseti.ru">mtseti.ru</a>        
                    <p>CMS: <b>Joomla</b></p>
                    <p class="resp">Responsible for:
                      <img src={require("../images/html.png")} alt="html" />
                      <img src={require("../images/css.png")} alt="css" />
                      <img src={require("../images/jquery.png")} alt="jquery" />
                      <img src={require("../images/rwd.png")} alt="rwd" />
                    </p>
                  </div>
                </div>
                <div className="site">                  
                  <div className="screens">
                    <img src={require("../images/hotel-ametist.png")} alt="hotel-ametist" />
                    <img src={require("../images/hotel-ametist-mob.png")} alt="hotel-ametist-mobile" />
                  </div>  
                  <div class="site-info">         
                    <a href="http://hotel-ametist.ru">hotel-ametist.ru</a>       
                    <p>CMS: <b>Joomla</b></p>
                    <p class="resp">Responsible for: 
                      <img src={require("../images/rwd.png")} alt="rwd" />
                    </p>
                  </div>
                </div>
                <div className="site">                  
                  <div className="screens">
                    <img src={require("../images/razved-bat.png")} alt="razved-bat" />
                    <img src={require("../images/razved-bat-mob.png")} alt="razved-bat-mobile" />
                  </div> 
                  <div class="site-info">  
                    <a href="http://razved-bat.ru">razved-bat.ru</a>              
                    <p>CMS: <b>Joomla</b></p>
                    <p class="resp">Responsible for:
                      <img src={require("../images/html.png")} alt="html" />
                      <img src={require("../images/css.png")} alt="css" />
                      <img src={require("../images/jquery.png")} alt="jquery" />
                      <img src={require("../images/rwd.png")} alt="rwd" />
                    </p>
                  </div>
                </div>
                <div className="site">                 
                  <div className="screens">
                    <img src={require("../images/tlset.png")} alt="tlset" />
                    <img src={require("../images/tlset-mob.png")} alt="tlset-mobile" />
                  </div>
                  <div class="site-info">       
                    <a href="https://tlset.ru">tlset.ru</a>           
                    <p>CMS: <b>Bitrix</b></p>
                    <p class="resp">Responsible for:
                      <img src={require("../images/html.png")} alt="html" />
                      <img src={require("../images/css.png")} alt="css" />
                      <img src={require("../images/jquery.png")} alt="jquery" />
                      <img src={require("../images/rwd.png")} alt="rwd" />
                    </p>
                  </div>
                </div>
                <div className="site">                  
                  <div className="screens">
                    <img src={require("../images/rosrez.png")} alt="rosrez" />
                    <img src={require("../images/rosrez-mob.png")} alt="rosrez-mobile" />
                  </div> 
                  <div class="site-info">  
                    <a href="http://xn--80aanbigcqxcexbnv3c.xn--p1ai">xn--80aanbigcqxcexbnv3c.xn--p1ai</a>              
                    <p>CMS: <b>Joomla</b></p>
                    <p class="resp">Responsible for:
                      <img src={require("../images/html.png")} alt="html" />
                      <img src={require("../images/css.png")} alt="css" />
                      <img src={require("../images/jquery.png")} alt="jquery" />
                      <img src={require("../images/rwd.png")} alt="rwd" />
                    </p>
                  </div>
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