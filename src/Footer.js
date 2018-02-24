import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer"> 
        <div className="wrapper">
            <div className="foot-inside">
                <p>Contact me:</p>
                <a href="mailto:enenanichutina@gmail.com">
                    <span className="fcol1">enenanichutina</span>
                    <span className="fcol2">@</span>
                    <span className="fcol3">gmail</span>
                    <span className="fcol4">.com</span>
                </a>
                <div class="social">
                  <a href="https://vk.com/lena_ryan"><i class="fab fa-vk"></i></a>
                  <a href="https://www.facebook.com/russian.plazma.drink"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/russian_plazma_drink/"><i class="fab fa-instagram"></i></a>                  
                </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Footer;
