import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div className="header"> 
            <div className="wrapper">
                <div className="head-inside">
                    <Link className="logo" to='/'>METALWEBDEV</Link>
                    <Link className="menu-item link-works" to='/works'>Works</Link>
                    <Link className="menu-item link-arts" to='/arts'>Arts</Link>
                    <Link className="menu-item link-blog" to='/blog'>Blog</Link>
                    <Link className="menu-item link-me" to='/me'>It's Me</Link>
                </div>
            </div>
      </div>
    );
  }
}

export default Header;
