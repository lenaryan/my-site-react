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
                </div>
            </div>
      </div>
    );
  }
}

export default Footer;
